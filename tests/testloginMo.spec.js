const { test, expect } = require("@playwright/test")
const testdata = JSON.parse(JSON.stringify(require("../testloginMO.json")))

test.describe("Data Driven Login Test", function ()
 {
    for(const data of testdata)
    {
        test.describe(`Login with users ${data.id}`, function ()
        {

            test("Test Login to Application", async ({ page }) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                //  await page.locator("#email1").fill(testdata.Interests[1])
                //  await page.locator("#email1").fill(testdata.address.area)
                await page.locator("#email1").fill(data.username)
                await page.locator("#password1").fill(data.password)
               // await page.pause()
            })

        })
    }
    
})



