import { LightningElement ,track ,api} from 'lwc';
import createcontact from '@salesforce/apex/Account2contactcreate.insertAccount2contactcreate';

export default class AccountToContactcreate extends LightningElement {
    @track FirstName ;
    @track LastName ;
    @track Email ;
    @track con;
    @api recordId; 
    @track message;
    
    handleNameChange(event) {
        if(event.target.name == 'fName'){ 
        this.FirstName = event.target.value;
        console.log("FirstName**:", this.FirstName);
    }
    if(event.target.name == 'lName'){
        this.LastName = event.target.value;
        console.log("LastName&&:", this.LastName);
    }
    if(event.target.name == 'Em'){
        this.Email = event.target.value;
        console.log("Email$$:", this.Email);
    }

    }
    
insertContactAction() {
    createcontact({FirstName:this.FirstName, LastName:this.LastName, Email:this.Email,recordId:this.recordId })
      
    .then(result => {
            alert('This is then Alert*', result)
            this.message = result;
            this.error = undefined;
        })
        .catch(error => {
            alert('This is catch alert')
            this.message = undefined;
            this.error = error;
            
        });
}
}
