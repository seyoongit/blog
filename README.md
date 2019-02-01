# 리액트로 만든 블로그

처음으로 진행해본 웹 프로젝트<br>
<br>

[리액트로 만든 블로그](http://yoon.se)

<br>
블로그답게 포스트를 보여주며 좌측 상단의 검색기능으로 포스트를 검색할수도 있고 우측의 사이드메뉴를 열어서 카테고리별로 묶어서 볼수도 있다.<br>
<br>
서버는 따로 가동하지 않고 AWS의 람다를 통해 서빙한다. 포스트 검색, 포스트 가져오기 등의 API요청 역시 AWS의 API gate + 람다 조합을 사용한다.<br>
<br>
예전에는 여기에 소셜댓글, 소셜로그인, 어드민 계정으로 로그인하면 포스트 수정삭제 가능하기 등등 여러가지가 붙어있었고 index.html에는 SEO관련 마크업도 덕지덕지 붙어있었는데 리팩토링 과정을 거치면서 다 떼어냈다. <br>
<br>
지금은 포스트 읽기, 포스트 검색, 카테고리별로 검색기능 밖에 없다. 상단 네비게이션에 소셜로그인 버튼의 흔적이 남아있는데 그건 색깔 조합이 이쁘기도 하고 뭔가 있어보이기 때문에 놔뒀다. <br>
<br>
<br>

### 구조

###### at a glance

![blog_structure]()

앱을 크게 나누면 그림과 같이 7개의 컴포넌트로 나뉜다. <br
주황색 자리에 PostContent 와 Masonry가 겹치기 때문에 6개가 아니라 7개다. 라우팅에 따라 둘중 하나가 렌더링된다.<br>
그리고 그림처럼 나뉘어진 7개의 컴포넌트는 모두 리액트에서 소위 말하는 HOC(Higher Order Component) 이다. <br>
<br>
HOC는 오직 뷰를 보여주는것에만 집중하는 Presentational 컴포넌트의 상위에 존재하며 주로 비즈니스 로직을 담당하는 컴포넌트이다. <br>
Angular에서 비즈니스 로직은 전부 서비스로 분리하는 이유와 같다. <br>
근데 개인적으로는 HOC로 나누든 뭘하든 어쨌든 비즈니스 로직이 컴포넌트에 가까이 붙어있을수 밖에 없다는 점에서 한계가 보이긴 하다. <br>
이를테면 두개 이상의 컴포넌트에서 사용해야하는 데이터(ex. user정보)를 api로 가져와야 한다면 이걸 둘중 어느 컴포넌트에 붙어야할까? 두 컴포넌트 모두 이 로직을 붙일 근거가 그럴싸하다면? 이런 경우 애매하면 그냥 최상위 App 컴포넌트에 붙이면 될까? 개인적인 예상이지만 한다면 App컴포넌트 하나에만 잡다한 비즈니스 로직이 넘치게 될거같다. 여튼 이런 생각이 들었다.<br>
<br>
내경우는 HOC를 아래 그림과 같이 나눴다.

![blog_HOC]()










### 스택

###### react
클라이언트 프레임워크
[react](https://reactjs.org/)

###### react-redux
상태관리 라이브러리
[redux](https://www.npmjs.com/package/redux)

###### react-router
라우팅 라이브러리
[react-router](https://www.npmjs.com/package/react-router)

###### semantic-ui-react
UI 컴포넌트 라이브러리
[semantic-ui-react](https://react.semantic-ui.com/)

###### axios
HTTP 요청 라이브러리
[axios](https://www.npmjs.com/package/axios)

<br>
<br>

###
