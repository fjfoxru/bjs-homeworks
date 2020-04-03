function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    let average = 0;
    let roundedAverage;
    if (marks.length == 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        average += +marks[i];
    }
    return roundedAverage = Math.round(average / marks.length);
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / 31536000000;
    return age;
}