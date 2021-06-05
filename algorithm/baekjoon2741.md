# [#2741 ]()

이것도 시간초과 때문에 readline모듈 때문에 사용불가...<br>
fs 모듈 배워야함. 이제 readline 익숙해졌는데ㅠ
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = +line;

  for (i = 1; i <= input; i++) {
    console.log(i);
  }
  rl.close();
});
```
