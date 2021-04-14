class AbstractClass {
    constructor(){
        // the new.target willbe eveluated for
        // instance check 
        // if it is  AbstractClass then error will be thrown and the
        // instance won't be created 
        if(new.target === AbstractClass){
            throw new TypeError('This class canno be instantiated');
        }
    }

    bMethod(){
        console.log('Base');
    }
}

class NewClass extends AbstractClass {
    constructor(){
        super();
    }
    dMethod(){
        console.log('Derive');
    }
}

let o = new AbstractClass(); // throw error
o.bMethod();