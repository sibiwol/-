# [#2884 알람 시계](https://www.acmicpc.net/problem/2884)

### 오류
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  let num = input.split(" ");

  const setHour = Number(num[0]);
  const setMin = Number(num[1]);

  let changeHour = setHour;
  let changeMin = setMin - 45;

  if ((0 <= setHour <= 23, 0 <= setMin <= 59)) {
    if (setMin < 45) {
      changeMin += 60;
      changeHour -= 1;

      if (setHour <= 0) {
        changeHour += 24;
      }

      console.log(changeHour + " " + changeMin);
    }
  }
});
```
