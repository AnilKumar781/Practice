import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/contactList.allcontacts'; 
export default class WireDecorator extends LightningElement {

@wire (getAllAccounts) contact;
}