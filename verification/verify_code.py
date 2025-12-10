import sys
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8080/#/code")
    page.wait_for_selector(".monaco-editor", timeout=10000)
    page.screenshot(path="verification/screenshot_code.png")
    browser.close()
    print("Verification screenshot taken")

with sync_playwright() as playwright:
    run(playwright)
