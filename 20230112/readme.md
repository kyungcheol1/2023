제약조건
mysql

-   기본키 (Primary key)
-   중복되지 않는 고유값
-   null 허용하지 않음
-   테이블당 하나의 기본키만 지정 가
-   고유키 (Unique)
-   중복되지 않는 고유값
-   null 허용
-   외래키 (Foreign key)
    DB field 는 짧게
    아래로는 길게

부모, 자식
자식테이블에게 필드 하나 추가 부모테이브르이 고유 식별자 > fk 를 추가해서 자식 테이블에 할당

도식화 > ERD 하나만 제대로 해도 일주일 넘게 걸린다.

매장 테이블과 메뉴 테이블 따
\*\* 제일 많음 1:n 1인 친구가 부모테이블, n 자식테이블
1:1
n:m

부모테이블 > 매장명
자식테이블 > 메뉴명

**SQL**
create table `user` (
userid VARCHAR(30) PRIMARY KEY,
userpw VARCHAR(64) NOT NULL,
username VARCHAR(20)
)

create table `board`(
id INT PRIMARY KEY AUTO_INCREMENT,
subject VARCHAR(100) NOT NULL,
content TEXT NOT NULL,
userid VARCHAR(30) NOT NULL,
register_date datetime default now(),
hit INT default 0
)

## 외래키 설정

11:20 ?
ALTER TABLE "Board" -- 자식 테이블
ADD CONSTRAINT fk_board_userid
FOREIGN KEY (userid) -- 자식 테이블에서 부모의 식별자를 담는 필드명 자식 테이블의 외래키
REFERENCES User(userid);
-- ON DELETE CASCADE -- 해당하는 전체 데이터가 삭제된다. 테이블을 만들 때 미리 설정을 해 두고 설정을 해야한다. 데이터가 ㄷㄹ어오면 복잡해진다
-- ON UPDATE

SELECT \* FROM information_schema.table_constraints
WHERE TABLE_SCHEMA = "prac"

ALTER TABLE `Board` DROP CONSTRAINT fk_board_userid;

**sequelize**

ALTER TABLE Board
ADD CONSTRAINT fk_board_userid
FOREIGN KEY (userid)
REFERENCES User(userid)
ON DELETE CASCADE;

CASCADE 같이 삭제시키기
RESTRICT 아예 실행이 안되게 > 관련된 키 값의 글이 있으면 삭제 x

크롤링 ?
db가 방대하면 좋다...

SELECT A.id,
A.subject,
A.content, FROM Board as A
JOIN User as B
ON A.userid = B.userid; // A와 B가 같은 애들끼리 쓰겠다.
테이블 보드를 A 로 쓰겠다

