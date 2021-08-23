public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name FROM contact WHERE Name LIKE :key LIMIT 10 ];
    }
}


