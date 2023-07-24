var weight,height;
function bmicalculator(weight, height) {
    var bmi = weight / (height*height) ;
    return bmi;
}
console.log(Math.round(bmicalculator(85,1.74)));
