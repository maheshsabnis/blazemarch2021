let names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Nandu", "Abhay", "Anil", "Vivek", "Satish", "Mukesh", "Vinay", "Kaustubh", "Rahul", "Vikram", "Krushna", "Sameer", "Abhishek", "Piyush"];

let resWithLength6 = [];

names.forEach((n,i)=>{
    if(n.length === 6) {
        resWithLength6.push(n);
    }
});

console.log(resWithLength6);
// instead use filter() method

let res = names.filter((n,i)=>{
    return n.length === 6;
});
console.log(`NAmes with Length as  6 = ${res}`);

// search the string with its first occureance

let occur = names.find(n=>n==="Mahesh Sabnis");
console.log(`Occure = ${occur}`);

function insert(values){
    return names.push(values);
}

insert(["Prashant", "Suhas", "Suresh", "Gajanan", "Raju"]);

console.log(names);

function remove(index,count){
    return names.splice(index,count);
}

remove(18,1);
console.log(names);

// reducer(), the method used execute a reducer() function, i.e. the function used to update the state of the array by scanning or iterative over each element of the array

let myarray = [10,20,30,40,50,60];
// create a reducer function, the function that contains the state update logic

const reducer = (finalValue, currentValue)=> finalValue + currentValue;
// sum of all elemenets in array
console.log(myarray.reduce(reducer));
// modify the state of the array by defining additioal value to be added in the result
console.log(`With Additional Value = ${myarray.reduce(reducer,90)}`);



