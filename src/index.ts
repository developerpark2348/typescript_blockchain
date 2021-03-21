interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "jinwoo",
    age: 22,
    gender: "male"
};

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are a ${person.age} old and you are a ${person.gender}!`;
}
// console.log였다면, 반환값이 없기에 void를 함수의 결과값으로 줘야함.

console.log(sayHi(person));

export {}; 