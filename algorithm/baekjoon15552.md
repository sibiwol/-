# [#15552 빠른 A+B](https://www.acmicpc.net/problem/15552)

readline 모듈을 이용하면 시관초과로 풀 수 없다<br>
(fs로 푸는 방법 알아야 함)
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let count = Number(input[0]);
  let countMax = 1000000;

  if (count <= countMax) {
    for (i = 1; i <= count; ++i) {
      let num1 = Number(input[i].split(" ")[0]);
      let num2 = Number(input[i].split(" ")[1]);

      let answer = num1 + num2;

      if (i === input.length) break;

      console.log(answer);
    }
  }

  process.exit();
});

```
