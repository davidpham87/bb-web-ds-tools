from playwright.sync_api import sync_playwright, expect
import os

def run():
    os.makedirs("verification/bug", exist_ok=True)
    with open("verification/bug/sql_wasm.log", "w") as log_file:
        def log_console(msg):
            log_file.write(f"CONSOLE: {msg.type}: {msg.text}\n")

        def log_error(msg):
            log_file.write(f"PAGE ERROR: {msg}\n")

        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.on("console", log_console)
            page.on("pageerror", log_error)

            try:
                # Navigate to Datasets page
                page.goto("http://localhost:8080/#/datasets")

                # Wait for page to load - use heading role to be specific
                expect(page.get_by_role("heading", name="Datasets", exact=True)).to_be_visible()

                # Check for Save All and Load All buttons
                save_btn = page.get_by_role("button", name="Save All")
                load_btn = page.get_by_role("button", name="Load All")

                expect(save_btn).to_be_visible()
                expect(load_btn).to_be_visible()

                # Take screenshot
                page.screenshot(path="verification/datasets_persistence_buttons.png")
                print("Screenshot saved to verification/datasets_persistence_buttons.png")

            except Exception as e:
                log_file.write(f"SCRIPT EXCEPTION: {e}\n")
                print(f"Verification failed: {e}")

            finally:
                browser.close()

if __name__ == "__main__":
    run()
