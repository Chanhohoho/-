const namelessDog = {
  name: '',
};

const dog = {
  name: '뽀삐',
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
};

let name = getName(dog);
console.log(name); // 뽀삐

name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

name = getName();
console.log(name); // 이름이 없는 동물입니다.

// A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다.
// 반면, A 가 Falsy 한 값이라면 결과는 A 가 됩니다.

// A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 됩니다.
// 반면, A 가 Falsy 하다면 결과는 B 가 됩니다