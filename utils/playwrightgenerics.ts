import { BrowserContext, Locator,Page,TestInfo} from '@playwright/test';
import { url } from 'node:inspector';
import { Url } from 'node:url';
export class playwrightgenerics{
    //dropdown
    async dropdown(ele:Locator,valuetoselect:string): Promise<void>{
        await ele.selectOption({label:"valuetoselect"})
        console.log(valuetoselect);
        
    }
    async dropdownCountvalue(ele:Locator): Promise<void>{
        await ele.count()
        console.log("count value");
        
    }
    //mouse
    async clickEle(ele:Locator):Promise<void>{
        await ele.click()
    }
    async rightClick(ele:Locator): Promise<void>{
        await ele.click()
        console.log("right value");
        
    }
     async doubleClick(ele:Locator): Promise<void>{
        await ele.dblclick()
        console.log("double value");
        
    }
     async draganddrop(ele:Locator,ele2:Locator): Promise<void>{
        await ele.dragTo(ele2)
        console.log("element draged");
        
    }
    async hover(ele:Locator): Promise<void>{
        await ele.hover()
       
        
    }
    //windowhandling
    
    async openMultiplepage(page1:Page,page2:Page,url1:string,url2:string):Promise<void>{
      await page1.goto(url1)
      await page1.goto(url2)
      console.log("multiple page ");
      

        
    }
    async openChildwindow(context:BrowserContext,page:Page,ele:Locator,url:string):Promise<void>{
        
       page = await context.newPage()
       page.goto(url)
       const childWindow= context.waitForEvent("page")
       await ele.click()
       const childw=await childWindow
      console.log("childwindow",childw.url());
    }

    //screenshot
    async takeScreenshot(page:Page,sspath:string){
         await page.screenshot({path:sspath})
        console.log("Screenshot taken for entire page");  
    }
      async takeelementScreenShot(ele:Locator,sspath:string){
         await ele.screenshot({path:sspath})
        console.log("Screenshot taken for element in page");  
    }

    //browser
     async toPreviousPage(page:Page):Promise<void>
    {
        await page.goBack()
        console.log("Got back to previous page");        
    }

    async toNextPage(page:Page):Promise<void>
    {
        await page.goForward()
        console.log("Navigated to next page");        
    }

    async refreshPage(page:Page):Promise<void>
    {
        await page.reload()
        console.log("Page refreshed");        
    }
     async closePage(page:Page):Promise<void>
    {
        await page.close()
        console.log("Page closed");           
    }

    async launchURL(page:Page,url:string):Promise<void>
    {
        await page.goto(url)
        console.log("Page has been launched");           
    }
      async enterText(ele:Locator,valueToEnter:string):Promise<void>
    {
        await ele.fill(valueToEnter)
        console.log("Value entered as",valueToEnter);
        
    }
     async enterNumber(ele:Locator,value:number):Promise<void>
    {
        await ele.fill(value)
        console.log("Value entered as",value);
        
    }
   
    async clearText(ele:Locator):Promise<void>
    {
        await ele.clear()
        console.log("Value Cleared");        
    }
    async getAttributeText(ele:Locator,attributeName:string):Promise<string>
    {
        const data = await ele.getAttribute(attributeName)
        console.log("getAttribute of",attributeName); 
        return data || ""       
    }

    async getElementText(ele:Locator):Promise<string>
    {
        const data = await ele.textContent()
        console.log("Element text is",data); 
        return data || ""        
    }

    
    
    
    

}