import { test } from '@playwright/test';

import { product } from '../pages/product';
import { login } from '../pages/login';
import { homepage } from '../pages/homepage';
import {alldata} from '../testdata/data.json'

test("createproductform",async({page})=>{

  

let productobj =new product(page)
let loginobj=new login(page)
let homepageobj=new homepage(page)
const testdata = alldata.testdata01
const testdata1 = alldata.testdata02
 await page.goto("https://playground.bsparksoftwaretechnologies.com/login")
await loginobj.login(testdata.email,testdata.password)
await homepageobj.producteleclik()
await productobj.createproductform(testdata1.productid,testdata1.productname,testdata1.productdescription,testdata1.productprice)

})