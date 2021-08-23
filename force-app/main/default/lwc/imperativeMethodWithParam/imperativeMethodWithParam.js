import { LightningElement ,wire, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ImperativeMethodWithParam extends LightningElement {
    @track searchKey;
    @track contacts;
    @track error;
    @wire(getContactList, { searchKey: '$searchKey' })
    //contacts;
    wiredAccounts({data, error}){
		if(data) {
			this.contacts =data;
			this.error = undefined;
		}else {
			this.contacts =undefined;
			this.error = error;
		}
	}
       
    handlekeychange(event){
        this.searchKey = event.target.value;
        console.log('this.searchKey'+this.searchKey );
    }
}