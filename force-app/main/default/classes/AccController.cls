public with sharing class AccController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsRelatedToAccount(String accId) {
        list<contact> Conlist = new list<contact>();
        Conlist= [SELECT Id, FirstName, LastName, Email, Phone from Contact where AccountId = :accId];
        system.debug('accId >> ' + accId);
        return Conlist;
    }
}