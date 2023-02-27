import {useParams, useLocation} from "react-router-dom";
import styled from "styled-components";

const DetailComponent = () => {
    const location = useLocation(); //파라미터 받을때 useLocation 써야 함
    const detail = location.state.item;

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
        </div>
    );
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