import http.server
import socketserver
import threading
import time
import os
import sys
from playwright.sync_api import sync_playwright

PORT = 8083
DIRECTORY = "docs"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Suppress logging
        pass

def start_server():
    # Ensure port is clean (basic attempt)
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.allow_reuse_address = True
            print(f"Serving at port {PORT}")
            httpd.serve_forever()
    except OSError as e:
        print(f"Could not start server: {e}")

def verify():
    # Start server in a separate thread
    server_thread = threading.Thread(target=start_server)
    server_thread.daemon = True
    server_thread.start()

    # Give server time to start
    time.sleep(2)

    sri_error_found = False

    def check_console(msg):
        nonlocal sri_error_found
        text = msg.text
        type_ = msg.type
        # Filter out routine info/warnings
        if type_ == "error" or "integrity" in text.lower():
            print(f"CONSOLE {type_.upper()}: {text}")
            # Failed to fetch or SRI failure
            if "integrity" in text.lower() or "fail" in text.lower():
                sri_error_found = True

    def check_page_error(exc):
        nonlocal sri_error_found
        text = str(exc)
        if "importScripts" in text and "Module scripts" in text:
             print(f"IGNORING KNOWN WORKER ERROR: {text}")
             return
        print(f"PAGE ERROR: {exc}")
        sri_error_found = True

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.on("console", check_console)
            page.on("pageerror", check_page_error)

            # Use 127.0.0.1
            url = f"http://127.0.0.1:{PORT}"
            print(f"Navigating to {url}")

            response = page.goto(url)
            if not response or not response.ok:
                print(f"Failed to load page: {response.status if response else 'No response'}")
                sys.exit(1)

            # Wait a bit for scripts to load
            time.sleep(2)

            # Check for Vega globals
            try:
                page.wait_for_function("() => window.vega !== undefined", timeout=5000)
                print("✅ Vega loaded")
            except Exception:
                print("❌ Vega NOT loaded")
                sri_error_found = True

            try:
                page.wait_for_function("() => window.vegaLite !== undefined", timeout=5000)
                print("✅ VegaLite loaded")
            except Exception:
                print("❌ VegaLite NOT loaded")
                sri_error_found = True

            try:
                page.wait_for_function("() => window.vegaEmbed !== undefined", timeout=5000)
                print("✅ VegaEmbed loaded")
            except Exception:
                print("❌ VegaEmbed NOT loaded")
                sri_error_found = True

            if sri_error_found:
                print("❌ SRI Verification Failed: Errors detected or scripts failed to load")
                sys.exit(1)
            else:
                print("✅ SRI Verification Passed")

            browser.close()
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    verify()
