import time
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Navigate to App DB
        page.goto("http://localhost:8000/#/app-db")

        # Wait for the page to load
        page.wait_for_selector("h2:has-text('App DB Editor')")

        # Add a watch path
        page.fill("input[placeholder*='Enter path']", "[:platform]")
        page.click("button:has-text('Watch Path')")

        # Wait for the path viewer
        # It should have the path string "[:platform]"
        page.wait_for_selector("h4:has-text('[:platform]')")

        # Wait a bit for layout to settle and editor to load
        time.sleep(5)

        # Take screenshot
        page.screenshot(path="verification.png")
    except Exception as e:
        print(f"Error: {e}")
        page.screenshot(path="error.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
