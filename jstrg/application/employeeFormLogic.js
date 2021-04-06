var EmployeeLogic = function(){
    this.departments = ['IT','HRD', 'ACCOUNTS','SALES', 'TRAINING'];
   
    this.employess = [
        {EmpNo:101, EmpName:"Mahesh", DeptName:"IT", Salary:80000},
        {EmpNo:102, EmpName:"Tejas", DeptName:"SALES", Salary:60000},
    ];
    
    this.addEmployee = function(emp){
        this.employess.push(emp);
        return this.employess;
    };
    
    this.getEmployees = function(){
        return this.employess;
    };
};