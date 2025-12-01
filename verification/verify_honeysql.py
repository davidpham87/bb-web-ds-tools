from playwright.sync_api import sync_playwright, expect
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the HoneySQL page
    page.goto("http://127.0.0.1:8082/#/honeysql")

    # Wait for the "SQL Output" label which is part of the HoneySQL view
    expect(page.get_by_text("SQL Output")).to_be_visible()

    # Wait for iframe to appear
    # Portal creates an iframe.
    # We expect an iframe to be present if portal.open worked.
    page.wait_for_selector("iframe")

    # Take screenshot
    if not os.path.exists("verification"):
        os.makedirs("verification")

    page.screenshot(path="verification/honeysql_portal.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
