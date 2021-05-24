# [#1000 A+B](https://www.acmicpc.net/problem/1000)

날짜: 2021.05.24

> POINT: `node.js`의 묘듈 `readline` 또는 `fs`을 사용해야 한다.

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const num = input.split(" ");

  const result = Number(num[0]) + Number(num[1]);

  console.log(result);
  rl.close();
});
```

