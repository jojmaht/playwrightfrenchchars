import Playwright from "playwright";

const browser = await Playwright.chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.setContent(`
  <html>
    <body>
	  <input type="text"/>
	</body>
  </html>
`);

await page.locator("input").focus();

await page.keyboard.press("ù");
