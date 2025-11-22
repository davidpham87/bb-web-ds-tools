from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1280, "height": 720})
    page = context.new_page()

    page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
    page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

    try:
        # 1. Visit Home
        print("Visiting home...")
        page.goto("http://localhost:8080")
        # Wait for nav bar
        expect(page.get_by_role("navigation")).to_be_visible()

        # 2. Visit R REPL
        print("Visiting R REPL...")
        page.get_by_role("link", name="R", exact=True).click()

        # Wait for terminal to appear
        expect(page.locator(".xterm-screen")).to_be_visible(timeout=10000)

        # Wait for WebR to load (give it some time)
        print("Waiting for WebR...")
        page.wait_for_timeout(10000)

        page.screenshot(path="verification/r_repl.png")
        print("R REPL screenshot taken.")

        # 3. Visit Clojure REPL
        print("Visiting Clojure REPL...")
        page.get_by_role("link", name="Repl", exact=True).click()

        # Switch to Terminal
        print("Switching to Terminal mode...")
        page.get_by_role("button", name="Terminal").click()
        expect(page.locator(".xterm-screen")).to_be_visible()

        # Type code
        print("Typing Clojure code...")
        page.locator(".xterm-screen").click()
        page.keyboard.type("(+ 10 20)")
        page.keyboard.press("Enter")
        page.wait_for_timeout(2000)

        page.screenshot(path="verification/clojure_term.png")
        print("Clojure REPL screenshot taken.")

    except Exception as e:
        print(f"Error: {e}")
        page.screenshot(path="verification/error.png")
        raise e

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
