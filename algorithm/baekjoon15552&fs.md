# [#15552 빠른 A+B](https://www.acmicpc.net/problem/15552)

### readline
* 터미널에선 제대로 나오지만 시간초과로 문제를 풀 수 없음<br>
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

### fs
* 나참 어이가 없네. 개행("\n") 문자 넣으니까 시간초과 발생 안함. 뭔 차이인데 
```javascript
let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);

```


## `fs.js` 모듈 사용 방법
블로그 => https://hell-world.tistory.com/37
### 쓰기
```javascript
let fs = require("fs");

let text = "fs 모듈 사용법! wirteFile!";

// 매개변수: 저장할 파일 이름, 저장할 텍스트, 인코딩, 콜백함수
fs.writeFile("about.txt", text, "utf-8", (err) => {
  if (err) throw err;
  console.log("파일 저장 완료");
});
```
### 읽기
```javascript
let fs = require("fs");

// 매개변수: 읽어올 파일 이름, 인코딩, 콜백함수(두번째 매개변수는 읽어올 데이터)
fs.readFile("about.txt", "utf-8", (err, result) => {
  if (err) throw err;
  console.log(result);
});
```
### 쓰기
```javascript
let fs = require("fs");

// 매개변수: 열 파일 이름, 플래그 값: w와 a 있음, 콜백함수의 두번째 매개변수 filedId: 고유한 id 값
// w - write(없으면 새로 만들고 있으면 기존 내용에 덮어쓰기
// a - write 기능이지만 새로 덮어쓰지 않고 내용을 계속해서 추가함               // r - read 파일을 읽을 때
fs.open("about.txt", "w", (err, fileId) => {
  if (err) throw err;
  console.log(fileId);

  // Buffter 객체: 나눠서 수행 가능?
  // open의 매개변수가 w인 경우 about.txt에 Buffer()인수 내용으로 교체
  // open의 매개변수가 a인 경우 about.txt 같은줄 옆에 Buffer()인수 내용 추가
  // open의 매개변수가 r인 경우 바로 아랫줄부터 fs.close() 빼고 다 지워야함.
  var buf = new Buffer("이걸 읽어보겠습니다!");

  // 매개변수: 고유 fieldId, Buffer 객체, offset으로 읽기 시작할 위치, offset으로 어디까지 읽을지, position, 콜백함수)
  // 읽으려는 파일을 위의 고유한 id로부터 가져옴 open 내부에서 write 실행
  fs.write(fileId, buf, 0, buf.length, null, (err, length) => {
    if (err) throw err;

    console.log("파일 쓰기 완료!");

    // open 이후 write 작업이 끝나면 close 실행
    fs.close(fileId, () => {
      console.log("파일을 읽고 쓴 이후에 닫기");
    });
  });
});
```
### 읽기
```javascript
let fs = require("fs");

// 매개변수: 열 파일 이름, 플래그 값: w, a, r 있음, 콜백함수의 두번째 매개변수 filedId: 고유한 id 값
// 두 번째 매개변수가 r이 아니거나 읽을 파일이 없으면 에러가 난다.
fs.open("about.txt", "r", function (err, fileId) {
  if (err) throw err;

  var buf = new Buffer.alloc(6);
  // buf는 about.txt에 적힌 6개의 자음과 모음...

  // 콜백의 세번 째 exBuffer는 buf의 값이 콜백으로 넘어가서 확인 가능
  fs.read(fileId, buf, 0, buf.length, null, (error, length, exBuffer) => {
    if (error) {
      console.log(error);
    } else {
      console.log(buf.toString("utf-8", 0, length));
    }
  });
});

```

### 백준 문제풀이 
**한줄입력**
``javascript
let fs = require("fs");

// fs.readFileSync("/dev/stdin") => object
// fs.readFileSync("/dev/stdin").toString() => string
// fs.readFileSync("/dev/stdin").toString().split => input 배열에 저장
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b);
```


