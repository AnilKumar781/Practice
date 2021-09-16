import { LightningElement,track } from 'lwc';

export default class ButtonFanExample extends LightningElement {
    @track fan = false;
    @track togglefan = true;
    showHandler(){
    this.fan = true;
    };
    toggleHandler(){
        this.togglefan = !this.togglefan;
    }
} 