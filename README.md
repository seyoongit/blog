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
지금은 포스트 읽기, 포스트 검색, 카테고리별로 검색기능 밖에 없다. 상단 네비게이션에 소셜로그인 버튼의 흔적이 남아있는데 그건 색깔 조합이 예뻐서 놔뒀다. <br>
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
하위 컴포넌트에서 쓰일 state와 action이 한두개만 있는게 아니라서 따로따로 하나씩 props를 통해 내려보내주면 코드가 너무 쓸데없이 커진다. <br>
<br>
따라서 '묶어서 보낸다' 라는 나름대로 고육지책을 쓰긴 했는데 그럼에도 너무.. 의존성 심하다고 해야하나? 하여튼 그랬다. 뭔가 수정할 일이 생기면 한 군데만 수정하면 끝나는게 아니라 이걸 흘려보내주는 모든 하위컴포넌트들 파일을 열어서 수정해야 했다. 뭔가 더 좋은 방법이 있을텐데 지금의 나로서는 이게 최선인듯 <br>
<br>
각 컴포넌트 디렉토리에는 디렉토리 이름과 같은 이름의 파일이 있는데 이것이 진짜 컴포넌트다. 여기서는 View 및 사용자의 상호작용에만 집중한다. <br>
<br>
근데 개인적인 생각으론, HOC로 나누든 뭘하든 어쨌든 비즈니스 로직이 컴포넌트 가까이 붙어있을수 밖에 없다는 점에서 Angular에 비해 리액트의 단점 보이긴 하는거 같다. <br>
<br>
이를테면 두개 이상의 컴포넌트에서 사용해야하는 데이터(예를들면 user정보)를 api로 가져와야 한다면 이걸 둘중 어느 컴포넌트에 붙어야할까? 두 컴포넌트 모두 이 로직을 붙일 근거가 그럴싸하다면? <br>
<br>
이렇게 애매한 경우엔 그냥 최상위 App 컴포넌트에 붙이면 될까? 개인적인 예상이지만 그렇게 하면 App컴포넌트 하나에만 잡다한 비즈니스 로직이 넘치게 될거같다. 여튼 이런 생각이 들었다.<br>
<br>

###### 리팩토링?

![refactoring](https://user-images.githubusercontent.com/47002080/52173664-0b6cc480-27cc-11e9-8bb6-e6dba5913e9a.jpg)


이 앱은 사실 원래 있던 프로젝트에서 상당히 쳐내고 리팩토링을 한 결과물이다. <br>
<br>
API를 통해 사이드메뉴의 카테고리 아이템을 가져오는 경우를 들어보자면, <br>
<br>
예전엔 fetch를 시작할때 CATEGORY_FETCH_START, 에러가 발생했을때 CATEGORY_FETCH_ERROR, API 요청을 통해 응답받고 데이터를 reducer에 병합하는 CATEGORY_FETCH_SUCCESS 세가지가 있었다.<br>
그리고 action과 reducer 디렉토리에 각각 이를 처리하는 함수가 하나씩 들어있다. <br>
<br>
그런데 사이드메뉴를 보다시피, 카테고리 말고 '최근포스트' 도 가져올 필요가 있다. 게다가 예전엔 카테고리말고 태그 항목도 있었다. <br>
그래서 비동기 요청을 보내서 가져와야 하는 항목은 총 3개인데, 그말은 즉 필요한 action의 종류는 여기에 3곱해서 9개. 그리고 action과 reducer 디렉토리에 이를 각각 처리하는 함수가 있어야 하니 함수 6개 추가.<br>
<br>
즉, 사이드바 아이템 3종류 가져오는데 이만한 코드량이 발생했다. <br>
<br>
현재는 category, recentTitles, tag의 명칭을 menu로 통합해서 MENU_FETCH_SUCCESS 하나밖에 없다. 그리고 action과 reducer 디렉토리에 각각 이를 처리하는 함수가 하나씩 있다. <br>
<br>
이것 말고도 하나 더 있는데 글을 쓰다보니 너무 길어져서 생략. <br>
<br>
솔직히 처음 작성한뒤로 다시 꺼내서 살펴볼때는 코드에 손댈 엄두도 안났고, 뷰랑 앵귤러 등등 할일도 많고 리액트는 이미 한번 해본건데 여기에 시간뺏기고 있는것이 너무 싫었지만, 쓸데없는 코드를 쳐 내다 보니 사람들이 왜 리팩토링의 중요성을 강조하는지 어렴풋하게 느낄수 있었고 좋은 경험이 됬다. <br> 
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

###### Firebase
데이터베이스 및 호스팅을 제공해주는 플랫폼
[Firebase](https://firebase.google.com/) <br>
<br>
[그냥 알파벳 옮기는 사이트](http://github.com/seyoongit/jma) 를 배포할때 파이어베이스는 이미 사용해봐서 새로운걸 해볼겸 AWS S3 hosting 랑 heroku를 시도해봤는데 둘다 도메인을 깔끔하게 연결할 방도가 없어서 헛수고만 잔뜩하고 결국 파이어베이스로 돌아오게 되었다. <br>
<br>
개인적으로 정말 고마운 서비스고 사용성 면에서 극찬을 하지 않을수가 없다. <br>
만약 내가 결정권이 있다면, 파이어베이스가 다른 플랫폼들과 비교해봤을때 비용 또는 성능상에 치명적인 문제가 있지 않는한 거의 무조건 이걸 채택할듯 싶다. <br>


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
사실 다 끝났으니까 지금와서야 하는 말이지만 redux를 도입할때 action과 reducer를 한곳에 모아서 작성하는 ducks 패턴을 사용하지 않은걸 매우 후회한다. 수정할것이 생기면 여러군데를 같이 수정해줘야 해서 상당히 힘들었다. <br>
<br>
여튼 이렇게 react, vue, angular 하나씩 사용해보기 계획중 하나인 react 프로젝트가 끝이 났다.
<br>
<br>

![](https://user-images.githubusercontent.com/47002080/52105779-6f0fba00-2633-11e9-97fe-ada9fbd0d929.gif)
