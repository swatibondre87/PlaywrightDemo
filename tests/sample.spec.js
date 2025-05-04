const{test, expect} = require('@playwright/test')

test("First Test", async function({page}) {
  expect(100).toBe(100)
})

test.skip("Second Test", async function ({page}) {
    expect(2.9).toBe(2.9)
})

test("Third Test", async function ({page}) {
    expect(12).toBe(12)
})

test("Fourth Test", async function({page}){
expect("Swati Bondre").toContain("Swati")
expect(true).toBeTruthy()
})

test("Fifth Test", async function({page}){
    expect(false).toBeFalsy()
    })

test("Sixth Test", async function ({page}) {
    expect("swati Bondre".includes("Bondre")).toBeTruthy()
    
})