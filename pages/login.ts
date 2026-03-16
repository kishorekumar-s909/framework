import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightgenerics } from '../utils/playwrightgenerics';
export class login extends playwrightgenerics{
    readonly email:Locator
    readonly password:Locator
    readonly loginButton:Locator
    constructor(page:Page){
        super(page);
        this.email=page.getByPlaceholder("Email")
        this.password=page.getByPlaceholder("Password")
        this.loginButton=page.locator("//button[@type='submit']")

    }
    async login(email:string,password:string){
        await this.enterText(this.email,email)
        await this.enterText(this.password,password)
        await this.clickEle(this.loginButton)
    }
}