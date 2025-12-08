from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Datasets page
        page.goto("http://localhost:8080/#/datasets")

        # Wait for page to load - use heading role to be specific
        expect(page.get_by_role("heading", name="Datasets", exact=True)).to_be_visible()

        # Check for Save All and Load All buttons
        save_btn = page.get_by_role("button", name="Save All")
        load_btn = page.get_by_role("button", name="Load All")

        expect(save_btn).to_be_visible()
        expect(load_btn).to_be_visible()

        # Take screenshot
        page.screenshot(path="verification/datasets_persistence_buttons.png")
        print("Screenshot saved to verification/datasets_persistence_buttons.png")

        browser.close()

if __name__ == "__main__":
    run()
