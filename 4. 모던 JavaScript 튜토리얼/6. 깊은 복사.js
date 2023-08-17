let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
console.log( clone.sizes.width ); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
// 프로퍼티가 객체일 경우 얕은 복사가 발생한다

////////////////////////////////////////////////////////////////////
// 해결방법(깊은 복사)

// 1. 재귀 함수 활용
// 가장 일반적인 방법 중 하나는 재귀 함수를 사용하여
// 객체나 배열의 모든 요소를 순회하면서 복사하는 방법입니다.

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  let copy;
  
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
  } else {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  }
  
  return copy;
}

user=[1,2,{1:1,2:2}];
clone = deepCopy(user);
console.log( user[2] === clone[2] ); // false

// 2. JSON.stringify()와 JSON.parse() 활용
// 객체를 JSON 문자열로 변환한 후 다시 JSON.parse()를 사용하여 객체로 변환하는 방법입니다.
// 이 방법은 객체의 모든 속성을 깊은 복사하지만,
// 함수나 특수한 데이터 타입(RegExp 등)은 처리하지 못하는 단점이 있습니다.

const originalObj = [{ a: 1, b: { c: 2 } }];
const copiedObj = JSON.parse(JSON.stringify(originalObj));
console.log(originalObj === copiedObj);

// 3. 외부 라이브러리 활용
// 깊은 복사를 지원하는 많은 외부 라이브러리가 있습니다.
// 예를 들어, Lodash의 _.cloneDeep() 함수를 사용하거나,
// jQuery의 $.extend(true, {}, originalObj)를 활용할 수 있습니다.