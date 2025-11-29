from playwright.sync_api import sync_playwright, expect
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Handle prompt dialog
    def handle_dialog(dialog):
        print(f"Dialog message: {dialog.message}")
        if "Workspace Name" in dialog.message:
            dialog.accept("My New Workspace")
        else:
            dialog.dismiss()

    page.on("dialog", handle_dialog)

    try:
        print("Navigating...")
        page.goto("http://localhost:8080")

        # Wait for app to load (tab bar)
        print("Waiting for nav...")
        page.wait_for_selector("nav", timeout=60000)

        # Click Workspaces tab
        print("Clicking Workspaces tab...")
        page.get_by_role("link", name="Workspaces").click()

        # Verify header
        print("Verifying header...")
        expect(page.get_by_role("heading", name="Workspaces")).to_be_visible()

        # Click Create Workspace
        print("Creating workspace...")
        page.get_by_role("button", name="Create Workspace").click()

        # Verify new workspace in list
        print("Verifying workspace list...")
        expect(page.get_by_text("My New Workspace")).to_be_visible()

        # Take screenshot
        output_path = os.path.abspath("verification/workspaces.png")
        page.screenshot(path=output_path)
        print(f"Verification successful. Screenshot saved to {output_path}")

    except Exception as e:
        print(f"Error: {e}")
        page.screenshot(path="verification/error.png")
        raise e
    finally:
        browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
