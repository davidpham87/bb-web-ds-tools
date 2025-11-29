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
            items = [
                {"label": "Malli", "route": "#/malli", "text": "Input Data"},
                {"label": "HoneySQL", "route": "#/honeysql", "text": "Convert to SQL"},
                {"label": "Vega-Lite", "route": "#/vega-lite", "text": "Import Dataset"},
                {"label": "Gemma", "route": "#/gemma", "text": "Load Gemma Model"},
                {"label": "Pyodide", "route": "#/pyodide", "text": "Code"},
                {"label": "Editor", "route": "#/editor", "text": "Save Code"},
                {"label": "Repl", "route": "#/repl", "text": "Add REPL"},
                {"label": "Datasets", "route": "#/datasets", "text": "Create New Dataset"},
                {"label": "Settings", "route": "#/settings", "text": "Settings"},
                {"label": "Changelog", "route": "#/changelog", "text": "Changelog"}
            ]

            for item in items:
                label = item["label"]
                route = item["route"]
                expected_text = item["text"]

                print(f"Navigating to {label}...")

                # Use deep linking to navigate, bypassing potential UI blockers
                page.goto(f"http://localhost:{PORT}/{route}")

                # Handle potential Jupyter dialogs that block the UI
                if page.is_visible("text=Select Kernel"):
                    print("Dismissing Kernel dialog...")
                    # Forcefully remove the dialog from the DOM
                    page.evaluate("document.querySelectorAll('.jp-Dialog').forEach(e => e.remove())")

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
            page.screenshot(path="success.png")

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
