from playwright.sync_api import sync_playwright

def verify_landing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use existing context if possible or create new one
        page = browser.new_page()

        # We need to serve the docs folder.
        # Assuming verify_release.py style serving or just navigating to local file if simple enough.
        # But here we have a full shadow-cljs app.
        # We should use the dev server if running, or verify the built docs.
        # The user instructions say: "To reliably verify frontend changes... use npx shadow-cljs release app ... followed by python3 -m http.server"

        # I'll rely on the manual http server start in the next step.
        # For now, let's assume port 8000 (standard python http.server default)
        page.goto("http://localhost:8000")

        # Wait for the landing page to load
        page.wait_for_selector("h1")

        # Take a screenshot of the top section (Intro)
        page.screenshot(path="verification/landing_intro.png")

        # Scroll down to see the cards
        page.evaluate("window.scrollTo(0, 800)")
        page.wait_for_timeout(1000) # Wait for animation/scroll

        # Take a screenshot of the cards
        page.screenshot(path="verification/landing_cards.png")

        browser.close()

if __name__ == "__main__":
    verify_landing_page()
