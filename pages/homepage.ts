import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightgenerics } from '../utils/playwrightgenerics';
export class homepage extends playwrightgenerics{
    readonly productele:Locator
    constructor(page:Page){
        super(page);
        this.productele=page.locator("//h2[text()='Products']")
    }
    async producteleclik(){
        this.clickEle(this.productele)
    }
}