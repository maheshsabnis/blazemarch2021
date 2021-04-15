// the function wuth default parameter values (ES 6 feature)
function RangeIterator(start=0, end =Infinity, step=1){
  // custom generator implementation

  // define a nextIndex
  let nextIndex = start;
  console.log(nextIndex);
  // define the iteration COunters
  let iterationCount = 0;

  // define a process of iteration

  const dataIterator = {
      next:function(){
         // the result will be the object that will contain
         // current state of the iteration with 
         // current 'value' and state of completion 'done' 
         let result;
         if(nextIndex <= end){
             result = {value:nextIndex, done:false};
             // increase
             nextIndex+= step;
             // increament the index from the sequence
             iterationCount++;
             // returning result with the current value
             return result;
         }   
         // returnin the last value and the completion 'done' as true (completed)
         return {value:nextIndex, done:true};
      }
  };
  // the yield of each entry nthat will be returned from the sequence
 return dataIterator;
}


const iterator =  RangeIterator(1,20,1);
let values = iterator.next();
while(!values.done){
    console.log(`Current value in sequence is = ${values.value}`);
    values = iterator.next();
}

const myarr = [10,20,30,40,50,60,70];


let reader = RangeIterator(myarr[0], myarr[myarr.length-1],10);
let v = reader.next();
while(!v.done){
    console.log(`Current value in sequence is = ${v.value}`);
    v = reader.next();
}