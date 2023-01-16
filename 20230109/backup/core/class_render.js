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
//         console.log(this.다리); // 여기것은 찍힌다.
//     }
//     밥먹기() {}
//     잠자기() {} //오버라이딩 오버로딩 ?
// } // 안에 모든 코드를 없애도 실행은 된다.

// const a = new 참새();
// console.dir(a); // 코드 생략 내부적으로 super를 실행을 시켜주는것 인자값이 없으면 생략해줘도 무방, 인자값이 있으면 생략 x

// const a = new 참새();
// console.dir(a);
// a.밥먹기();

// class 비둘기 extends 새 {
//     constructor() {
//         super();
//     }
// }

// function 새(비행능력) {
//     this.날개갯수 = 2;
//     this.비행능력 = 비행능력;
//     this.다리 = 2;
// }

// function 참새() {}

// 참새.prototype = new 새();

// const a = new 참새();
// console.dir(a);

// console.log(a.날개갯수);

// class Component {
//     target; //앞으로 넣을 Element
//     state; // 데이터들

//     constructor(_target) {
//         this.target = _target;
//         this.setup();
//         this.render();
//         // 10 11 12 13 // 16 17 18 19 20
//         // -target
//         // -state
//         // +render
//         // +setState
//         // +template
//     }

//     setup() {} //자식 클래스에서 구현
//     template() {} // 자식 클래스에서 구현
//     render() {
//         this.target.innerHTML = this.template();
//     }
//     setState(newState) {
//         if (this.state === newState) return;
//         this.state = { ...this.state, ...newState };
//         this.render();
//     }
// }

class App extends Component {
    // constructor(target) {
    //     super(target);
    // } //생략이 가능하다 ..는데 모르겠다.

    setup() {
        this.state = {
            list: [
                { id: 1, userid: "web7722", content: "hello", register: "2023-01-09" },
                { id: 2, userid: "web7722", content: "hello", register: "2023-01-09" },
                { id: 3, userid: "web7722", content: "hello", register: "2023-01-09" },
            ],
            user: {
                userid: "web7722",
                username: "ingoo",
            },
        };
    }

    template() {
        const { list } = this.state;
        return `
            <form>input</form>
            <div id="comment-list">
                ${list
                    .map((comment) => {
                        return `<ul class="comment-row" data-index="${comment.id}">
                                <li class="comment-id">${comment.userid}</li>
                                <li class="comment-content">${comment.content}</li>
                                <li class="comment-date">${comment.register}</li>
                                </ul>`;
                    })
                    .join("")}
            <div>
            <button id="btn">버튼!</button>`;
    }
}
export default App;

//javascript prototype = 내가 찾는 속성값이 없을 떄 아래에 들어가서 다시 또 찾는다

