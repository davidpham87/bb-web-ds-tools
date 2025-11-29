from playwright.sync_api import sync_playwright, expect
import time

def verify_datasets(page):
    # Go to the app
    print("Navigating to app...")
    page.goto("http://localhost:8000/#/datasets")

    # Wait for the app to load (look for "Datasets" header or "Create New Dataset")
    print("Waiting for load...")
    page.wait_for_selector("text=Create New Dataset", timeout=10000)

    # 1. Verify Importer View Alignment (Structure label vs buttons)
    print("Verifying Importer View...")
    # Take screenshot of the Importer View
    # Hide the 10x panel if present
    page.evaluate("document.getElementById('--re-frame-10x--')?.remove()")

    page.screenshot(path="verification/importer_view.png")

    # Check if "Structure:" label aligns with buttons.
    # Visually check screenshot.

    # 2. Create Dataset to see Table
    print("Creating dataset...")
    # Click "Load Example"
    page.get_by_role("button", name="Load Example").click()
    # Click "Create"
    page.get_by_role("button", name="Create").click()

    # Wait for Table
    page.wait_for_selector("table")

    # 3. Verify Dataset View Title vs Row Count Alignment
    print("Verifying Dataset View...")
    # Take screenshot of the top part or full page
    page.screenshot(path="verification/dataset_view.png")

    # 4. Verify Sort Arrows (check header)
    # Check "score" header (it is in the example data)
    print("Verifying Table Header...")

    # 5. Verify Filter Row Padding
    # Find a filter cell
    filter_cell = page.locator("tbody tr").first.locator("td").first
    # We can check the class attribute if we want, but screenshot is key.
    class_attr = filter_cell.get_attribute("class")
    print(f"Filter cell class: {class_attr}")
    if "px-3" in class_attr and "py-1.5" in class_attr:
        print("Filter row padding is correct (px-3 py-1.5).")
    else:
        print("Filter row padding might be incorrect.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_datasets(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
