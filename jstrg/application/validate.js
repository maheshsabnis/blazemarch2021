var ValidateForm = function(){
    this.checkNumeric = function(value){
        console.log('Received Values is = ' + value);
        if(!parseInt(value)){
            alert('Value must be number');
        }
        value = 0;
        return value;
    };
};