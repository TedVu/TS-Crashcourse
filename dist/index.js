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
