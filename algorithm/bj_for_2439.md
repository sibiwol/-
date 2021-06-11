# [#2439 별 찍기 -2](https://www.acmicpc.net/problem/2439)

### 1차. 맞았습니다
> [str.padStart(targetLength [, padString])](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

* 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다.<br>
즉, 오른쪽 정렬이 가능합니다.
* `targetLength`: 목표 문자열 길이.
* `padString`: 현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " ".
* 반환값: 시작점부터 주어진 문자열로 채워 목표 길이를 만족하는 String
* 폴리필: `String.prototype.padStart()`

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = line;

  if (1 <= input && input <= 100) {
    for (let i = 1; i <= input; i++) {
      console.log("*".repeat(i).padStart(input));
      if (i == input) break;
    }
  }

  rl.close();
});

```
