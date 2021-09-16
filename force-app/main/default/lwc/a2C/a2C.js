import { LightningElement ,track} from 'lwc';
import createcontact1 from '@salesforce/apex/a2C.insertcontact';
export default class A2C extends LightningElement {
    @track FirstName;
    @track LastName;
    @track Email;
    @track message;
    changeNameHandler(event){
        if(event.FirstName == 'fn'){
        this.FirstName = event.target.value;
        console.log('FirstName*', this.FirstName);
        }
        if(event.LastName == 'ln'){
            this.LastName = event.target.value;
            console.log('LastName', this.LastName);
            }
            if(event.Email == 'em'){
                this.Email = event.target.value;
                console.log('Email', this.Email);
                }
    }
    insertContactAction(){
        createcontact1({FirstName:this.FirstName, LastName:this.LastName, Email:this.Email})
        .then(result =>{
            alert('this is success**')
            this.message=result;
            this.error=undefined;
        })
        .catch(error =>{
            alert('this is failed**')
            this.message=undefined;
            this.error=error;
        });
    }
}