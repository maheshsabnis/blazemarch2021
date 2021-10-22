class DataAccess {
    constructor(){
        this.products = [];
    }

    getData(){
        let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
            method:'GET',
        });
        return response;
    }

    postData(prd){
        let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
            method:'POST',
            body: JSON.stringify(prd),
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
}