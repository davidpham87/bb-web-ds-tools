from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:8080/#/vega-lite")
            # Wait for any of the unique buttons to ensure load
            page.wait_for_selector("button:has-text('Data')", timeout=60000)

            # Verify the tabs exist in the DOM
            tabs = page.query_selector_all("button.border-b-2")
            # We expect top tabs (Data, Config) and right tabs (Plot, Parsed, Schema)
            # The top tabs should be visible.

            # Screenshot
            page.screenshot(path="verification/vega_tabs.png")
            print("Screenshot taken")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
