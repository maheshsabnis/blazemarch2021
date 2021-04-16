export class MyClass {
    changeCase(str,c) {
        if(c === "U") return str.toUpperCase();
        if(c === "L") return str.toLowerCase();

        return str;
    }
}