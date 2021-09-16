public with sharing class TestLightningAccController {
    //@AuraEnabled(cacheable = true)
    //public static list<contact> getRelatedList()
    //{
        //list<contact> Conlist = new list<contact> ();
        //Conlist = [select id ,name from contact limit 10];
        //Conlist = [Select id, name,firstname,lastname from Contact where AccountId=: recordId ];
       // return Conlist;
    //}
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(String accountId){
        list<contact> Conlist = new list<contact> ();
       Conlist = [Select Id,FirstName,LastName,Email,Phone from Contact where accountId=:accountId];
       system.debug('Conlist**'+ Conlist);
       return Conlist;
}

}