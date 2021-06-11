# [#2742 기찍 N](https://www.acmicpc.net/problem/2742)

### 1차. 시간초과
* for문안에 console.log(answer)을 적게되면 for문이 한번실행될때마다 계속 console.log에 찍는 명령이 더해져서 시간이 굉장히 오래걸립니다.
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let num = Number(line);

  if (num <= 100000) {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
  }

  rl.close();
});
```
### 2차. 맞았습니다. 

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let num = Number(line);
  // let answer = "";
  let answer = [];

  if (num <= 100000) {
    for (let i = num; i > 0; i--) {
      answer.push(i);
    }
  }

  console.log(answer.join("\n"));

  rl.close();
});

```
