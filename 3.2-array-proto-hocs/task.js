function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }






 const compareArrays = ( arr1, arr2 ) => arr1.every((arr, i) => arr === arr2[i] );





 function memorize (fn, limit) {

  const memory = [];
   
  

  return function (...args) {
    let currentResult = {};
    currentResult.result = fn(...args);
    currentResult.args = args;
    
    let findInMemory = memory.find((item, index, array) => compareArrays(item.args, currentResult.args));
    
    if(findInMemory)
    memory.push(currentResult);
   }

 }


 const mSum = memorize(sum, 2);
 mSum(3, 4); // 7
 mSum(1, 3); // 4
 mSum(3, 4);