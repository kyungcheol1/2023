# 비동기 통신 (callback || promise || async/await)

## Database

## CRUD

## xmlhttprequest -> fetch

## fetch --> axios

## back-end

crud

/board/list
get /commnets

/board/write
post /comments

get /board/view
get /comments/:id

POST /board/modify
PUT /comments/:id

POST /board/delete
DELETE /comments/:id

comment directory를 파서 comment 안에 다 넣어보기
controllers
servces
repository

## postman

HTTP 요청을 해주는 친구

```html
<form action="/" method="post">
    <input type="text" name="userid" />
    <input type="text" name="userpw" />
    <button type="submit">Submit</button>
</form>
```

try catch 오류가 있어도 렌더는 되나 ?

### DB

create database ""
use ""

create table Comment(
`id` INT(11) PRIMARY KEY AUTO_INCREMENT,
`userid` VARCHAR(30) NOT NULL,
`content` TEXT NOT NULL,
`register` DATETIME NOT NULL DEFAULT now()
);

`id`
`userid`
`content`
`register`

async await 비동기적 코드를 동기적으로 사용하기 위해서 만들어진 것.

