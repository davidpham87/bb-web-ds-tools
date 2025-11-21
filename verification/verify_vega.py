from playwright.sync_api import sync_playwright, expect
import time
import os

def verify_vega(page):
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.on("pageerror", lambda err: print(f"Page Error: {err}"))

    print("Navigating to app...")
    page.goto("http://localhost:8080")

    print("Clicking Vega Lite tab...")
    page.click("text=Vega Lite")

    print("Waiting for tab content...")
    expect(page.locator("h2")).to_contain_text("Vega Lite Tool")

    print("Clicking Example CSV...")
    page.click("text=Example CSV")

    print("Waiting for visualization...")
    # Wait for the vega-embed container
    page.wait_for_selector(".vega-embed", timeout=10000)

    time.sleep(2)
    output_path = "verification/vega_screenshot.png"
    print(f"Taking screenshot to {output_path}...")
    page.screenshot(path=output_path)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_vega(page)
        except Exception as e:
            print(f"Error: {e}")
            exit(1)
        finally:
            browser.close()
