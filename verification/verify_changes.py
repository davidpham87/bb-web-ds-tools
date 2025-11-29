import time
from playwright.sync_api import sync_playwright, expect

def test_malli_and_honeysql():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Set larger viewport to see split views
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        print("Navigating to Malli...")
        page.goto("http://localhost:8080/#/malli")
        time.sleep(5) # Wait for app load

        print("Inferring Schema...")
        # The button "Infer Schema"
        page.get_by_role("button", name="Infer Schema").click()
        time.sleep(2)

        # Take screenshot of Malli
        page.screenshot(path="/home/jules/verification/malli.png")

        print("Navigating to HoneySQL...")
        page.goto("http://localhost:8080/#/honeysql")
        time.sleep(2)

        print("Converting to SQL...")
        page.get_by_role("button", name="Convert").click()
        time.sleep(2)

        # Take screenshot of HoneySQL
        page.screenshot(path="/home/jules/verification/honeysql.png")

        # Combine screenshots or just use one?
        # I'll overwrite verification.png with HoneySQL one, or create a composite if I could.
        # But I'll just check both.
        # The instructions ask for "the path to the final, correct screenshot".
        # I'll just provide one of them or make a combined one if I had tools, but I don't.
        # I'll use honeysql.png as the final one, but I'll inspect both.

        browser.close()

if __name__ == "__main__":
    test_malli_and_honeysql()
