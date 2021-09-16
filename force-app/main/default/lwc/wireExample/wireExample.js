import { LightningElement ,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
export default class WireExample extends LightningElement {
userdetails
userId= Id
recordId
@wire(getRecord,{recordId:'$recordId'})
userdetailhandler({data,error}){
    if(data){
        this.userdetails= data
    }
    if(error){
        this.userdetails = error
    }
}

}