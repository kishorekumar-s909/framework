import {test,expect} from '@playwright/test';





test("create product",async({page})=>{
    
    await page.goto("https://playground.bsparksoftwaretechnologies.com/login")
    await page.getByPlaceholder("email").fill("rajuvar34@newmail.com")
    await page.getByPlaceholder("password").fill("abc123@#")
    await page.locator("//button[contains(text(),'Login')]").click()
    await page.locator("//h2[text()='Products']").click()
    await page.locator("//button[contains(text(),'Create Product')]").click()
    await page.getByPlaceholder("Product ID").fill("890")
    await page.getByPlaceholder("Product Name").fill("sony")
    await page.getByPlaceholder("Product Description").fill("earphone")
    await page.getByPlaceholder("Product Price").fill("3000")
    await page.locator("//select[@name='color']").selectOption("Red")
    await page.locator("//input[@name='active']").click()
     await page.locator("//input[@value='Yes']").click()
     await page.locator("//button[@type='submit']").click()
     const id =  page.locator("//table/tbody/tr/td[2]")
   await   expect(id).toContainText("890")






    

})