import threading
import http.server
import socketserver
import os
import time
from playwright.sync_api import sync_playwright

PORT = 8081 # Use a different port to avoid conflicts
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
            print("Navigating to landing page...")
            page.goto(f"http://localhost:{PORT}")
            page.wait_for_selector("canvas", state="visible")
            print("Landing page loaded.")

            # Wait a bit for animations to start and resize observer to fire
            time.sleep(2)

            # Check the first canvas
            canvas_handle = page.query_selector("canvas")

            # evaluate logic
            # We want to check if canvas.width is approximately canvas.clientWidth * devicePixelRatio

            result = page.evaluate("""(canvas) => {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.getBoundingClientRect();
                const logicalWidth = canvas.width;
                const logicalHeight = canvas.height;
                const cssWidth = rect.width;
                const cssHeight = rect.height;

                return {
                    logicalWidth,
                    logicalHeight,
                    cssWidth,
                    cssHeight,
                    dpr,
                    expectedWidth: cssWidth * dpr,
                    expectedHeight: cssHeight * dpr
                };
            }""", canvas_handle)

            print(f"Canvas info: {result}")

            # Verification logic
            # Allow small margin of error due to rounding
            if abs(result['logicalWidth'] - result['expectedWidth']) > 2:
                print(f"FAILURE: Logical width {result['logicalWidth']} does not match expected {result['expectedWidth']}")
                raise Exception("Canvas width incorrect")

            if abs(result['logicalHeight'] - result['expectedHeight']) > 2:
                print(f"FAILURE: Logical height {result['logicalHeight']} does not match expected {result['expectedHeight']}")
                raise Exception("Canvas height incorrect")

            print("Canvas dimensions are correct!")

            # Take a screenshot
            page.screenshot(path="verification/canvas_verification.png")
            print("Screenshot saved to verification/canvas_verification.png")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error_canvas.png")
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
