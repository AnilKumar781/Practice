import { LightningElement, api,track } from 'lwc';

export default class Fanchild extends LightningElement {
    @track fan = 'Value received from child as Fan is running';
  handleClick(event){
   const storeEvent = new CustomEvent('myevent', 
    { detail: this.fan}
   );
   this.dispatchEvent(storeEvent);
  }
} 