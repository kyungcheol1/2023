자바스크립트 만으로 요청을 보내고 응답을 받는것 > ajax
app.use(express.static("public"));

static >>
server.js 기준에서 public 폴더 안에 있는 모든 파일의 라우터를 만들어주겠다는 의미
라우터를 설정 했기 때문에 /js/index.js 라는 라우터가 만들어져있어서 요청을 하면 불러온다
브라우저가 읽는 모드가 변한다 요청 응답 2번 html 요청 > js 요청

DOM 파싱 >
네트워크 상에서는 모든 데이터를 줬지만 브라우저 상에서는 아직 텍스트 파일을 읽고 있는 상태

url 을 바꾸지 않고 요청을 때린다

front server port

back server port

CORS 악랄한새끼
인터넷이 되는 컴퓨터 = host
host 기준 다른 tcp를
port 까지 체크 하고 바꾼다.
google 에서 네이버에서 받아오려고 하면 처리가 안된다.
google > 요청을 naver에 했을 때 naver에서 구글이 허용 되 있으면 응답을 주고 허용된 사람이 아니면 false
**_ 네트워크 상에서는 원래 되는데
_** 브라우저가 막은 거

header 내용만 올바르게 입력하면 된다
CORS가 없다면 다른 사이트의 DB를 공짜로 사용해서 입력하게 될 수 있다. > 이걸 막아놓기 위해서 브라우저가 기본적으로 가지고 있는것

CORS
