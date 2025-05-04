const{expect} = require("@playwright/test")

class HomePage
{
    constructor(page)
    {
        this.page=page
        this.manageoption="//span[normalize-space()='Manage']"
        this.menu="//img[@alt='menu']"
        this.signout="//button[text()='Sign out']"
    }

    async verifyManageOption()
    {
       await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

    async logoutFromApplication()
    {
       await this.page.click(this.menu)
       await this.page.click(this.signout)

    }

}
module.exports = HomePage;