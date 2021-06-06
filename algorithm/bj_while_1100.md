# [#1100 더하기 사이클](https://www.acmicpc.net/problem/1110)

## 오답
### 1차: 틀렸습니다

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = +line;
  let num = input;
  let answer;
  let cycle = 0;
  let isNotSame = true;

  while (isNotSame) {
    let a = +num % 10;
    let b = Math.floor(+num / 10);
    answer = String(a) + String(a + b);
    answer = num;

    console.log(input, answer);

    cycle++;

    if (input === num) break;
  }
  console.log(cycle);

  rl.close();
});

```
### 2차: 메모리 초과
* 터미널에서 제대로 출력 됨.
* 백준에서 채점시 메모리 초과
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = [];

  input.push(line);
  let num = +input[0];
  let answer;

  if (num < 10) {
    num *= 10;
  }

  while (true) {
    let a = +num % 10;
    let b = Math.floor(+num / 10);

    answer = String(a) + String((a + b) % 10);
    input.push(answer);

    num = answer;

    if (input[0] == num) {
      console.log(input.length - 1);
      break;
    }
  }

  rl.close();
});
```
