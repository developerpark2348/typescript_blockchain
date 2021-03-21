const name = "Park",
    age = 22,
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are a ${age} old and you are a ${gender}`);
}

sayHi(name, age);

export {}; 