"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 12, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are a ${person.age} old and you are a ${person.gender}!`;
};
// console.log였다면, 반환값이 없기에 void를 함수의 결과값으로 줘야함.
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map