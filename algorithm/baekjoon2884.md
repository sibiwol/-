# [#2884 알람 시계](https://www.acmicpc.net/problem/2884)

### 오류
* VSCode에서 돌려봤을 땐 정확히 출력값이 나오는데 백준 사이트에서 채점하면 틀렸다고 나온다.
* `해결2`를 보며 이유를 알아냈다. <br>
   `(setMin < 45)`의 조건 안에서 콘솔을 찍었기 때문에 `setMin`의 값이 45 ~ 59라면 결과값이 나오지 않는다. 
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
### 해결1
* 변수를 `Hour`과 `Min`으로 통일했다. (대문자로 쓴 것은 이전 풀이의 변수 앞단어만 지워서...)
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  let num = input.split(" ");

  let Hour = Number(num[0]);
  let Min = Number(num[1]);

  if ((0 <= Hour <= 23, 0 <= Min <= 59)) {
    if (Min < 45) {
      Min += 60 - 45;
      Hour -= 1;
    } else {
      Min -= 45;
    }

    if (Hour < 0) {
      Hour += 24;
    } else {
      Hour;
    }

    console.log(Hour, Min);
  }
  rl.close();
});
```

### 해결2
* 오류난 코드를 토대로 다시 고쳐보았다. 
* 중첩된 if를 분리했다.
* 두 번째 if문의 조건을 잘못 줬다. <br>
  첫 번째 if문의 결과로 `changeHour`값이 -1이 될 수 있기 때문에 아래와 같이 변경했다. </br>
  `(setHour <= 0)`=> `(changeHour < 0)`
* if문에서 꼭 필요하지 않다면 else를 생략해도 된다. (작동에 문제 없음)

> [else문은 if 문에서 선택사항이다.](https://bigtop.tistory.com/27)

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
    }

    if (changeHour < 0) {
      changeHour += 24;
    }

    console.log(changeHour, changeMin);

    rl.close();
  }
});
```
