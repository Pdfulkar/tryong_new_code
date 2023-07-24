var output = [];
var numbers;
function fizzbuzz(numbers){    
for (var n=1; n <= numbers; n++){
    if (n % 3 == 0){
        if (n % 5 == 0)
        {
            output.push("fizzbuzz");
        }
        else    {
        output.push("fizz");
        }
    }
    
    else if(n % 5 == 0){
        output.push("buzz");
    }

    else{
    output.push(n);
    }
}
    console.log(output);
}
fizzbuzz(10);

// var output = [];
// var n = 1;

// function fizzbuzz(){    
// while(n <=100);{
//     if (n % 3 == 0){
//         if (n % 5 == 0)
//         {
//             output.push("fizzbuzz");
//         }
//         else    {
//         output.push("fizz");
//         }
//     }
    
//     else if(n % 5 == 0){
//         output.push("buzz");
//     }

//     else{
//     output.push(n);
//     }
    
//     n ++;
// }
//     console.log(output);
// }