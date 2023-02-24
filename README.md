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