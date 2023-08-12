const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);

// animal 객체 안에 있는 name 을 nickname 이라고 선언하겠다.

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

// 또는
// const {
//   state: {
//     information: { name, languages }
//   },
//   value
// } = deepObject;

const extracted = {
  name, // name: name,
  languages, //languages: languages,
  value, //value: value,
};

console.log(extracted);