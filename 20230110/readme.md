back end 나누기

orm
table > object

sql 많이 사용
프로그래머스 에서 연습

TDD

get
get /comment/:id
post /comments
put /comments/:id
delete/comments/:id

## ORM 설정 > SQL 구문을 사용하지 않을수도 있다.

```sql
create table User(
    id int(11) primary key auto_increment,
    userid varchar(30) not null,
)
```

```js
class User {
    constructor() {
        this.id;
        this.userid;
    }
}

User.find(); //select * from
```

table은 class와 같다. 는 개념으로 만든것이 ORM
개발하는데 시간은 줄어들 수 있다. 하지만 계산 시간이 줄어드는 것은 아니다.
sql 구문에 join을 해결하는데 문제가 있다.

N+1 의 문제 해결 방안.

프로그램 개념 = ORM 을 구현해주는 프로그램이 많다
sequelize typeORM

sequelize를 설치하고 사용하려면 기본적으로 mysql2가 설치되어 있어야한다.

ORM > sequelize 구현 한 것
model을 생성해서 객체 만들고 Table 생성까지 완료한것

controller `postSignup`
service `signup`
repository `addUser`

