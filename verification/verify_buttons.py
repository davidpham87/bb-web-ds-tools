
from playwright.sync_api import sync_playwright

def verify_buttons():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000")

        try:
             page.wait_for_selector("text=Code", timeout=60000)

             # Malli
             print("Navigating to Malli")
             # Try navigating by URL hash to be safer
             page.goto("http://localhost:8000/#/malli")
             page.wait_for_timeout(2000)
             page.screenshot(path="verification/buttons_malli.png")

             # Vega-Lite
             print("Navigating to Vega-Lite")
             page.goto("http://localhost:8000/#/vega-lite")
             page.wait_for_timeout(2000)
             page.screenshot(path="verification/buttons_vega.png")

             # App DB
             print("Navigating to App DB")
             page.goto("http://localhost:8000/#/app-db")
             page.wait_for_timeout(2000)
             page.screenshot(path="verification/buttons_appdb.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")

        browser.close()

if __name__ == "__main__":
    verify_buttons()
