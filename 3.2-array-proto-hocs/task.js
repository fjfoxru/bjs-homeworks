function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(50); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

 const compareArrays = ( arr1, arr2 ) => arr1.every((arr, i) => (arr === arr2[i] || arr.length == arr2.length));

 function memorize (fn, limit) {
  const memory = [];
  return function (...args) {
    let currentResult = {};
    currentResult.args = args;
    
    let findInMemory = memory.find((item) => compareArrays(item.args, currentResult.args));

    if(!findInMemory) {
      currentResult.result = fn(...args);
      memory.push(currentResult);
      if(memory.length > limit) {
        memory.shift();
      }
      return currentResult.result;
    }
 }
}


function testCase (testFunction, timerName) {
  let testArrays = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timerName);
  for(i = 0; i < 10; i++) {
    testArrays.forEach(function (currentArray) {
      testFunction(...currentArray);
    })
  }
  console.timeEnd(timerName);
}


const mSum = memorize(sum, 3);
mSum(3, 4); // 7
mSum(1, 3); // 4
mSum(3, 4);
mSum(16, 4, 3);
mSum(1, 3);


testCase(mSum, 'Таймер новой функции суммы');
testCase(sum, 'Таймер функции суммы');


