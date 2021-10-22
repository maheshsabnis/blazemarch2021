import {MyClass} from './file2.js';

let obj = new MyClass();

console.log(obj.sortValeus([2,3,4,1,5,6]));

 
    
        let depts = ["IT", "HRD", "SALES","ACCOUNTS"];

        var selectDept = obj.generateList(depts);
        var categories = ["ECT","ECT","FOD"];
        var selectCats = obj.generateList(categories);
        
        let employees = [  
            {EmpNo:101, EmpName:"Mahesh", DeptName:"IT", Salary:80000},
            {EmpNo:102, EmpName:"Tejas", DeptName:"SALES", Salary:60000}
        ];
        
        var employeeTable = obj.generateTable(employees);
        
        let categoriesData = [
            {CategoryId:"Cat001", CategoryName:"ECT", Price:1000},
            {CategoryId:"Cat002", CategoryName:"ECL", Price:1100},
            {CategoryId:"Cat003", CategoryName:"FOD", Price:500},
            {CategoryId:"Cat004", CategoryName:"CVL", Price:8000},
            {CategoryId:"Cat005", CategoryName:"MEH", Price:1000}
           ];
           var categoriesTable = obj.generateTable(categoriesData);
        

         
        document.getElementById('lst1').innerHTML = selectDept;
               
        document.getElementById('lst2').innerHTML = selectCats;
        
        document.getElementById('dvtable').innerHTML =  employeeTable;

       
        document.getElementById('dvtable1').innerHTML =  categoriesTable;
   
 

