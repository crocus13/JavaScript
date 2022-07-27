function decimalToBinary(a, b){

    let sum  = a + b ;

    //convert string value to integer
    let num = parseInt(sum);

    //converts the decimal number to binary number
    let result = num.toString(2); //  toString(base) method returns a string value
    return result;

}
console.log(decimalToBinary(2,3));
console.log(decimalToBinary(5,9));