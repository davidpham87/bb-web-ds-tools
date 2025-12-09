from playwright.sync_api import sync_playwright
import time

def verify(page):
    # Navigate to the editor page (via hash routing)
    page.goto("http://localhost:8000/#/code")

    # Wait for the editor to load (Monaco editor usually has .monaco-editor class)
    # We might need to wait for the runtime to initialize if it blocks the UI, but the code view usually renders.
    page.wait_for_selector(".monaco-editor", timeout=10000)

    # Wait a bit for fonts to load
    time.sleep(2)

    # Take a screenshot of the editor area
    page.screenshot(path="verification_editor_font.png")

    # We can also try to evaluate the font family of the editor content
    # Monaco renders text in .view-lines -> .view-line -> span
    # But usually the font family is set on the editor container or lines container.
    # Let's check the computed style of an element inside the editor.
    font_family = page.evaluate("""
        () => {
            const el = document.querySelector('.monaco-editor .view-lines');
            return window.getComputedStyle(el).fontFamily;
        }
    """)
    print(f"Computed font family: {font_family}")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
