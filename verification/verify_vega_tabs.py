from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating...")
            page.goto("http://localhost:8080/#/vega-lite")
            print("Waiting for body...")
            page.wait_for_selector("body", timeout=10000)

            print("Taking debug screenshot...")
            page.screenshot(path="verification/debug_load.png")

            print("Waiting for Data tab button...")
            # Use a more generic selector to find if ANY text is rendered
            page.wait_for_selector("text=Data", timeout=60000)

            page.screenshot(path="verification/vega_tabs.png")
            print("Screenshot taken")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
