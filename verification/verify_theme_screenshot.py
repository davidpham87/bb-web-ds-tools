import asyncio
from playwright.async_api import async_playwright
import http.server
import socketserver
import threading
import os
import time

# Serve the docs directory
PORT = 8085
DIRECTORY = "docs"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        pass # Suppress logging

def run_server():
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.allow_reuse_address = True
            httpd.serve_forever()
    except Exception as e:
        print(f"Server error: {e}")

def start_server():
    t = threading.Thread(target=run_server)
    t.daemon = True
    t.start()
    print(f"Server started at http://localhost:{PORT}")
    time.sleep(2) # Give it a moment

async def verify_theme():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        url = f"http://localhost:{PORT}/#/settings"
        print(f"Navigating to {url}")
        await page.goto(url)

        await page.wait_for_selector("text=Settings")
        await page.wait_for_selector("text=Appearance")

        # Change theme to nord-light
        select = page.locator("select")
        await select.select_option("nord-light")
        await page.wait_for_timeout(1000)

        # Take a screenshot
        screenshot_path = "verification/theme_nord_light.png"
        await page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

if __name__ == "__main__":
    if not os.path.exists("docs/index.html"):
        print("Error: docs/index.html not found. Please build the app first.")
        exit(1)

    start_server()
    asyncio.run(verify_theme())
