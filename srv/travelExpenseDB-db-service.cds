using travelExpenseDB.db as my from '../db/travelExpenseDB.cds';

service TravelExpenseDBDbService {
	@readonly entity countryMaster as projection on my.countryMaster;
	@readonly entity activityMaster as projection on my.activityMaster;
	@readonly entity reasonMaster as projection on my.reasonMaster;
	@readonly entity employeeMaster as projection on my.employeeMaster;
	@readonly entity managerMaster as projection on my.managerMaster;
	@readonly entity travelMaster as projection on my.travelMaster;
	@readonly entity expenseClaimMaster as projection on my.expenseClaimMaster;
}