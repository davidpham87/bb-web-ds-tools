import threading
import http.server
import socketserver
import os
import time
from playwright.sync_api import sync_playwright, expect

PORT = 8081
DIRECTORY = "docs"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
        httpd.serve_forever()

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to landing page...")
            page.goto(f"http://localhost:{PORT}")
            # Use heading to avoid ambiguity
            expect(page.get_by_role("heading", name="BB Web DS Tools")).to_be_visible()
            print("Landing page loaded.")

            print("Navigating to Datasets...")
            page.get_by_role("link", name="Datasets").click()

            # Verify Datasets page content
            expect(page.get_by_role("heading", name="Datasets")).to_be_visible()
            expect(page.get_by_text("Load from Text")).to_be_visible()

            print("Verified Datasets page structure.")

            # Take screenshot
            screenshot_path = os.path.abspath("verification/datasets_page.png")
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")

            return screenshot_path

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    server_thread = threading.Thread(target=serve, daemon=True)
    server_thread.start()
    time.sleep(2)

    try:
        verify()
    except:
        exit(1)
