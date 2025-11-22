from playwright.sync_api import sync_playwright
import time
import sys

def verify(page):
    print("Navigating to home...")
    page.goto("http://localhost:8080")
    # Wait for navigation
    page.wait_for_selector("nav", timeout=10000)

    print("Navigating to Malli...")
    # Click the navigation link
    page.get_by_role("link", name="Malli").click()
    # Wait for URL change
    # page.wait_for_url("**/malli")
    # Wait for specific content that was missing
    # "Schema Inference" is inside the card.
    print("Waiting for Schema Inference text...")
    page.wait_for_selector("text=Schema Inference", timeout=5000)

    print("Taking screenshot of Malli...")
    page.screenshot(path="/home/jules/verification/malli.png")

    print("Navigating to HoneySQL...")
    page.get_by_role("link", name="HoneySQL").click()
    print("Waiting for Convert to SQL text...")
    page.wait_for_selector("text=Convert to SQL", timeout=5000)

    print("Taking screenshot of HoneySQL...")
    page.screenshot(path="/home/jules/verification/honeysql.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)
        finally:
            browser.close()
