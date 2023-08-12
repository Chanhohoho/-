/////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [10, 20, 30, 40];
const array = [1, 2, 3, 4, 5];
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
const pets = ['cat', 'dog', 'bat'];
/////////////////////////////////////////////////////////////////////////////////////////////
// includes
  console.log(pets.includes('cat')); // Expected output: true
  console.log(pets.includes('at')); // Expected output: false

// forEach
  superheroes.forEach(hero => {
    console.log(hero);
  });

// map
  const square = n => n * n;
  const squared = array.map(square);
  console.log(squared);

// indexOf - 배열안의 값이 객체, 배열 아닐때
  const index1 = superheroes.indexOf('토르');
  console.log(index1);

// findIndex - 배열안의 값이 객체, 배열일때
  const index2 = todos.findIndex(todo => todo.id === 3);
  console.log(index2);

// find - 찾는값 반환
  const todo = todos.find(todo => todo.id === 3);
  console.log(todo);

// filter
  const tasksNotDone = todos.filter(todo => todo.done === false);
  console.log(tasksNotDone);

// shift - 첫번째 원소를 배열에서 추출할 때, 추출하는 과정에서 해당 원소는 제거된다.
  const value1 = numbers.shift();
  console.log(value1);
  console.log(numbers);

// pop - 마지막 원소를 배열에서 추출할 때, 추출하는 과정에서 해당 원소는 제거된다.
  const value2 = numbers.pop();
  console.log(value2);
  console.log(numbers);

// unshift - 배열의 맨 앞에 새 원소를 추가
  numbers.unshift(10);
  console.log(numbers);

// push - 배열의 맨 뒤에 새 원소를 추가
  numbers.push(40);
  console.log(numbers);

// slice - 배열을 잘라낼 때, 기존의 배열은 유지
  const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지
  console.log(sliced); // [10, 20]
  console.log(numbers); // [10, 20, 30, 40]
  
// splice - 배열에서 특정 항목을 제거할 때
  const index3 = numbers.indexOf(30);
  const newNumbers = numbers.splice(index3, 1); // 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지
  console.log(newNumbers);
  console.log(numbers);

// concat - 여러개의 배열을 하나의 배열로 합칠 때
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const concated = arr1.concat(arr2);
  console.log(concated);

// join - 배열 안의 값들을 문자열 형태로 합쳐준다
  console.log(array.join()); // 1,2,3,4,5
  console.log(array.join(' ')); // 1 2 3 4 5
  console.log(array.join(', ')); // 1, 2, 3, 4, 5

// reduce - 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수,
//          두번째 파라미터는 reduce 함수에서 사용 할 초깃값
  let sum = numbers.reduce((accumulator, current) => {
    console.log({ accumulator, current });
    return accumulator + current;
  }, 0);
  console.log(sum);