let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
console.log(Object.assign(user, permissions1, permissions2)); // 첫 번째 인수를 반환합니다.

// now user = { name: "John", canView: true, canEdit: true }
console.log(user);
console.log(permissions1);
console.log(permissions2);

////////////////////////////////////////////////////////////////////
user = { name: "John" };

Object.assign(user, [permissions1, permissions2]); 

console.log(user);
console.log(permissions1);
console.log(permissions2);

////////////////////////////////////////////////////////////////////
user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // user = { name: "Pete" }