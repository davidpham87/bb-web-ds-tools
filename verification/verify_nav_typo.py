
import time
from playwright.sync_api import sync_playwright

def verify_navigation_and_typography():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # The app title might not be "BB Web DS Tools" but the navigation items should exist.
        page.goto("http://localhost:8000")

        # Wait for something reliable. e.g. "Swiss Army Knife" on landing page OR sidebar items.
        # It seems the app might default to a specific view or landing.
        try:
            page.wait_for_selector("text=Swiss Army Knife", timeout=10000)
            print("Landing page loaded.")
        except:
             print("Landing page text not found, maybe redirected? checking for nav.")
             pass

        # 1. Verify Datasets Header
        print("Verifying Datasets...")
        page.goto("http://localhost:8000/#/datasets")
        page.wait_for_selector("text=Create New Dataset", timeout=10000)
        # Take screenshot
        page.screenshot(path="verification/datasets_header.png")

        # 2. Verify HoneySQL Header
        print("Verifying HoneySQL...")
        page.goto("http://localhost:8000/#/honeysql")
        page.wait_for_selector("text=Convert to SQL", timeout=10000)
        page.screenshot(path="verification/honeysql_header.png")

        # 3. Verify Gemma Header
        print("Verifying Gemma...")
        page.goto("http://localhost:8000/#/gemma")
        # Need to wait for model loader or chat interface
        page.wait_for_selector("text=Load Gemma Model", timeout=10000)
        page.screenshot(path="verification/gemma_header.png")

        # 4. Verify Changelog Header
        print("Verifying Changelog...")
        page.goto("http://localhost:8000/#/changelog")
        page.wait_for_selector("text=Changelog", timeout=10000)
        page.screenshot(path="verification/changelog_header.png")

        # 5. Verify Vega-Lite Tabs
        print("Verifying Vega-Lite Tabs...")
        page.goto("http://localhost:8000/#/vega-lite")
        # Check for top bar tabs "Data" and "Config"
        # They should be in the portal-to-top-bar area.
        # I'll just check if they are visible on page.
        page.wait_for_selector("button:has-text('Data')", timeout=10000)
        page.wait_for_selector("button:has-text('Config')", timeout=10000)
        page.screenshot(path="verification/vega_lite_tabs.png")

        browser.close()

if __name__ == "__main__":
    verify_navigation_and_typography()
