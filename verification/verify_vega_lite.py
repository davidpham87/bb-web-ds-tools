from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Capture console logs
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"PAGE ERROR: {exc}"))

        page.goto("http://localhost:8000")

        try:
            page.wait_for_selector("body", timeout=10000)

            # Navigate using hash directly
            page.goto("http://localhost:8000/#/vega-lite")

            # Wait for any part of vega-lite UI
            page.wait_for_selector(".editor-wrapper", timeout=20000)

            page.get_by_text("Log").click()
            time.sleep(1)

            page.get_by_text("Config").click()
            time.sleep(1)

            page.get_by_text("Format").wait_for()

            page.screenshot(path="verification/vega_lite_ui_fixed.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error_screenshot.png")
            raise

        browser.close()

if __name__ == "__main__":
    run()
