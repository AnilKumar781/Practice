public with sharing class Account2contactcreate {
    @AuraEnabled//(cacheable = true)
    public static contact insertAccount2contactcreate(string LastName, Id recordId, string accountId) {
        system.debug('LastName**'+ LastName);
        contact con= new contact();
            con.AccountId = recordId;
            con.Lastname = LastName;
            insert con;
            system.debug('con inserted' + con);
         	return con;
    }
    }