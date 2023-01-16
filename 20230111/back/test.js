module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
        static createdb() {
            return this.init(
                {
                    userid: {
                        type: Sequelize.STRING(20),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.STRING(20),
                        allowNull: false,
                    },
                },
                {
                    sequelize: sequelize,
                    freezeTableName: true,
                }
            );
        }
    }
    return Comment.createdb();
};
// const obj = {
//     name: "ingoo",
//     getName() {
//         console.log(obj.name);
//     },
// };

// const obj2 = obj;
// obj2.getName(); //ingoo

// function inner() {
//     console.log("3", this);
//     function outer() {
//         console.log("2", this);
//         function hello() {
//             console.log("4", this);
//         }
//         hello();
//     }
//     outer();
//     return function () {
//         console.log("1", this);
//     };
// }
// inner();

// inner.call({ name: "ingoo" });

// function inner() {
//     console.log("3", this);
//     const outer = () => {
//         console.log(2, this);
//         const hello = () => {
//             console.log(4, this);
//         };
//         hello();
//     };
//     outer();
//     return () => {
//         console.log(1, this);
//     };
// }

// const fn = inner.call({ name: "ingoo" });
// fn();

// // function inner() {
// //     console.log(this);
// //     function outer() {
// //         console.log(1);
// //         function last() {
// //             console.log("33");
// //         }
// //         last();
// //     }
// //     outer();
// //     return function () {
// //         console.log("1", this);
// //     };
// // }
// // inner();
// // inner.call({ name: "ingoo" });

// function inner() {
//     console.log("3", this);
//     const outer = () => {
//         console.log(2, this);
//         const hello = () => {
//             console.log(4, this);
//         };
//         hello();
//     };
//     outer();
//     return () => {
//         console.log(1, this);
//     };
// }

// const fn = inner.call({ name: "ingoo" });
// fn();

// () => console.log(123)();

