namespace travelExpenseDB.db;

entity countryMaster
{
    key countryID : Integer;
    countryName : String(100) not null;
}

entity activityMaster
{
    key activityID : Integer;
    activityName : String(100) not null;
}

entity reasonMaster
{
    key reasonID : UUID;
    reasonName : String(100);
}

entity employeeMaster
{
    key empID : Int32;
    companyCode : Integer not null;
    empName : String(100) not null;
    empMail : String(100) not null;
    empBranch : String(100) not null;
    department : String(100) not null;
    empGrade : String(100) not null;
    empDesignation : String(100) not null;
    gender : String(50) not null;
    empMobileNo1 : Integer not null;
    empMobileNo2 : Integer not null;
    address1 : String(100) not null;
    address2 : String(100);
    country : String(100) not null;
    activeIND : String(100);
    costCenter : Integer;
    travel: Association to many travelMaster on travel.employee = $self;
    manager:Association to managerMaster;
  
}

entity managerMaster
{
    key mngrID : Int32;
    companyCode : Integer not null;
    mngrName : String(100) not null;
    mngrMail : String(100) not null;
    mngrBranch : String(100) not null;
    department : String(100) not null;
    mngrGrade : String(100) not null;
    mngrDesination : String(100) not null;
    gender : String(100) not null;
    mngrMobileNo1 : Integer not null;
    mngrMobileNo2 : Integer not null;
    address1 : String(100) not null;
    address2 : String(100) not null;
    country : String(100) not null;
    activeIND : String(100);
    costCenter : String(100);
    employee: Association to many employeeMaster on employee.manager = $self;
}

entity travelMaster
{
    key travelID : Integer @cds.auto;
    startD : String(50) not null;
    endD : String(50) not null;
    departure : String(50) not null;
    arrival : String(50) not null;
    postingD : String(50);
    country : String(100);
    destination : String(100);
    addtionalDest : String(100);
    activity : String(100);
    reason : String(100);
    estmCosts : String(100);
    comment : String(100); 
    costAsgmt : String(100);
    saveAs: String(5);
    employee: Association to employeeMaster;
}   

entity expenseClaimMaster
{
    key expnsClaimID : UUID;
    key empId : UUID;
    startD : String(100) not null;
    endD : String(100) not null;
    departure : String(100) not null;
    arrival : String(100) not null;
    postingD : String(100) not null;
    countryName : String(100) not null;
    destination : String(100) not null;
    additionalDest : String(100);
    reasonName : String(100) not null;
    comment : String(100);
    estmCosts : String(100) not null;
    costAsgmt : String(100) not null;
}
