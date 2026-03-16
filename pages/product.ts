import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightgenerics } from '../utils/playwrightgenerics';
export class product extends playwrightgenerics{
    readonly createProductelement:Locator
    readonly productId:Locator
    readonly productName:Locator
    readonly productDiscription:Locator
    readonly productPrice:Locator
    readonly dropDown:Locator
    readonly checkbox:Locator
    readonly radio:Locator
    readonly radio1:Locator
    readonly saveButton:Locator
    constructor(page:Page){
        super(page);
        this.createProductelement=page.getByRole("button",{name:"+ Create Product"})
        this.productId=page.getByPlaceholder("Product ID").last()
        this.productName=page.getByPlaceholder("Product Name")
        this.productDiscription=page.getByPlaceholder("Product Description")
        this.productPrice=page.locator("//input[@name='price']")
        this.dropDown=page.locator("//select[@name='color']")
        this.checkbox=page.locator("//input[@name='active']")
        this.radio=page.locator("//input[@value='Yes']")
        this.radio1=page.locator("//input[@value='No']")
        this.saveButton=page.getByText("Save")
    }
    async createproduct():Promise<void>
    {
         await this.createProductelement.click()

    }
    async createproductform(id:string,name:string,discription:string,price:string,color:string)
    {
       
        await this.enterText(this.productId,id)
        await this.enterText(this.productName,name)
        await this.enterText(this.productDiscription,discription)
        await this.enterText(this.productPrice,price)
        await this.dropdownusingLabel(this.dropDown,color)
        await this.clickEle(this.checkbox)
        await this.clickEle(this.radio1)
        await this.clickEle(this.saveButton)
    }

}
