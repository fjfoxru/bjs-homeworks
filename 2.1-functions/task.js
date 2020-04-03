function getSolutions( a, b, c ) {
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
        return {
            'D': D, 
            roots: []
        }
    } else if (D == 0) {
            x1 = (-b) / (2 * a);
        return {
            'D': D,
            roots: [x1] 
        }
    } else {   
            x1 = ((-b) + Math.sqrt(D)) / (2 * a);
            x2 = ((-b) - Math.sqrt(D)) / (2 * a);
            return {
                 'D': D,
                 roots: [x1, x2]   
            }
    }
}


function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}





function getAverageMark(marks) {
    let sum = 0;
    if (marks.length == 0) {
        return 0;
        
    } else {
        for (let i = 0; i < marks.length; i++) {  
            sum += marks[i];
        }
        return sum / marks.length;
    }
   
}
function getAverageScore(data) {
    let averageScore = {};
    let averageSum = 0;
    for (let lesson in data) {
        let middleMark = getAverageMark(data[lesson]);
        averageScore[lesson] = middleMark;
        averageSum += middleMark;
    }
    averageScore.average = averageSum / Object.keys(averageScore).length;
    console.log(averageScore);
    return averageScore;
}




let secretData = {
    aaa: 1,
    bbb: 0
}


function getPersonData(secretData) {
    let bandit = {};
    for (let data in secretData) {
        if (data == 'aaa') {
            bandit.firstName = getDecodedValue(secretData[data]);
        } else if (data == 'bbb') {
            bandit.lastName = getDecodedValue(secretData[data]);
        }
    }
    console.log(bandit);
    return bandit;

}


function getDecodedValue(secret) {
    if (secret == 0) {
        return 'Родриго';
    } else if (secret == 1) {
        return 'Эмильо';
    }

}

getPersonData(secretData);