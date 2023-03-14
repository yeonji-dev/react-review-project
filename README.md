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

### useEffect
- useEffect 안에 적은 코드는 html 렌더링 이후 동작
- html 렌더링 이외 기능들(side effect) 넣으면 됨
- 서버에서 데이터 가져오는 작업, 오래걸리는 반복연산, 타이머 달기 등 할때 많이 씀
- 조금이라도 html 렌더링 빠르게 하기 위해서 씀
```jsx
useEffect(() => { 실행할코드 },[]); // 컴포넌트 mount시 한번만 실행
useEffect(()=>{ 실행할코드 }, [state]); //state 변할때 실행
useEffect(()=>{ 
  //실행순서 2
  return ()=>{
    //실행순서 1 : socket 연결요청제거, ajax요청 중단 등... unmount시에도 1회 실행
  }//clean up function 
}, [count]);
```
### Redux
- `npm install @reduxjs/toolkit react-redux` : react, react-dom 버전이 18.1.x 이상이면 사용 가능
- store.js 파일 생성
- index.js에서 `<App/>`컴포넌트 `<Provider store={store}>`로 감싸기 -> App의 모든 자식컴포넌트들은 store.js 에 있는 state 마응대로 가져다 쓸 수 있다.
```jsx
//store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";
//state 생성
const user = createSlice({
    name: 'user',
    initialState: 'Liliana'
})
//state 등록
export default configureStore({
    reducer:{
        user: user.reducer
    }
})

//state 쓰기
// 쓰고싶은 자식 컴포넌트
import { useSelector } from "react-redux";
const Cart = () => {
    const storeState = useSelector((state) => state.user);
    console.log(storeState);
    return (
        ...
    );
};

```

### react-query
- 실시간 데이터를 계속 가져와야 하는 사이트에서 사용하면 유용하다.
- `npm install @tanstack/react-query`
- 장점
  - ajax 성공/실패/로딩중 파악 쉬움
  - 주기적으로 자동으로 ajax 재요청 : But 웹소켓, server-sent event가 더 가벼움.
  - 실패시 재시도 자동으로 해줌
  - ajax로 가져온 결과 state 공유 필요 없음
  - ajax 결과 캐싱 가능(5분)
- RTK Query 라이브러리도 비슷한 기능 제공