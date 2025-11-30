from playwright.sync_api import sync_playwright
import time

def verify(page):
    # Pyodide
    print("Checking Pyodide...")
    page.goto("http://localhost:8080/#/pyodide")
    try:
        page.wait_for_selector("text=Python Code", timeout=10000)
        # Check for "Open Portal" button
        # It might require loading first?
        # My code: (not ready?) -> "Load Python" button.
        # :else -> "Pyodide Ready", "Open Portal".

        # Check for Load button
        load_btn = page.get_by_role("button", name="Load Python")
        if load_btn.is_visible():
            print("Pyodide: Loading runtime...")
            load_btn.click()
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
        # Might need to add instance if empty
        add_btn = page.get_by_role("button", name="Add REPL")
        if add_btn.is_visible():
            add_btn.click()
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
        page.wait_for_selector("text=Code", timeout=10000) # "Code" label
        # "Load R Environment" button might be visible first
        load_btn = page.get_by_role("button", name="Load R Environment")
        if load_btn.is_visible():
            print("R REPL: Loading runtime...")
            load_btn.click()
            # Wait for "WebR Ready"
            page.wait_for_selector("text=WebR Ready", timeout=60000)
            print("R REPL: Loaded.")

        # Check for Open Portal button
        portal_btn_r = page.get_by_role("button", name="Open Portal")
        if portal_btn_r.is_visible():
            print("R REPL: Open Portal button found.")
        else:
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
