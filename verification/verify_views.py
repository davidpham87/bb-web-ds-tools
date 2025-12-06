from playwright.sync_api import sync_playwright
import time
import os

BASE_URL = "http://localhost:8000"
SCREENSHOT_DIR = "verification"

os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def verify_views():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to home
        print(f"Navigating to {BASE_URL}")
        page.goto(BASE_URL)
        page.wait_for_timeout(5000) # Wait for initial load

        # 1. Landing Page
        print("Screenshotting Landing Page")
        page.screenshot(path=f"{SCREENSHOT_DIR}/01_landing_page.png", full_page=True)

        # 2. Workspaces (should be 404 but let's check)
        # print("Screenshotting Workspaces")
        # page.goto(f"{BASE_URL}/#/workspaces")
        # page.wait_for_timeout(2000)
        # page.screenshot(path=f"{SCREENSHOT_DIR}/02_workspaces.png")

        # 3. Malli
        print("Navigating to Malli")
        page.goto(f"{BASE_URL}/#/malli")
        page.wait_for_timeout(3000)

        # Malli Tabs
        tabs = ["Inference", "Generation", "Validation", "JSON Schema"]
        for i, tab in enumerate(tabs):
            print(f"Screenshotting Malli Tab: {tab}")
            # Click the tab
            page.get_by_text(tab, exact=True).click()
            page.wait_for_timeout(1000)
            page.screenshot(path=f"{SCREENSHOT_DIR}/03_malli_tab_{i+1}_{tab.lower().replace(' ', '_')}.png")

        # 4. HoneySQL
        print("Navigating to HoneySQL")
        page.goto(f"{BASE_URL}/#/honeysql")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/04_honeysql.png")

        # 5. Vega-Lite
        print("Navigating to Vega-Lite")
        page.goto(f"{BASE_URL}/#/vega-lite")
        page.wait_for_timeout(3000)

        # Check sub-tabs for Vega-Lite (Left: Data, Config) (Right: Plot, Parsed Data)
        # Left Tab: Data (Default)
        # Right Tab: Plot (Default)
        page.screenshot(path=f"{SCREENSHOT_DIR}/05_vega_lite_default.png")

        # Left Tab: Config
        print("Screenshotting Vega-Lite Config Tab")
        page.get_by_role("button", name="Config").click()
        page.wait_for_timeout(1000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/05_vega_lite_config.png")

        # Right Tab: Parsed Data
        print("Screenshotting Vega-Lite Parsed Data Tab")
        page.get_by_role("button", name="Parsed Data").click()
        page.wait_for_timeout(1000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/05_vega_lite_parsed.png")

        # 6. Gemma
        print("Navigating to Gemma")
        page.goto(f"{BASE_URL}/#/gemma")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/06_gemma_loader.png")

        # Note: We can't easily test the chat interface without a model loaded, which is complex for this script.

        # 7. Code
        print("Navigating to Code")
        page.goto(f"{BASE_URL}/#/code")
        page.wait_for_timeout(3000)

        # Code Tabs: Clojure REPL, Python (Pyodide), R (WebR), Editor
        code_tabs = ["Clojure REPL", "Python (Pyodide)", "R (WebR)", "Editor"]
        for i, tab in enumerate(code_tabs):
            print(f"Screenshotting Code Tab: {tab}")
            try:
                page.get_by_text(tab, exact=True).click()
                page.wait_for_timeout(2000) # Wait a bit longer for runtimes
                page.screenshot(path=f"{SCREENSHOT_DIR}/07_code_tab_{i+1}_{tab.split(' ')[0].lower()}.png")
            except Exception as e:
                print(f"Failed to click tab {tab}: {e}")

        # 8. Datasets
        print("Navigating to Datasets")
        page.goto(f"{BASE_URL}/#/datasets")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/08_datasets.png")

        # 9. Changelog
        print("Navigating to Changelog")
        page.goto(f"{BASE_URL}/#/changelog")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/09_changelog.png")

        # 10. Settings
        print("Navigating to Settings")
        page.goto(f"{BASE_URL}/#/settings")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/10_settings.png")

        # 11. App DB
        print("Navigating to App DB")
        page.goto(f"{BASE_URL}/#/app-db")
        page.wait_for_timeout(3000)
        page.screenshot(path=f"{SCREENSHOT_DIR}/11_app_db.png")

        browser.close()

if __name__ == "__main__":
    verify_views()
