import playwright.sync_api
from playwright.sync_api import expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to app
    page.goto("http://localhost:8080")

    # Wait for app to load
    page.wait_for_selector("text=Settings", timeout=10000)

    # Go to Settings
    page.click("text=Settings")
    page.wait_for_url("**/settings")

    # Check initial background color (Zenburn: #383838)
    # Since we use CSS variables, we check computed style
    body = page.locator("body")
    expect(body).to_have_css("background-color", "rgb(56, 56, 56)")

    # Change theme to 'nord'
    page.select_option("select", "nord")

    # Wait for theme change application (should be fast but let's wait a bit)
    page.wait_for_timeout(500)

    # Check new background color (Nord: #2e3440 -> rgb(46, 52, 64))
    expect(body).to_have_css("background-color", "rgb(46, 52, 64)")

    # Take screenshot
    page.screenshot(path="verification/screenshot/theme_nord.png")

    print("Theme change verification passed!")

    browser.close()

if __name__ == "__main__":
    with playwright.sync_api.sync_playwright() as playwright:
        run(playwright)
