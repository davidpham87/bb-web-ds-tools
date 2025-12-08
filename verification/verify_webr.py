from playwright.sync_api import sync_playwright
import time
import os

def verify_webr():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Capture console
        page.on("console", lambda msg: print(f"Console: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Page Error: {err}"))

        # Verify WebR loading
        page.goto("http://localhost:8080/#/code")

        print("Waiting for page load...")
        time.sleep(5)

        print("Clicking R tab...")
        try:
             page.wait_for_selector("text=R", timeout=10000)
             page.click("text=R")
        except Exception as e:
             print(f"Failed to find R tab: {e}")
             page.screenshot(path="verification/failed_tab.png")
             raise e

        print("Waiting for WebR initialization...")
        time.sleep(10)

        # Type code
        print("Typing code...")
        page.keyboard.press("Control+A")
        page.keyboard.press("Backspace")

        code = "plot(rnorm(100)); print('Hello World')"
        page.click(".monaco-editor")
        page.keyboard.insert_text(code)

        # Run
        print("Running code...")
        page.keyboard.press("Control+Enter")

        # Wait for result
        print("Waiting for result...")
        time.sleep(10)

        # Debug Portal Content
        try:
            frame = page.frame_locator("iframe").first
            text = frame.locator("body").inner_text()
            print("Portal Content:\n", text)
        except Exception as e:
            print("Could not read portal content:", e)

        if not os.path.exists("verification"):
            os.makedirs("verification")

        page.screenshot(path="verification/web_r_plot_screenshot.png")
        print("Screenshot saved to verification/web_r_plot_screenshot.png")

        browser.close()

if __name__ == "__main__":
    verify_webr()
