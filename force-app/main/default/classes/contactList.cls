public with sharing class contactList {
    @AuraEnabled(cacheable = true)
        public static list<contact> allcontacts() {
            list<contact> con = new list<contact> ();
            con=[select id, name  from contact limit 10];
        return con; 
        
    }
}
