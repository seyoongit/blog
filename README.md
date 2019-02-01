# 리액트로 만든 블로그

처음으로 진행해본 웹 프로젝트<br>
<br>

[리액트로 만든 블로그](http://yoon.se)

<br>
블로그답게 포스트를 보여주며 좌측 상단의 검색기능으로 포스트를 검색할수도 있고 우측의 사이드메뉴를 열어서 카테고리별로 묶어서 볼수도 있다.<br>
<br>
서버는 따로 가동하지 않고 AWS의 람다를 통해 서빙한다. 포스트 검색, 포스트 가져오기 등의 API요청 역시 AWS의 API gate + 람다 조합을 사용한다. 데이터베이스는 Firebase의 firestore를 사용한다.<br>
<br>
예전에는 여기에 소셜댓글, 소셜로그인, 어드민 계정으로 로그인하면 포스트 수정삭제 가능하기 등등 여러가지가 붙어있었고 index.html에는 SEO관련 마크업도 덕지덕지 붙어있었는데 리팩토링 과정을 거치면서 다 떼어냈다. <br>
<br>
지금은 포스트 읽기, 포스트 검색, 카테고리별로 검색기능 밖에 없다. 상단 네비게이션에 소셜로그인 버튼의 흔적이 남아있는데 그건 색깔 조합이 이쁘기도 하고 뭔가 있어보이기 때문에 놔뒀다. <br>
<br>
<br>
<br>

### 구조

###### at a glance

![blog_structure](https://user-images.githubusercontent.com/47002080/52105737-366fe080-2633-11e9-933d-d03fd38246d2.png)

앱을 크게 나누면 그림과 같이 6개의 컴포넌트로 나뉜다. <br>
주황색 자리에 PostContent 와 Masonry가 겹치기 때문에 5개가 아니라 6개다. 라우팅에 따라 둘중 하나가 렌더링된다.<br>
<br>
나뉘어진 6개의 컴포넌트는 모두 각각 리액트에서 소위 말하는 HOC(Higher Order Component) 이다. <br>
<br>
<br>

###### HOC

내 경우엔 HOC를 아래와 같은 방식으로 나눴다. 초록색 P는 Presentational 컴포넌트를 의미한다. <br>
<br>

![blog_hoc](https://user-images.githubusercontent.com/47002080/52105759-4e476480-2633-11e9-8f87-815880a1ba44.png)

HOC : 오직 뷰를 보여주는것에만 집중하는 Presentational 컴포넌트의 상위에 존재하며 주로 비즈니스 로직을 담당하는 컴포넌트이다.  <br>
Angular에서 서비스가 가지는 역할과 비슷하다. <br>
<br>
각 컴포넌트 디렉토리의 index.js 가 이 HOC의 역할을 한다. 여기에 리덕스의 연결, API 초기호출, 하위 컴포넌트에서 쓰일 리덕스 action들과 리덕스 state들을 하나로 묶어서 보내주는 코드가 들어있다. <br>
<br>
하위 컴포넌트에서 쓰일 state와 action이 하나만 있는게 아니라서 '묶어서 보낸다' 라는 나름대로 고육지책을 쓰긴 했는데 그럼에도 너무.. 의존성 심하다고 해야하나? 하여튼 그랬다. 뭔가 수정할 일이 생기면 한 군데만 수정하는게 아니라 이걸 흘려보내주는 모든 하위컴포넌트들 파일을 열어서 수정해야 했다. 뭔가 더 좋은 방법이 있을텐데 지금의 나로서는 이게 최선인듯. <br>
<br>
각 컴포넌트 디렉토리에는 디렉토리 이름과 같은 이름의 파일이 있는데 이것이 진짜 컴포넌트다. 여기서는 View 및 사용자의 상호작용에만 집중한다. <br>
<br>
근데 개인적인 생각으론, HOC로 나누든 뭘하든 어쨌든 비즈니스 로직이 컴포넌트 가까이 붙어있을수 밖에 없다는 점에서 Angular에 비해 리액트의 단점 보이긴 하는거 같다. <br>
<br>
이를테면 두개 이상의 컴포넌트에서 사용해야하는 데이터(예를들면 user정보)를 api로 가져와야 한다면 이걸 둘중 어느 컴포넌트에 붙어야할까? 두 컴포넌트 모두 이 로직을 붙일 근거가 그럴싸하다면? <br>
<br>
이렇게 애매한 경우엔 그냥 최상위 App 컴포넌트에 붙이면 될까? 개인적인 예상이지만 그렇게 하면 App컴포넌트 하나에만 잡다한 비즈니스 로직이 넘치게 될거같다. 여튼 이런 생각이 들었다.<br>
<br>
<br>

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

### 마치며

리액트는 내가 프로그래밍을 배우고 처음으로 해본 프로젝트에 쓰인지라 개인적으로 프론트엔드 3대장 중에서 가장 좋아하는 프레임워크다. <br>
<br>
그렇지만 최근에 간단하게나마 Vue, Angular를 접해보고 나니 이것도 일장일단이 있다는걸 느꼈다. <br>
<br>
대표적인게 라우팅 관련 지원이다. 처음 공부하던 당시에도 그렇고 지금도 리액트에서는 '공식적인' 라우터 라이브러리는 없는걸로 알고있다. redux 까지는 괜찮았는데 react-router는 제대로된 문서도 없고(지금은 어떤지 모르겠다) 배우느라 힘들었다. redux도 react-router도 사실상의 표준이지만 어쨌든 공식적으로 페이스북 차원에서 밀어주는 라이브러리가 없다는건 단점이 될수 있을듯 하다.  <br>
<br>
그에 비해 디버깅 환경은 리액트가 가장 좋았다. Vue와 Angular에 비하면 리액트의 개발서버는 에러를 매우 친절하게 알려주는 편이다. 이런점은 여러모로 편했다. <br>
<br>
최근 16.5버전인가에서 hook 이라는 기능이 도입된걸로 아는데 이건 나중에 정식출시되고 안정화가 되면 알아봐야겠다. 얼핏본 바로는 redux를 대체하는 기능인듯 한데, 이게 도입되면 앞으로 리액트 프로젝트의 의존성이 많이 줄어들듯 싶다.  <br>
<br>
<br>

![](https://user-images.githubusercontent.com/47002080/52105779-6f0fba00-2633-11e9-97fe-ada9fbd0d929.gif)
