from playwright.sync_api import sync_playwright, expect
import os

def verify_pyodide():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to Pyodide page...")
            page.goto("http://localhost:8080/#/pyodide")

            # Wait for main content
            page.wait_for_selector("div.monaco-editor", timeout=10000)
            print("Monaco Editor found.")

            # Check for Jupyter Console
            # Jupyter console typically has class .jp-ConsolePanel or similar
            # Or just check for text "Code" and "Run" which I added
            expect(page.get_by_text("Code")).to_be_visible()
            expect(page.get_by_text("Run")).to_be_visible()
            print("Editor UI elements found.")

            # Check for Jupyter elements.
            # .jp-CodeConsole is standard class for Console
            # But I need to be sure. I'll take a screenshot.

            # Note: Jupyter might take time to load pyodide.
            # I won't wait for full pyodide load as it might be slow or fail in this env.
            # Just verifying the component rendered.

            page.screenshot(path="verification_pyodide.png")
            print("Screenshot taken.")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification_error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_pyodide()
