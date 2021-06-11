# [#2438 별찍기 -1](https://www.acmicpc.net/status?user_id=thinkerring&problem_id=2438&from_mine=1)

### 1차. 맞았습니다
(🎉한번에 성공🎉)
> str.repeat(count);

* `count`: 문자열을 반복할 횟수

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = line;
  for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i));
    if (i == input) break;
  }

  rl.close();
});

```
