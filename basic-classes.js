/* ==============================================================
====            ES5 Classes
================================================================*/
'use strict';

function Shape(id, x, y) {
    this.id = id;
    this.setLocation(x, y);
}

Shape.prototype.setLocation = function(x, y) {
    this.x = x;
    this.y = y;
};

Shape.prototype.getLocation = function() {
    return {
        x: this.x,
        y: this.y
    };
};

Shape.prototype.toString = function() {
    return 'Shape("' + this.id + '")';
};

function Circle(id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.toString = function() {
    return 'Circle > ' + Shape.prototype.toString.call(this);
};

// Usage
var myCircle = new Circle('mycircleid', 100, 200, 50); // create new instance
console.log(myCircle.toString()); // Circle > Shape("mycircleid")
console.log(myCircle.getLocation()); // { x: 100, y: 200 }

/* ==============================================================
====            ES6 Classes
================================================================*/
'use strict';

class Shape(id, x, y) {
    constructor(id, x, y) { // constructor syntactic sugar
        this.id = id;
        this.setLocation(x, y);
    }
    
    setLocation(x, y) { // prototype function
        this.x = x;
        this.y = y;
    }
    
    getLocation() {
        return {
            x: this.x,
            y: this.y
        };
    }
    
    toString() {
        return `Shape("${this.id}")`;
    }
}

function Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y); // call Shape's constructor via super
        this.radius = radius;
    }
    
    toString() { // override Shape's toString
        return `Circle > ${super.toString()}`; // call `super` instead of `this` to access parent
    }
}

// usage
var myCircle = new Circle('mycircleid', 100, 200, 50); // create new instance
console.log(myCircle.toString()); // Circle > Shape("mycircleid")
console.log(myCircle.getLocation()); // { x: 100, y: 200 }
