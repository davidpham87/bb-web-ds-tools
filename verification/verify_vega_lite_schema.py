import http.server
import socketserver
import threading
import time
import os
import functools
from playwright.sync_api import sync_playwright, expect

PORT = 8082
DIRECTORY = "docs"

class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

def start_server():
    Handler = functools.partial(SilentHandler, directory=DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

def verify_vega_lite_schema():
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()

    # Give the server a moment to start
    time.sleep(2)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to app...")
            page.goto(f"http://localhost:{PORT}/index.html#/vega-lite")

            # Wait for app to load
            print("Waiting for Vega-Lite view...")
            page.wait_for_selector("text=Config", timeout=20000)

            # Load an example dataset (CSV)
            print("Loading CSV example...")
            page.get_by_role("button", name="CSV").click()

            # Wait for processing
            time.sleep(2)

            # Click on Schema tab
            print("Clicking Schema tab...")
            page.get_by_role("button", name="Schema").click()

            # Wait for editor to be visible
            # With Data tab active on left, and Schema tab active on right, we should have 2 editors.
            expect(page.locator(".monaco-editor").nth(1)).to_be_visible()

            # Take a screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification/vega_lite_schema.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_vega_lite_schema()
