// We can assign types
let id: number = 5;

let company: string = "Ted";

let isPublished: boolean = true;

// will not be complaint
let x: any = "Hello";

x = true;

// array of numbers
let ids: number[] = [1, 2, 3, 4, 5];

// tuple type
let person: [number, string, boolean] = [1, "ted", true];

// tuple array
let employee: [number, string, boolean][] = [
  [1, "Ted", true],
  [2, "Kevin", true],
];

// union
let uid: string | number;
uid = "ted";
uid = 5;

// Enum - allow us to declare a set of named constant
// by default it is 0,1,2,3,...
enum Direction1 {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

enum Direction2 {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
console.log(Direction2.DOWN);
