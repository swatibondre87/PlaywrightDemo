const { test, expect } = require('@playwright/test')
test("Select values from Dropdown", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({ label: "Goa" })
    await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" })
    await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({ index: 4 })
    /*  await page.waitForTimeout(5000)
      const value = await page.locator('#state').textContent()
      console.log("All dropdown values: " +value)
      await expect(value.includes("Kerla")).toBeTruthy()
        */

    let state = await page.$("#state")
    let allElements = await state.$$("option")
    let ddstatus = false
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i]
        let value = await element.textContent()
        if (value.includes("Rajasthan")) {
            ddstatus = true
            break
        }
    }
    await expect(ddstatus).toBeTruthy()
    console.log("Value from dropdown using for loop: " + value)

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])



})  