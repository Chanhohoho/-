// 배열
let numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number);
}

// 객체
numbers = {
    _a: 1,
    _b: 1,
    _c: 1,
}

for(let key in numbers){
    console.log(`${key}: ${numbers[key]}`);
}

