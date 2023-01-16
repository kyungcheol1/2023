class Component {
    target; //앞으로 넣을 Element undefined로 라도 넣어놓을 것들을 위에 올려 놓는다
    state; // 데이터들

    constructor(_target) {
        this.target = _target;
        this.setup(); // setup 실행
        this.render(); // render 실행
        this.setEvent(); // setEvent 실행
        // 10 11 12 13 // 16 17 18 19 20
        // -target
        // -state
        // +render
        // +setState
        // +template
    }

    setup() {} //자식 클래스에서 구현
    template() {} // 자식 클래스에서 구현
    mounted() {}
    async render() {
        this.target.innerHTML = await this.template();
        this.mounted(); // 생명주기
    }

    setEvent() {}

    addEvent(type, selector, callback) {
        const children = [...document.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this.target.addEventListener(type, (e) => {
            if (!isTarget(e.target)) return false;
            callback(e);
        });
        // const a = null || 10 || undefined; //10
        // const b = null && 10 && undefined; // null
        // const c = console.log("hello") || 10; // 10
        // console.log(a, b, c);

        //구우우우우우우우우우우우우우우우우우우혀녀ㅕ여여여여여여영여여여여여여녀녀년연연연연ㅇ녕녕
    }

    setState(newState) {
        if (this.state === newState) return;
        this.state = { ...this.state, ...newState };
        this.render();
    }
}

export default Component;

