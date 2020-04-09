function parseCount(value) {
    let numberParseValue = Number.parseInt(value);
    if (Number.isNaN(numberParseValue)) {
        throw new Error("Невалидное значение");
    }
    return numberParseValue;
}

function validateCount(value) {
    
    try {
            return parseCount(value);
        }
    catch(err) {
        return err;
    }
}



class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        this.p = (this.a + this.b + this.c) / 2;
        return +(Math.sqrt( this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c))).toFixed(3);
        
        
        
    }
}


function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch(e) {
        let triangleError = {};
        triangleError.getPerimeter = function() {
                    return "Ошибка! Неправильный треугольник";
                };
        triangleError.getArea = function() {
                    return "Ошибка! Неправильный треугольник";
                };
        return triangleError;
        }
    }