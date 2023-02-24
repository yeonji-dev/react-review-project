import './App.css';

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageException from "./components/common/PageException";
import ListComponent from "./components/ListComponent";
import NavbarComponent from "./components/common/NavbarComponent";
import DetailComponent from "./components/DetailComponent";

function App() {
  return (
      <>
        <div className="App">
            <NavbarComponent/>
            <Routes>
                <Route path={"/"} element={<ListComponent/>}>
                    {/*<Route path={"/list"} element={<ListComponent/>}/>*/}
                    <Route path={"detail/:id"} element={<DetailComponent/>}/>
                    <Route path={"about"} element={<div>어바웃페이지</div>}/>
                </Route>
                <Route path="*" element={<PageException exceptionText={"Page Not Found"} />}/>
            </Routes>
        </div>
      </>
  );
}

export default App;
