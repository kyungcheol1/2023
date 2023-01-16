// import sum, { a } from "/js/request.js";

// console.log(sum(1, 2));
// console.log(a);
// console.log(axios);

import request from "/js/commentRequest.js";

(async () => {
    const response = await request.find();
    console.log(response);
})();

// request.get("/comments").then((data) => console.log(data));

class Template {
    constructor(templates) {
        //this = {}
        // this.num = num;
        // return this
        // return { name: "ingoo" }; // > return 값을 강제루 주면 바뀐다.
        // let obj = {};
        // for (const key in templates) {
        //     obj[templates[key]] = `#${templates[key]}`;
        // }
        // return obj;
        return this.create(templates);
    }
    create(templates) {
        let obj = {};
        for (const key in templates) {
            obj[templates[key]] = `#${templates[key]}`;
        }
        return obj;
    }

    // clone(selector) {
    //     const template = document.querySelector(selector);
    //     const clone = document.importNode(template.content, true);
    //     return clone;
    // }
}

function Template1(templates) {
    // this.clone = (selector) => {
    //     const template = document.querySelector(selector);
    //     const clone = document.importNode(template.content, true);
    //     return clone;
    // };
    this.create = (templates) => {
        let obj = {};
        for (const key in templates) {
            obj[templates[key]] = `#${templates[key]}`;
        }
        return obj;
    };

    return this.create(templates);
    //this={}
    // this.num = num;
    //return this
}
const templatesarr = ["commentRow", "content-basic", "content-update"];

const a = new Template(templatesarr);
const b = new Template1(templatesarr);
console.log(b);
console.log(a);
// const config = {
//     commentRow: "#commentRow",
//     // content-basic
//     // content-update
// };

