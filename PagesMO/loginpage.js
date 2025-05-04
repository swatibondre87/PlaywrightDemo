const{expect} = require("@playwright/test")
class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.header="//h2[text()='Sign In']"
        this.username="#email1"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton="//button[text()='Sign in']"
 }

 async loginToApplication(user,pass)
 {
    await this.page.fill(this.username,user)
    await this.page.fill(this.password,pass)
    await this.page.click(this.loginbutton)
   // await this.page.pause()

 }

 async verifySignIn()
 {
    await expect(this.page.locator(this.header)).toBeVisible()
 }
}
module.exports=LoginPage;