const { test, expect } = require("@playwright/test")
const testdata = JSON.parse(JSON.stringify(require("../testdataMO.json")))

test("Login to Application", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    //  await page.locator("#email1").fill(testdata.Interests[1])
    //  await page.locator("#email1").fill(testdata.address.area)
    await page.locator("email1").fill(testdata.username)
    await page.locator("#password1").fill(testdata.password)
    await page.pause()
})