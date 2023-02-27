## 목적
- React.js 복습, 초기 셋팅 학습 
- 2022.03 ~ 2022.06 참여했던 React 프로젝트 코드 로직 기록

## 초기 셋팅 정리
### bootstrap 적용하기
  - https://react-bootstrap.netlify.app/getting-started/introduction/
  - `npm install react-bootstrap bootstrap`
  - App.js에서 import
  - 필요한 컴포넌트 사이트에서 찾아서 넣기

### react-router
  - `npm install react-router-dom`
  - index.js 파일
    - `import { BrowserRouter } from 'react-router-dom';`
    - `<App/>` 태그 바깥에 `<BrowserRouter></BrowserRouter>` 감싸주기
  - App.js
    - `import { Routes, Route } from 'react-router-dom';`
    - `<Routes>` 태그 안 `<Route path="경로" element={<컴포넌트/>}/>`와 같이 등록
  - 페이지 이동 버튼
    - `import { Link } from 'react-router-dom';`
    - `<Link to={"경로"}>링크</Link>`와 같이 등록
  - nested routes
    - `<Route>`태그 안에 `<Route>`태그를 넣는다.
    - 부모 Route 태그의 element가 공통으로 사용됨
    - 자식 Route 태그의 element는 부모 컴포넌트의 Outlet 태그 위치에 삽입된다. 
  - useNavigate
    - Link 태그와 같은 기능

### styled-components
- `npm install styled-components`
- 사용하고 싶은 컴포넌트 맨 위에 import
- 컴포넌트 만들때 스타일 미리 주입해서 만들수 있다.
- html 페이지의 style 태그에 넣어줌
- 장점
  - 다른 페이지에 영향주지 않음
  - 페이지 로딩시간 단축
- 단점
  - css 파일은 오염됨
  - 일반 css 파일에 모듈화 기능 적용해서 해결
    - 컴포넌트명.module.css로 작명
    - 컴포넌트명.js 파일에서 import 해서 쓰면 그 컴포넌트에만 스타일 적용됨
