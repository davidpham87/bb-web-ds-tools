from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to app...")
            page.goto("http://localhost:8080")

            print("Waiting for app to load...")
            # Wait for nav bar to appear
            expect(page.get_by_text("BB Web DS Tools")).to_be_visible(timeout=10000)

            print("Clicking REPL tab...")
            page.get_by_text("REPL").click()

            print("Verifying REPL tab...")
            expect(page.get_by_text("Clojure REPL")).to_be_visible()

            # Type in CodeMirror
            # CodeMirror is tricky to type into directly with fill.
            # We can click the editor and type.
            print("Typing code...")
            # Click inside the editor-wrapper
            page.locator(".CodeMirror").click()
            # Select all and delete (optional, but good)
            page.keyboard.press("Control+A")
            page.keyboard.press("Backspace")

            code = "(+ 10 20)"
            page.keyboard.type(code)

            print("Evaluating...")
            page.get_by_text("Evaluate").click()

            print("Verifying output...")
            # Expect "=> 30"
            expect(page.get_by_text("=>")).to_be_visible()
            expect(page.get_by_text("30")).to_be_visible()

            print("Taking screenshot...")
            page.screenshot(path="verification/repl_verification.png")
            print("Done!")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run()
