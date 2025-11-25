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

def serve():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
        httpd.serve_forever()

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        try:
            print("Navigating to landing page...")
            page.goto(f"http://localhost:{PORT}")
            page.wait_for_selector("text=Data Science Workbench")
            print("Landing page loaded.")

            # Navigation items to check
            # Key is the label in the navbar (used for title attribute)
            # Value is the text expected to be found on the resulting page
            nav_checks = {
                "Malli": "Input Data",
                "HoneySQL": "Convert to SQL",
                "Vega-Lite": "Data Input",
                "Gemma": "Load Gemma Model",
                "Pyodide": "Load Python Environment",
                "Editor": "Save Code",
                "Repl": "Add REPL",
                "Datasets": "Create New Dataset",
                "Settings": "Settings",
                "Changelog": "Changelog"
            }

            for label, expected_text in nav_checks.items():
                print(f"Navigating to {label}...")

                # Click the navigation link using the title attribute
                # The sidebar defaults to expanded but links work regardless
                page.click(f"nav a[title='{label}']")

                # Wait for the expected text to appear
                try:
                    page.wait_for_selector(f"text={expected_text}", timeout=10000)
                    print(f"Verified {label} page.")
                except Exception as e:
                    print(f"Failed to verify {label} page. Content '{expected_text}' not found.")
                    # Capture screenshot if verification fails
                    page.screenshot(path=f"error_{label}.png")
                    raise e

            print("All pages verified successfully!")

        except Exception as e:
            print(f"Verification failed: {e}")
            exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    # Start server in background thread
    server_thread = threading.Thread(target=serve, daemon=True)
    server_thread.start()

    # Give server a second to start
    time.sleep(2)

    verify()
