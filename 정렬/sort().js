// 정수 오름차순
function compare(a, b) {
  return a - b;
}

// 정수 내림차순
function compare(a, b) {
  return b - a;
}

// 문자열 오름차순
// 별도로 비교 함수를 사용하지 않으면, 유니코드순으로 정렬된다.

// 문자열 내림차순
function compare(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}

// 문자열 대소문자 구분 오름차순 정렬
// 대소문자를 구분하지 않도록 toUpperCase() 메소드를 사용할 수 있다.
function compare(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

// 객체에 대하여 원하는 기준으로 오름차순 정렬
let arr = [
  { name: "홍길동", score: 90},
  { name: "김철수", score: 85},
  { name: "박영희", score: 97}
]

function compare(a, b) {
  return b.score - a.score;
}