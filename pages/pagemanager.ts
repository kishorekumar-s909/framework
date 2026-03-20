import {Page} from '@playwright/test'
import {login} from './login'
import {homepage} from './homepage'
import {product} from './product'
export class pagemanager{
    private page:Page;
    private login?:login;
    private homepage?:homepage;
    private product?:product;
    constructor(page:Page){
    this.page=page;
    getloginpage(){
        if(! this.login){
            
        }


    }

    }


}