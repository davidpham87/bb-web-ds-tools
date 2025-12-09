from playwright.sync_api import sync_playwright

def verify_landing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:8080/")
            page.wait_for_selector("footer")

            # Check for Wiki link
            wiki_link = page.get_by_role("link", name="Wiki")
            assert wiki_link.is_visible()
            assert wiki_link.get_attribute("href") == "wiki/"

            # Check for Blog link
            blog_link = page.get_by_role("link", name="Blog")
            assert blog_link.is_visible()
            assert blog_link.get_attribute("href") == "blog/"

            page.screenshot(path="verification/landing_page_footer.png")
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_landing_page()
