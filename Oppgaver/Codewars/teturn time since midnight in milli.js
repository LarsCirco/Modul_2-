/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

function past(h, m, s){
    //#Happy Coding! ^_^
    let minute = 60*m*1000;
    let hour = 60*60*h*1000;
    let seconds = 1000*s;
    result = minute + hour + seconds;
    return result;
  }