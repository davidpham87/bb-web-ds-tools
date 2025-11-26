
import asyncio
from playwright.async_api import async_playwright
import sys
import time

async def main():
    await asyncio.sleep(30)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--no-sandbox'])
        page = await browser.new_page()
        try:
            await page.goto("http://localhost:8080")
            await page.wait_for_timeout(5000)

            # Check if the page is blank
            is_blank = await page.evaluate("document.body.innerText.trim() === ''")

            if is_blank:
                print("Error: The page is blank.")
                await browser.close()
                sys.exit(1)
            else:
                print("Success: The page is not blank.")

        except Exception as e:
            print(f"An error occurred: {e}")
            await browser.close()
            sys.exit(1)
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
