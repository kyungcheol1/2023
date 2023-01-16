# Front-end

`Javascript` 문법이 잘 되어 있어야지만 가능
코드상의 흐름은 존재

월요일 1단계

수,목 2단계

월요일 3단계

# Back-end

## 추상화

> 지하철 노선도
> 함수를 만듬.

const setState = ()=>{}
const render = ()=>{}

# 상속

```js
// class 새 {
//     constructor(비행능력) {
//         this.날개갯수 = 2;
//         this.비행능력 = true;
//         this.다리 = 2;
//         this.잠자기();
//     }

//     밥먹기() {
//         this.잠자기();
//     }
//     잠자기() {
//         console.log("게으름");
//     }
// }

// class 참새 extends 새 {
//     constructor() {
//         // console.log(this.날개갯수); // 여기것은 안생긴다
//         super(false); // 새라는 클래스를 실행시키는 것
//         // console.log(this.다리); // 여기것은 찍힌다.
//     }
//     // 밥먹기() {}

//     // 잠자기() {} //오버라이딩 오버로딩 ?
// }

// const a = new 참새();
// console.dir(a);
// a.밥먹기();

// class 비둘기 extends 새 {
//     constructor() {
//         super();
//     }
// }

function 새() {
    this.날개갯수 = 2;
    this.비행능력 = 비행능력;
    this.다리 = 2;
}

function 참새() {}

console.log(참새.prototype);
```

