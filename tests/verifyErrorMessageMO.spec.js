const{test, expect} =require('@playwright/test')
test.use({viewport:{width:1550,height:990}})

test("Verify Error message", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin1234")
    await page.locator("//button[normalize-space()='Login']").click()
    const errorMessage = await page.getByText("Invalid credentials").textContent()
    console.log("Error Message: " +errorMessage)
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()
})