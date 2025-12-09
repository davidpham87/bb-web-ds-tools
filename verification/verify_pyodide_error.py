import threading
import http.server
import socketserver
import os
import time
from playwright.sync_api import sync_playwright

PORT = 8080
DIRECTORY = "docs"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def handle(self):
        try:
            super().handle()
        except (BrokenPipeError, ConnectionResetError):
            pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
        httpd.serve_forever()

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        try:
            print("Navigating to Pyodide view...")
            page.goto(f"http://localhost:{PORT}/#/pyodide")

            # Wait for any text to confirm page load
            # The view has "Python Code" label
            page.wait_for_selector("text=Python Code", timeout=15000)
            print("Pyodide view loaded.")

            print("Waiting for Pyodide to load...")
            # Wait for "Loading Pyodide..." to disappear if it appears
            try:
                if page.is_visible("text=Loading Pyodide..."):
                    print("Loading message visible, waiting for it to hide...")
                    page.wait_for_selector("text=Loading Pyodide...", state="hidden", timeout=60000)
                else:
                    print("Loading message not visible immediately.")
                    # Give it a moment to appear if it's slow
                    time.sleep(1)
                    if page.is_visible("text=Loading Pyodide..."):
                        print("Loading message appeared, waiting for it to hide...")
                        page.wait_for_selector("text=Loading Pyodide...", state="hidden", timeout=60000)
            except Exception as e:
                print(f"Error handling loading state: {e}")

            print("Pyodide loaded. Finding editor...")
            # Focus on the editor.
            page.wait_for_selector(".editor-wrapper", timeout=10000)
            page.click(".editor-wrapper")

            # Select all and delete
            page.keyboard.press("Control+A")
            page.keyboard.press("Backspace")

            # Enter error code
            page.keyboard.insert_text("1 / 0")

            print("Clicking Run...")
            page.click("text=Run")

            # Wait a bit for execution
            time.sleep(2)

            print("Checking for error message in view...")
            error_selector = "text=Error: division by zero"

            # Take a screenshot to see what is happening
            page.screenshot(path="verification/pyodide_view.png")

            if page.is_visible(error_selector):
                print("Error message FOUND in view.")
            else:
                print("Error message NOT FOUND in view.")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/pyodide_failure.png")
        finally:
            browser.close()

if __name__ == "__main__":
    if not os.path.exists("verification"):
        os.makedirs("verification")

    # Start server in background thread
    server_thread = threading.Thread(target=serve, daemon=True)
    server_thread.start()

    # Give server a second to start
    time.sleep(2)

    verify()
