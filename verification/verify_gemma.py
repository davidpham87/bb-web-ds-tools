from playwright.sync_api import sync_playwright, expect

def verify_gemma():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Gemma view
        print("Navigating to Gemma view...")
        page.goto("http://localhost:8080/#/gemma")

        # Wait for the view to load
        # We expect "Load Gemma Model" header or input
        print("Waiting for 'Load Gemma Model'...")
        expect(page.get_by_text("Load Gemma Model")).to_be_visible(timeout=10000)

        # Check for input field
        expect(page.get_by_placeholder("Model URL (e.g. /gemma-2b-it-gpu-int4.bin)")).to_be_visible()

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification/gemma_view.png")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_gemma()
