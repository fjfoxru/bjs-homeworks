function calculateTotalMortgage(percent, contribution, amount, date) {
        let dateNow = new Date();
        let dateCredit = new Date(date);
        let month = Math.round((dateCredit.getTime() - dateNow.getTime()) / (1000 * 3600 * 24 * 30));
        let amountCredit = amount - contribution;
        let monthlyPayment = amountCredit * ( (percent / 12) + (percent / 12) / ( ( (1 + percent / 12) ** month ) - 1));
        let allsum = monthlyPayment * month;

        if (isNaN(+percent) || isNaN(+contribution) || isNaN(+amount)) {
            return `Параметр <название параметра> содержит неправильное значение <значение параметра>`;
        } else {
            return allsum.toFixed(2);
        }
}

function getGreeting(name) {
    let isValid = (name == '' || name == undefined);
    let message = `Привет, мир! Меня зовут ${isValid ? "Аноним" : name}`;
    return message;
}