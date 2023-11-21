// 피보나치 함수(Fibonacci Function)을 재귀함수로 구현
function fibo(x) {
  if (x == 1 || x == 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
}

// 40이 넘어가면 오버헤드 발생 우려
console.log(fibo(4));
