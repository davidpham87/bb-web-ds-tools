import time
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8080")

        # Wait for the main title
        expect(page.locator("h1")).to_contain_text("The \"Swiss Army Knife\" of Data Science")

        # Wait for canvas cards to be present
        expect(page.locator("canvas")).to_have_count(10) # 10 cards

        # Take screenshot
        time.sleep(1) # Let animations run a bit
        page.screenshot(path="verification/landing_page.png")
        print("Screenshot saved to verification/landing_page.png")

        browser.close()

if __name__ == "__main__":
    run()
