// the close type function that returns public types using Literal
function StringUtilities(str){
    // the private for the function
    var x = 'Message';
    // private reference function
    var innerObject = function(){
        // public funciton inside the innerObject which isn private to the StringUtilities
        this.changeCase = function(){
           return str.toUpperCase(); 
        };
    };
    return {
        getLength:function(){
            var obj = new innerObject();
            str = obj.changeCase();
            return str.length;
        },
        reverse:function(){
            var res;
            for(var i=str.length;i>=0;i--){
                res+=str[i];
            }
            return res; 
        },
        param:x,
        privateObj:innerObject // an instance of the innerObject, exposed using privateObj
    };
}

