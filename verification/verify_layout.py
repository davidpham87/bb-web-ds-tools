from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        # Launch browser (headless)
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Visit Landing Page
        page.goto("http://localhost:8080/#/")
        page.wait_for_selector("text=BB Web DS Tools")

        # Check Title
        expect(page.locator("h1")).to_contain_text("BB Web DS Tools")

        # Check Get Started Button
        get_started = page.get_by_role("button", name="Get Started")
        expect(get_started).to_be_visible()

        # 2. Navigate to Malli
        get_started.click()
        page.wait_for_url("**/#/malli")

        # Check Malli Page Content
        page.wait_for_selector("text=Schema Inference")
        expect(page.locator("text=Schema Inference")).to_be_visible()

        # 3. Navigate to Datasets via Menu (or URL)
        # Let's try URL navigation to be faster/simpler
        page.goto("http://localhost:8080/#/datasets")
        page.wait_for_selector("text=Datasets")

        # Check Sidebar content
        expect(page.locator("text=+ New Dataset")).to_be_visible()

        # Check Main Content (Importer View by default)
        expect(page.locator("text=Create New Dataset")).to_be_visible()

        # Take Screenshot
        page.screenshot(path="/home/jules/verification/layout_verification.png")

        browser.close()
        print("Verification script completed successfully.")

if __name__ == "__main__":
    run()
