'use strict';

function getResult(a,b,c){
    let disc = b**2 - 4 * a * c;
    let x = [];
    if (disc < 0) {
      return x;
    } else if (disc == 0) {
      return x[0] = (-b) / 2 * a;
    } else {
      x[0] = (-b - Math.sqrt(disc)) / 2 * a;
      x[1] = (-b + Math.sqrt(disc)) / 2 * a;
      return x;
    }
}

function getAverageMark(){
    let marks = [];
    let countMarks = arguments.length;
    let totalMarks;
    for (let i = 0; i < arguments.length; i++) {
    marks.push(arguments[i]);
    }
    
    if (countMarks > 5) {
      console.log('Оценок введено больше 5');
      marks.splice(0, 4);
      return totalMarks = (marks.reduce((a, b) => a + b)) / countMarks;
    } else if (marks == '') {
      return 0;
    } else {
      return totalMarks = (marks.reduce((a, b) => a + b)) / countMarks;
    }
}

function askDrink(name,dateOfBirthday){
        
    let dateNow = new Date();
    dateNow = dateNow.getFullYear();
    let userAge = dateNow - dateOfBirthday;

    if (userAge > 18 ) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}