//基础类型
// const a: number = 1;

// const b: string = "2";

// const c: null = null;

// const d: undefined = undefined;

// const e: boolean = false;

// let f: any;

// let g: unknown;

// console.log(a);

//类型断言:
//1.

// type types = number | string;

// const constance: types = 1;

// console.log(constance as number);

//2.

// let somVlue: any = "this is a string";

// let strLength: number = (somVlue as string).length;

//接口
// interface NumType {
//   readonly name: string;
//   readonly age?: number;
// }

// const obj: NumType = {
//   name: "name",
// };

//接口1
// interface NumType {
//   (name: string, age: number): boolean;
// }

// let NumFunc: NumType;
// NumFunc = function (name: string, age: number): boolean {
//   return false;
// };

// console.log(NumFunc);

//接口2
// interface ArrType {
//   [index: number]: string;
// }

// let arr: ArrType = ["1", "2"];

// console.log(arr);

//接口3
// interface classType {
//   currentTime: string;
//   setTime(d: number): string;
// }

// class Clock implements classType {
//   currentTime: string = "1";
//   setTime(d: number) {
//     return d + "";
//   }
// }

// console.log(Clock);

//接口4
// interface classType {
//   name: string;
// }
// interface NameType extends classType {
//   age: number;
// }

// let obj: NameType = { name: "name", age: 18 };

// console.log(obj);

//类
// class classType {
//   name: string;
//   constructor(age: number) {
//     this.name = age + "";
//   }
//   greet() {
//     //定义原型上的方法
//     return "Hello," + this.name;
//   }
// }

//类的继承1
// class Animal {
//   move(name: string) {
//     console.log(name);
//   }
// }

// class Dog extends Animal {
//   back() {
//     console.log("dog,dog");
//   }
// }

// const dog = new Dog();
// dog.move("move");
// dog.back();

//类的继承2
// interface calssType {
//   move(name: string): void;
// }

// class type implements calssType {
//   move(name: string) {
//     console.log(name);
//   }
// }

//类的继承3
// class type {
//   name: string;
//   constructor(nameContent: string) {
//     this.name = nameContent;
//   }
// }

// interface calssType extends type {
//   name: string;
//   age: number;
// }

//类的继承4
// interface classType {
//   name: string;
//   age: number;
// }

// interface insType extends classType {
//   sex: string;
//   salary: number;
// }
