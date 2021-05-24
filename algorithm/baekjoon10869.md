# [#10869 사칙연산]()

날짜: 2021.05.25

> 오답노트: 혜림아^^ 문제 좀 똑바로 읽자^^ `몫`을 구하라고 문제에 정확히 나와 있잖니^^

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const num = input.split(" ");

  let a = Number(num[0]);
  let b = Number(num[1]);

  if (a >= 1 && b <= 10000) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
  }

  rl.close();
});
```

