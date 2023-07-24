var name = ["rahul","pratik","jayesh","kartik","pratham","rohit","niru"];
function randName()
{
 var n = Math.random();
    return (name [(n *(name.length))]);
}
console.log("The person who is going to pay is " + randName() +" ! ");