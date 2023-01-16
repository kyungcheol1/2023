백엔드 서버를 만들 때

-   기획 // 무엇을 만들지 먼저 기획
-   데이터베이스 테이블 설계 (데이터베이스 설계가 먼저 되어야 함)
-   api (라우터 세팅)

## Sequelize 세팅

1. models 디렉토리 생성

-   DB Connection 관련된 파일(index.js)
-   model에 대한 파일들 ?
    -   model ? Table 안에 있는 field 내용을 객체로 표현한 것들.
    -   데이터가 많이 뿌려진 1:N 관계에선 테이블이 좋다 객체는 별로

2. Sequelize 손세팅 하는 사람이 많이 없다

-   sequelize init =
    cli

    소문자 seqeulize 만 있어도 실행이 가능 ?

## create 결과물

Comment {
dataValues: {
id: 1,
userid: 'Web7722',
content: 'hello hello',
updatedAt: 2023-01-11T03:28:32.465Z,
createdAt: 2023-01-11T03:28:32.465Z
},
\_previousDataValues: {
userid: 'Web7722',
content: 'hello hello',
id: 1,
createdAt: 2023-01-11T03:28:32.465Z,
updatedAt: 2023-01-11T03:28:32.465Z
},
uniqno: 1,
\_changed: Set(0) {},
\_options: {
isNewRecord: true,
\_schema: null,
\_schemaDelimiter: '',
attributes: undefined,
include: undefined,
raw: undefined,
silent: undefined
},
isNewRecord: false
}

## ALL 결과

[
Comment {
dataValues: {
id: 1,
userid: 'Web7722',
content: 'hello hello',
createdAt: 2023-01-11T03:34:19.000Z,
updatedAt: 2023-01-11T03:34:19.000Z
},
\_previousDataValues: {
id: 1,
userid: 'Web7722',
content: 'hello hello',
createdAt: 2023-01-11T03:34:19.000Z,
updatedAt: 2023-01-11T03:34:19.000Z
},
uniqno: 1,
\_changed: Set(0) {},
\_options: {
isNewRecord: false,
\_schema: null,
\_schemaDelimiter: '',
raw: true,
attributes: [Array]
},
isNewRecord: false
}
]all

## One 결과

Comment {
dataValues: {
id: 1,
userid: 'Web7722',
content: 'hello hello',
createdAt: 2023-01-11T03:35:57.000Z,
updatedAt: 2023-01-11T03:35:57.000Z
},
\_previousDataValues: {
id: 1,
userid: 'Web7722',
content: 'hello hello',
createdAt: 2023-01-11T03:35:57.000Z,
updatedAt: 2023-01-11T03:35:57.000Z
},
uniqno: 1,
\_changed: Set(0) {},
\_options: {
isNewRecord: false,
\_schema: null,
\_schemaDelimiter: '',
raw: true,
attributes: [ 'id', 'userid', 'content', 'createdAt', 'updatedAt' ]
},
isNewRecord: false
} One
