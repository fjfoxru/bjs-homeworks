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
  const currentResult = {}; 
  

  return function () {

    currentResult.result = fn();
    memory.push(currentResult);
    console.log(currentResult);
   }

 }


 const mSum = memorize(sum, 5);
 mSum(3, 4);