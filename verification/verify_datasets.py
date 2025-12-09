from playwright.sync_api import sync_playwright, expect
import time

def verify_datasets_view():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Assuming the app is served on port 8000 (I will start a python server later)
        page = browser.new_page()
        page.goto("http://localhost:8000/#/datasets")

        # Wait for the view to load
        page.wait_for_selector("text=Datasets")

        # Click "+ New Dataset"
        page.get_by_text("+ New Dataset").click()

        # Check for Format Select
        page.wait_for_selector("text=Format")
        # Format select options: CSV, TSV, JSON, EDN, Markdown
        # Check if the select element is present.
        # It's hard to check for <select> options directly without an id,
        # but I can check for the label "Format" and assume the select is next to it.
        # Or look for option "CSV" text if it's rendered in select? No, standard select options are hidden.

        # Check for Structure Select
        page.wait_for_selector("text=Structure")

        # Check for URL Download section
        page.wait_for_selector("text=Download from URLs")

        # Take screenshot
        page.screenshot(path="verification/datasets_view.png")

        browser.close()

if __name__ == "__main__":
    verify_datasets_view()
