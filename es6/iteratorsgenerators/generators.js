function* ValueGenerator(start=0, end=100, step=1){
    let iterationCount = 0;
    for(let i=start; i<end;i+=step){
        iterationCount++;
        yield i; 
    }
    return iterationCount;
}

const genrator = ValueGenerator(1,20,1);
let result =  genrator.next();

while(!result.done){
    console.log(`Current Value id = ${result.value}`);
    result = genrator.next();
}