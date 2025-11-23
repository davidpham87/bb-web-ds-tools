from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8080/#/")

        # Open Menu
        page.get_by_role("button", name="≡").click()

        # Check if items are visible
        expect(page.get_by_role("link", name="Datasets")).to_be_visible()
        expect(page.get_by_role("link", name="Malli")).to_be_visible()

        # Click an item
        page.get_by_role("link", name="Datasets").click()
        page.wait_for_url("**/#/datasets")

        browser.close()
        print("Menu verification passed.")

if __name__ == "__main__":
    run()
