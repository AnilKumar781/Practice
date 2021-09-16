import { LightningElement,track, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/TestLightningAccController.getContacts';

export default class ConnectedCallbackLifecycle extends LightningElement {

@track contacts;
@track accountId = '';
@track error;
@api recordId; 

    connectedCallback()
    {
        alert('RecordId &&*:' + this.recordId);
        //alert('RecordId1 &&:' + $recordId);
        
    getContactList({accountId: this.recordId})
        
        .then(result => {
            this.contacts = result;
            this.error = undefined;
            console.log('this is connectedcallback ***$' + this.contacts);
            alert('this.contacts'+ this.contacts);
        })
        .catch(error => {
            this.error = error;
            this.contacts = undefined;
            alert('this.error'+ this.error);
        });
        
   }   
}
