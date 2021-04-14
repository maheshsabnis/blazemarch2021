class BaseClass {
    #v=0;
    constructor(val){
        this.#v = val;
    }

    #checkV(){
        if(this.#v <= 0) this.#v =1;
    }

    getPower(){
        this.#checkV();
        return Math.pow(this.#v, 5);
    }
}

class DeriveClass extends BaseClass {
    constructor(v){
        super(v);
        this.val = v;
    }

    getSquareRoot(){
       return Math.sqrt(this.val); 
    }
}


