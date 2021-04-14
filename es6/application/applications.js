class ProductLogic {
    #products=[];
    #categories = [];
    constructor(){
        this.#products = []; 
        this.#categories = ['ECT', 'ECL', 'FOD'];
        this.#products.push({ProductId:1, ProductName:'Laptop', CategoryName:'ECT', Price:10000});
    }
    getCategories(){
        return this.#categories;
    }
    getProducts(){
        return this.#products;
    }

    addProduct(prd){
        this.#products.push(prd);
        return this.#products;
    }
}