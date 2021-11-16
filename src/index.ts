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
