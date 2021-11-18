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

// Object type syntax of declaring type and defining objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "ted",
};

// object but declaring and defining are different
type userType = {
  id: number;
  name: string;
};

const person2: userType = {
  id: 1,
  name: "ted",
};

// Type assertion
let cid: any = 1;
let customerID = <number>cid;

let customerID2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

console.log(addNum(1, 2));
