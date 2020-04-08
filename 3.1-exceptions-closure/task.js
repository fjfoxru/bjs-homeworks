function parseCount(value) {
    if (Number.parseInt(value) === NaN) {
        throw "Невалидное значение";
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    
    try {
        if (parseCount(value) !== NaN) {
            return value;
        }
    }
    catch(err) {
        return err;
    }
}



class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a ) {
            throw "Треугольник с такими сторонами не существует";
        }
    }
    getPerimeter() {
        return a + b + c;
    }
    getArea() {
        return (a + b + c) / 2;
    }
}


function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c);
    } catch(e) {
        return {
            
        }
    }
    

}