// 일반적으로 스택을 구현할 때, JavaScript의 배열(array)자료형을 사용한다.
let stack = [];

stack.push(5); //삽입
stack.push(5); //삽입
stack.push(5); //삽입
stack.pop(); // 삭제

let reversed = stack.slice().reverse();
console.log(reversed); // 최상단 원소부터 출력
console.log(stack);
