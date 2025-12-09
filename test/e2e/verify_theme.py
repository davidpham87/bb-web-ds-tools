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
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.allow_reuse_address = True
        httpd.serve_forever()

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

        # Correctly locate the top bar
        # Structure: div.top-bar > div.relative > button
        menu_btn = page.get_by_role("button", name="Menu")
        top_bar = menu_btn.locator("xpath=../..")

        class_attr = await top_bar.get_attribute("class")
        print(f"Top Bar Classes: {class_attr}")

        initial_bg = await top_bar.evaluate("el => getComputedStyle(el).backgroundColor")
        print(f"Initial Top Bar BG: {initial_bg}")

        # Change theme
        select = page.locator("select")
        await select.select_option("nord-light")
        await page.wait_for_timeout(1000)

        new_bg = await top_bar.evaluate("el => getComputedStyle(el).backgroundColor")
        print(f"New Top Bar BG (nord-light): {new_bg}")

        if "rgb(236, 239, 244)" in new_bg:
            print("SUCCESS: Navigation background changed correctly for nord-light.")
        else:
            print(f"FAILURE: Navigation background did not match expected nord-light color. Got: {new_bg}")

        await browser.close()

if __name__ == "__main__":
    if not os.path.exists("docs/index.html"):
        print("Error: docs/index.html not found. Please build the app first.")
        exit(1)

    start_server()
    asyncio.run(verify_theme())
