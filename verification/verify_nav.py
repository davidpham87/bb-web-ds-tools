from playwright.sync_api import sync_playwright, expect
import time

def verify_navigation(page):
    print("Navigating to app...")
    page.goto("http://localhost:8081/#/code")

    # Wait for the app to load
    page.wait_for_selector("text=BB Web DS Tools", state="hidden")
    # Wait for Eval button
    page.wait_for_selector("button:has-text('Eval')")

    print("Verifying Code View Tabs...")
    # Check tabs are present using specific locators
    expect(page.get_by_role("button", name="Clojure")).to_be_visible()
    expect(page.get_by_role("button", name="Python")).to_be_visible()
    expect(page.get_by_role("button", name="R", exact=True)).to_be_visible()

    # Take screenshot of desktop Code view
    page.screenshot(path="verification/code_view_desktop.png")

    print("Verifying Mobile View...")
    # Resize viewport to mobile
    page.set_viewport_size({"width": 375, "height": 667})

    # Check for mobile toggle (Editor/Portal radio buttons)
    # The text might be in a label next to the radio input
    expect(page.locator("label").filter(has_text="Editor")).to_be_visible()
    expect(page.locator("label").filter(has_text="Portal")).to_be_visible()

    # Take screenshot of mobile Code view (Editor)
    page.screenshot(path="verification/code_view_mobile_editor.png")

    # Click Portal radio
    page.locator("label").filter(has_text="Portal").click()

    # Take screenshot of mobile Code view (Portal)
    page.screenshot(path="verification/code_view_mobile_portal.png")

    print("Verifying Landing Page Footer...")
    page.goto("http://localhost:8081/#/")
    page.set_viewport_size({"width": 1280, "height": 800})
    # Scroll to bottom
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    # Wait a bit for scroll
    time.sleep(0.5)
    page.screenshot(path="verification/landing_footer.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_navigation(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/failure.png")
        finally:
            browser.close()
