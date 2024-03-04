using travelExpenseDB.db as my from '../db/travelExpenseDB.cds';

service TravelExpenseDBDbService {
	 entity countryMaster as projection on my.countryMaster;
	 entity activityMaster as projection on my.activityMaster;
	 entity reasonMaster as projection on my.reasonMaster;
	 entity employeeMaster as projection on my.employeeMaster;
	 entity managerMaster as projection on my.managerMaster;
	 entity travelMaster as projection on my.travelMaster;
	 entity expenseClaimMaster as projection on my.expenseClaimMaster;
}