var year = 400;
function isYear(year){
   if (year % 4 === 0)
   {
   
        if ((year % 100 === 0)&& (year % 400 === 0))
          {
               return ("the year is a leap year");
          }
          else
          {
            return("the year is not a leap year");
          }
     }
   
   else
   {
     return("the year is not a leap year");
   }

}
console.log(isYear(year));