import { BrowserContext, Locator,Page,TestInfo} from '@playwright/test';

export class playwrightgenerics{
   readonly page:Page
    constructor(p:Page){
        this.page=p

    }
    //dropdown
    async dropdownusingLabel(ele:Locator,valuetoselect:string): Promise<void>{
        await ele.selectOption({label:valuetoselect})
        console.log(valuetoselect);
        
    }
    async dropdownusingIndex(ele:Locator,valuetoselect:number):Promise<void>
    {
        await ele.selectOption({index:valuetoselect})

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
    
   //alert
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
    async alertAccept(page:Page):Promise<void>
    {
        page.once("dialog",async(dialog)=>{
            await dialog.accept()
        })
    }
     async alertDismiss(page:Page):Promise<void>
    {
        page.once("dialog",async(dialog)=>{
            await dialog.dismiss()
        })
    }

    
    
    
    

}