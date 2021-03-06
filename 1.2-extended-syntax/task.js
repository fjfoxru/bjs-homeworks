'use strict';

function getResult(a,b,c){
    let disc = b**2 - 4 * a * c;
    let x = [];
    if (disc == 0) {
      x[0] = (-b) / 2 * a;
    } else if (disc > 0) {
      x[0] = (-b + Math.sqrt(disc)) / 2 * a;
      x[1] = (-b - Math.sqrt(disc)) / 2 * a;
    }
    return x;
}

function getAverageMark(marks){
    if (marks == '') {
      return 0;
    }
    let countMarks = marks.length;
    if (countMarks > 5) {
      console.log('Оценок введено больше 5');
      marks.splice(5);
      countMarks = marks.length; 
    }
    return (marks.reduce((a, b) => a + b)) / countMarks;
}

function askDrink(name,dateOfBirthday){
    let userAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    return userAge > 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}