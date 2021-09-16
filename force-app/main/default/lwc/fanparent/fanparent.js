import { LightningElement,api,track } from 'lwc';

export default class Fanparent extends LightningElement {
    @track fanvalue = '';
    //here we handled the event
  handleResponse(event){
    this.fanvalue = event.detail;
    console.log('Event',this.fanvalue);
   }
    
} 
