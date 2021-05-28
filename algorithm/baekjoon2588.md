# [#2588 곱셉](https://www.acmicpc.net/problem/2588)

> node.js를 잘 사용하지 못해 계속 틀리는 거 같다. </br>
> <피드백>
> + 05.28 두 줄 입력 방법을 몰랐다.
> + 05.28 문제를 제대로 읽지 않았다. (문제에 두 줄 입력하라고 되어 있었음)

내가 쓴 코드
1. - 런타임 에러
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const num = input.split(" ");

  let a = num[0];
  let b = num[1];

  let sliceB1 = b.slice(0, 1);
  let sliceB2 = b.slice(1, 2);
  let sliceB3 = b.slice(b.length - 1, b.length);

  let result1 = a * sliceB3;
  let result2 = a * sliceB2;
  let result3 = a * sliceB1;

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result1 + result2 * 10 + result3 * 100);

  rl.close();
});
```
2. - 틀림
```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const num = input.split(" ");

  let num1 = Number(num[0]);
  let num2 = Number(num[1]);

  let hundredSeatsNum2 = Math.floor(num2 / 100);
  let tenSeatsNum2 = Math.floor(num2 / 10) - hundredSeatsNum2 * 10;
  let oneSeatsNum2 = Math.floor(num2 % 10);

  console.log(num1 * oneSeatsNum2);
  console.log(num1 * tenSeatsNum2);
  console.log(num1 * hundredSeatsNum2);
  console.log(num1 * num2);
  rl.close();
});

```

### 해결
1. 두 줄 입력 시 아래의 과정 필요
```javascript
let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    console.log(input[0] + input[1]);
    process.exit();
  });
```
2. 필요 없는 코드( `const num = input.split(" ");`) 

다른 사람의 코드
출처 : https://velog.io/@exploit017/2588%EA%B3%B1%EC%85%88
```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
	
  let hundredSeatsNum2 = Math.floor(num2 / 100);
  let tenSeatsNum2 = Math.floor(num2 / 10) - (hundredSeatsNum2 * 10);
  let oneSeatsNum2 = num2 % 10;

  console.log(num1 * oneSeatsNum2);
  console.log(num1 * tenSeatsNum2);
  console.log(num1 * hundredSeatsNum2);
  console.log(num1 * num2);

  process.exit();
});
```

### readline 문서
* https://www.npmjs.com/package/readline-sync
* https://github.com/nodejs/node/blob/master/doc/api/readline.md
* http://man.hubwiz.com/docset/NodeJS.docset/Contents/Resources/Documents/nodejs/api/readline.html
* https://stitchcoding.tistory.com/13
