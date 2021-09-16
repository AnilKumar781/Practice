import { LightningElement,api } from 'lwc';

export default class PageChildExample extends LightningElement {
@api page=1;
nextHandler(){
    this.page = this.page + 1;
        //this.page= event.target.value;

    }
previousHandler(){
    if (this.page > 1) {
        this.page = this.page - 1;
    }
    }
}