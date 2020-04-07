class Weapon {

    constructor(params) {
        this.name = params.name;
        this.attack = params.attack;
        this.fullDurability = params.durability;
        this.durability = params.durability;
        this.range = params.range;
    }
    takeDamage(damage) {
        this.durability -= damage;
        this.durability < 0 ? this.durability = 0 : this.durability;
    }
    getDamage() {
        if (this.durability == 0) {
            return 0;
        } else if (this.durability >= (this.fullDurability / 100 * 30)) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }
    isBroken() {
        return this.durability > 0 ? false : true;
    }

}




class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
          });
    }
}
class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
          });
    }
}
class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
          });
    }
}
class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
          });
    }
}
class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
          });
    }
}


class LongBow extends Bow {
    constructor() {
        super({
            durability: 200,
          });
          this.range = 4;
          this.name = 'Длинный лук';
          this.attack = 15;
    }
}
class Axe extends Sword {
    constructor() {
        super({
            range: 200,
          });

        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
    
}
class StormStaff extends Staff {
    constructor() {
        super({
            
            durability: 300,
          });
          this.name = 'Посох Бури';
          this.attack = 10;
          this.range = 3;
    }
}




const stormStaff1 = new StormStaff();

// console.log(staffStorm1.name);
// console.log(staffStorm1.attack);
// console.log(staffStorm1.durability);
// console.log(staffStorm1.range);
// staffStorm1.takeDamage(100);




// arm.takeDamage(20);
// console.log(arm.durability); // Infinity
// bow.takeDamage(20);
// console.log(bow.durability); // 180
// bow.takeDamage(200);
// console.log(bow.durability); // 0
// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0
// console.log(arm.durability); // Infinity
// console.log(arm.getDamage()); // 1
// console.log(bow.durability); // 0
// console.log(bow.isBroken()); // true
// console.log(arm.durability); // Infinity
// console.log(arm.isBroken()); // false











class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade > 5 || grade < 1 || isNaN(grade)) {
            return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`;
        }

        Array.isArray(this.marks[subject]) ? '' : this.marks[subject] = [];
        this.marks[subject].push(grade);
        return this.marks[subject].length;
    }
    getAverageBySubject(subject) {
        let middleMark = 0;
        if (Array.isArray(this.marks[subject])) {
            for (let i = 0; i < this.marks[subject].length; i++) {
                middleMark += this.marks[subject][i];
            }
        return middleMark / this.marks[subject].length;
        } else {
            return 0;
        }
        
    }
    getTotalAverage() {

        let middleMark = 0;
        let allMiddleMark = 0;
        for (let subject in this.marks) {
            if (this.marks[subject].length == 0) {
                return 0;
            }

            for (let i = 0; i < this.marks[subject].length; i++) {
                middleMark += this.marks[subject][i];
            }
            allMiddleMark += middleMark / this.marks[subject].length;
            middleMark = 0;
        }
        return allMiddleMark / Object.keys(this.marks).length;
        }
        
    
}






const log = new StudentLog('Олег Никифоров');
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75