from playwright.sync_api import Page, expect, sync_playwright

def verify_reader_page(page: Page):
  """
  This test verifies that a user can navigate from the main page
  to the reader page and that the reader page displays correctly.
  """
  # 1. Arrange: Go to the main page.
  page.goto("http://localhost:8080")

  # 2. Act: Find the "Reader Tool" link and click it.
  reader_link = page.get_by_role("link", name="Reader Tool")
  reader_link.click()

  # 3. Assert: Confirm the navigation was successful.
  expect(page).to_have_title("Reader Tool")
  expect(page.get_by_role("heading", name="Reader Tool")).to_be_visible()

  # 4. Screenshot: Capture the final result for visual verification.
  page.screenshot(path="verification/reader-page.png")

if __name__ == "__main__":
  with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    try:
      verify_reader_page(page)
    finally:
      browser.close()
