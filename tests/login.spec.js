const{test, expect} = require("@playwright/test")
test.use({viewport: {width:1550, height:780}})
test("Valid Login" , async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().height)
    console.log(await page.viewportSize().width)
    await page.getByPlaceholder("Username").fill("Admin", {delay:200})
    await page.locator("input[name='password']").fill("admin1234", {delay:300})
    await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
  //  await page.waitForTimeout(1000)
    await expect(page).toHaveURL(/login/)

    
})