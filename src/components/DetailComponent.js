import {useParams, useLocation} from "react-router-dom";
import styled from "styled-components";
import {Nav} from "react-bootstrap";
import {useState} from "react";

const DetailComponent = () => {
    const location = useLocation(); //파라미터 받을때 useLocation 써야 함
    const detail = location.state.item;
    const [tab, setTab] = useState(0);

    //const {id} = useParams(); useParams 쓸경우. props로 넘겨야 한다.
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={`https://codingapple1.github.io/shop/shoes${detail.id + 1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{detail.title}</h4>
                <p>{detail.content}</p>
                <p>{detail.price}원</p>
                <YellowBtn bg="orange" className="btn">장바구니</YellowBtn>
                <YellowBtn bg="blue" className="btn">저장</YellowBtn>
                <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabComponent tab={tab}/>
        </div>
    );
};

const TabComponent = (props) => {
  const tab1 = <div>내용1</div>;
  const tab2 = <div>내용2</div>;
  const tab3 = <div>내용3</div>;
  const arr = [tab1, tab2, tab3];
  return arr[props.tab];
};

const Box = styled.div`
  padding: 20px;
  color: gray;
`;

const YellowBtn = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`;

export default DetailComponent;