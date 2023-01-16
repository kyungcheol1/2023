// function makeAdder(x) {
//     var y = 1;
//     return function rew(z) {
//         y = 100;
//         return x + y + z;
//     };
// }

// console.log(makeAdder(5)(2));
// var add10 = makeAdder(10);

class CommentController {
    constructor(list) {
        this.list = list;
    }

    getList(item) {
        console.log(this);
        // console.log(this.list);
        // console.log(item);
        // return this.list;
    }
}

let listt = 1;
let imte = 2;
const a = new CommentController(listt);
// console.log(a.getList(imte));
// let item = 2;

// const c = (item) => a.getList(item);
// console.log(c());
const b = a.getList;
b();
const c = (imte) => a.getList(imte);
console.log(c());

