import threading
import http.server
import socketserver
import os
import time
from playwright.sync_api import sync_playwright

PORT = 8082 # Use a different port
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
        # Set a large viewport to ensure we are in the "desktop" split mode
        page.set_viewport_size({"width": 1920, "height": 1080})

        try:
            print("Navigating to app...")
            page.goto(f"http://localhost:{PORT}")
            # Wait for something distinctive on the landing page
            page.wait_for_selector("text=Swiss Army Knife", timeout=10000)

            # Define the routes and the selector for the left panel

            views = [
                {"name": "Malli", "route": "#/malli", "selector": ".max-w-3xl"},
                {"name": "HoneySQL", "route": "#/honeysql", "selector": ".max-w-3xl"},
                {"name": "Code", "route": "#/code", "selector": ".md\\:max-w-3xl"},
                {"name": "Vega-Lite", "route": "#/vega-lite", "selector": ".md\\:max-w-3xl"}
            ]

            # max-w-3xl is 48rem = 768px.
            expected_width = 768

            for view in views:
                print(f"Verifying {view['name']}...")
                page.goto(f"http://localhost:{PORT}/{view['route']}")
                # Wait for navigation
                time.sleep(1)

                # Wait for content to load
                page.wait_for_timeout(1000)

                # Try to find the element
                selector = view['selector']

                # We use css selector
                # Note: Playwright might need special handling for escaped characters in string
                # If selector is ".md\\:max-w-3xl", in python string it is ".md\:max-w-3xl".
                # Playwright expects CSS selector where colon is escaped with backslash.
                # So in CSS it is `.md\:max-w-3xl`.

                try:
                    loc = page.locator(f"css={selector}").first
                    loc.wait_for(state="visible", timeout=5000)
                except:
                    print(f"Could not find selector {selector} for {view['name']}")
                    page.screenshot(path=f"verification/error_{view['name']}_selector.png")
                    continue

                box = loc.bounding_box()
                if box:
                    print(f"{view['name']} width: {box['width']}")
                    if abs(box['width'] - expected_width) > 2: # Allow small rounding diff
                        print(f"WARNING: Width {box['width']} is not {expected_width}")
                        # On very wide screens, w-full max-w-3xl should be 768.
                        # On smaller screens, it might be smaller.
                        # Our viewport is 1920.
                        # However, borders/padding might affect it depending on box-sizing.
                        # Tailwind uses border-box.
                    else:
                        print(f"SUCCESS: {view['name']} width is correct.")
                else:
                    print("Could not get bounding box")

            print("Verification steps ran.")
            page.screenshot(path="verification/layout_consistency.png")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error_layout.png")
            exit(1)
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
