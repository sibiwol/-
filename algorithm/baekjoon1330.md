# [#1330 두 수 비교하기](https://www.acmicpc.net/problem/1330)

> Point: 데이터 타입 확인


### 처음 쓴 코드
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
472
rl.on("line", (input) => {
  const value = input.split(" ");

  const num1 = value[0];
  const num2 = value[1];

  if (num1 >= -10000 && num2 <= 10000) {
    if (num1 > num2) {
      console.log(">");
    } else if (num1 < num2) {
      console.log("<");
    } else {
      console.log("==");
    }
  }

  rl.close();
});
.on("close", () => {
  process.exit();
});
```

### 해결 과정
1. `num1`과 `num2` 콘솔 출력 해보기
```javascript
rl.on("line", (input) => {
  const value = input.split(" ");

  const num1 = value[0];
  const num2 = value[1];

  console.log(typeof num1, num2); // string 2

  rl.close();
```
10과 2를 입력했을 때`string`과 `2`값이 나왔다. 데이터의 타입이 `number`가 아닌 `string`으로 나왔기 떄문에 ` const num1 = Number(value[0]);`이런식으로 고침 

### 해결
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const value = input.split(" ");

  const num1 = Number(value[0]);
  const num2 = Number(value[1]);

  if (num1 >= -10000 && num2 <= 10000) {
    if (num1 > num2) {
      console.log(">");
    } else if (num1 < num2) {
      console.log("<");
    } else {
      console.log("==");
    }
  }

  rl.close();
});

```
