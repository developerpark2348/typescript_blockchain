const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are a ${age} old and you are a ${gender}!`;
}
// console.log였다면, 반환값이 없기에 void를 함수의 결과값으로 줘야함.

console.log(sayHi("Park", 22, "male"));

export {}; 