public with sharing class A2C {
    @AuraEnabled
    public static contact insertcontact(String recordId,String fn,String LastName) {
        contact cont = new contact();
        
        cont.AccountId = recordId;
        cont.Lastname = Lastname;   
        insert cont;
        system.debug('Inserted Contact:' + cont);
        system.debug('AccountID:' + recordId);
        return cont;

    }
}
