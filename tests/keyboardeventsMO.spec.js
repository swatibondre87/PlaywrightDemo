const{test,expect} = require('@playwright/test')
test("Keyboard Events in Playwright", async function ({page})  {
    await page.goto("https://www.google.com/")
  //  await page.locator("textarea[name='q']").fill("Mukesh otwani")
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.fill("Swati Bondre!")
  await page.keyboard.press("ArrowLeft")
  await page.keyaboard.down("Shift")
  for(let i=0; i<6; i++){
    await page.keyboard.press("ArrowLeft")
  }
  await page.keyboard.up("Shift")
  await page.keyboard.press("Backspace")


    /*await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
   // await page.keyboard.press("Enter")
   await page.keyboard.press("Backspace")
   await page.keyboard.press("Control+V") */
    
})