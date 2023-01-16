// class Person {
//     // 접근제이저 public , private > private 는 콘솔이 찍히지 않음 >>#
//     // private > person을 띄울 때는 안보이게 설정하고 , 연산등을 할 때는 쓰고 싶을 때 설정하는 것
//     #key = "qweqw";
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     // getName() {
//     //     const a = this.#key + this.name;
//     //     console.log(this.#key);
//     //     console.log(this);
//     //     return a;
//     // }
//     getName() {
//         return "hello";
//     }

//     static setDate(now) {
//         console.log(this);
//         return now;
//     } // 정적 메소드를 만들겠다 > static // prototype 에 들어가 있지 않다. 실행을 시킬 수 없다.
// }

//static > getAge 를 클래스 자체에다가 넣어주는것 >> ? Person.getAge() 로 실행이 됨 그럼 new로 만든 애는?

// getName 같은 경우에는 인스턴스를 만들 때 마다 계속 생성이 된다.
// age 같은 경우에는 인스턴스를 만들어도 class에 생성이 되기 때문에 계속 생성이 되진 않는다. 기본 설정 같은 걸 생성할 때 받는다. ex 날짜
// console.log(Person.setDate(Date.now()));

// const person = new Person("ingoo", 32);

// class Ingoo extends Person {
//     // constructor(_age) {
//     //     super("ingoo", _age);
//     // }
//     // static neme() {
//     //     console.log(super.getName());
//     // }
// }

// const ingoo = new Ingoo(32);
// console.dir(ingoo);
// person.getName();

// console.log(Buffer);

class Person {
    #key = "qweqw";
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    static getName() {
        console.log(this);
    }
    static setDate(now) {
        console.log(this);
        return now;
    }
}

class Ingoo extends Person {
    constructor() {
        super();
    }

    name() {
        console.log(super.getName());
    }
}

const ingoo = new Ingoo("cheol", "하");

const person = new Person("clll", 28);

