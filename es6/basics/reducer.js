let data = ['Ajit', 'Mahesh', 'Amit', 'Ajit', 'Amit'];

// use reducer function to return number of times the name occured in array

function countFrequency(names,curname){
    // check the repeatation of curname in names and if found
    // increase counter by 1
    if( curname in names){
        names[curname]++;
    }else {
        // else sert the counter to 1
        names[curname] = 1;
    }
    // return 
    return names;
}
// names is the array for iteration
// curname is each record from the names
let res = data.reduce((names, curname)=>{
     // check the repeatation of curname in names and if found
    // increase counter by 1
    if( curname in names){
        names[curname]++;
    }else {
        // else sert the counter to 1
        names[curname] = 1;
    }
    // return 
    return names;
}, {});
console.log(`Frequency = ${JSON.stringify(res)}`);

let res1 = data.reduce(countFrequency,{});
console.log(`Frequency = ${JSON.stringify(res1)}`);

// find out the result group by object

let employees = [
    {eno:1, ename:'A', dname:'d1'},
    {eno:2, ename:'B', dname:'d2'},
    {eno:3, ename:'C', dname:'d3'},
    {eno:4, ename:'D', dname:'d1'},
    {eno:5, ename:'E', dname:'d2'}
];

// print records group by department

// sourceArray, is the array to read
// pname  is the property for groupng 
function printGroup(sourceArray, pname){
    // emp is record to scan from array
    // obj is the is the single object fromm array of objects
    return sourceArray.reduce((emp,obj)=>{
        let groupKey = obj[pname]; // the group property
        // if no record for the key the group will be empty
        if(!emp[groupKey]){
            emp[groupKey] = [];
        }
        // add the record in emp group
        emp[groupKey].push(obj);
        return emp;
    },{});
}
// print the group based on dname
let groupResult = printGroup(employees, 'dname');
console.log(`Result of Groups = ${JSON.stringify(groupResult)}`);