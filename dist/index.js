"use strict";
// We can assign types
let id = 5;
let company = "Ted";
let isPublished = true;
// will not be complaint
let x = "Hello";
x = true;
// array of numbers
let ids = [1, 2, 3, 4, 5];
// tuple type
let person = [1, "ted", true];
// tuple array
let employee = [
    [1, "Ted", true],
    [2, "Kevin", true],
];
// union
let uid;
uid = "ted";
uid = 5;
// Enum - allow us to declare a set of named constant
// by default it is 0,1,2,3,...
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["DOWN"] = "DOWN";
    Direction2["LEFT"] = "LEFT";
    Direction2["RIGHT"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.DOWN);
// Object type syntax of declaring type and defining objects
const user = {
    id: 1,
    name: "ted",
};
const person2 = {
    id: 1,
    name: "ted",
};
// Type assertion
let cid = 1;
let customerID = cid;
let customerID2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log(addNum(1, 2));
const user1 = {
    id: 1,
    name: "Ted",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Using classes
// class implements interface
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Child class extends super class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const ted = new Person(1, "Ted");
const emp = new Employee(3, "Ted", "Software Engineer");
console.log(ted);
console.log(ted.register());
emp.register();
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["ted", "kevin", "mia"]);
numArray.push(1);
