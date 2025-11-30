from playwright.sync_api import sync_playwright
import time

def verify(page):
    # Pyodide
    print("Checking Pyodide...")
    page.goto("http://localhost:8080/#/pyodide")
    try:
        page.wait_for_selector("text=Python Code", timeout=10000)

        try:
            load_btn = page.get_by_role("button", name="Load Python")
            load_btn.wait_for(state="visible", timeout=2000)
            print("Pyodide: Loading runtime...")
            load_btn.click()
            page.wait_for_selector("text=Pyodide Ready", timeout=30000)
        except:
            print("Pyodide: Already loaded or loading?")
            page.wait_for_selector("text=Pyodide Ready", timeout=30000)

        portal_btn = page.get_by_role("button", name="Open Portal")
        if portal_btn.is_visible():
            print("Pyodide: Open Portal button found.")
        else:
            print("Pyodide: Open Portal button NOT found.")
    except Exception as e:
        print(f"Pyodide check failed: {e}")

    page.screenshot(path="verification_pyodide.png")

    # Repl
    print("Checking REPL...")
    page.goto("http://localhost:8080/#/repl")
    try:
        try:
            add_btn = page.get_by_role("button", name="Add REPL")
            add_btn.wait_for(state="visible", timeout=2000)
            add_btn.click()
        except:
            pass

        page.wait_for_selector("text=Clojure Code", timeout=5000)

        portal_btn_repl = page.get_by_role("button", name="Open Portal")
        if portal_btn_repl.is_visible():
            print("REPL: Open Portal button found.")
        else:
            print("REPL: Open Portal button NOT found.")
    except Exception as e:
        print(f"REPL check failed: {e}")

    page.screenshot(path="verification_repl.png")

    # R Repl
    print("Checking R REPL...")
    page.goto("http://localhost:8080/#/r-repl")
    try:
        load_btn = page.get_by_role("button", name="Load R Environment")
        try:
            load_btn.wait_for(state="visible", timeout=3000)
            print("R REPL: Loading runtime...")
            load_btn.click()
        except:
            print("R REPL: Load button not visible (already loaded?)")

        # Wait for "WebR Ready" - this confirms we are in ready state
        page.wait_for_selector("text=WebR Ready", timeout=60000)
        print("R REPL: Loaded.")

        # Check for Code label
        page.wait_for_selector("text=Code", timeout=5000)

        # Check for Open Portal button
        portal_btn_r = page.get_by_role("button", name="Open Portal")
        try:
            portal_btn_r.wait_for(state="visible", timeout=5000)
            print("R REPL: Open Portal button found.")
        except:
            print("R REPL: Open Portal button NOT found.")

    except Exception as e:
        print(f"R REPL check failed: {e}")

    page.screenshot(path="verification_r_repl.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify(page)
        browser.close()
