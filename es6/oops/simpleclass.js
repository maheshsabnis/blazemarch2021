class SimpleClass {
    // define a constructor using 'constructor()' function
    // default ctor
    constructor(){}
    
    // public methods
    add(x,y){
        return Math.pow(x,y) + Math.pow(y,x);
    }
}

class SimpleClassParameters {
    // private variable or private class level property
     #data = 0
    // parameterized ctor, used to store values for members 
    // this. prefixed data members are public
    // they are declared inside the constructor 
    constructor(x,y){
        this.a = x;
        this.b = y;
        this.#data = y;
        console.log(`Private data = ${this.#data}`);
    }
    // private method
    #validate(){
        if(this.a <= 0) this.a = 1;
        if(this.b <= 0) this.b = 1; 
    }
    // public methods
    add(){
        this.#validate();
        return Math.pow(this.a,this.b) + Math.pow(this.b,this.a);
    }
}