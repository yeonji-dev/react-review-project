import {useParams, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {addItem} from "../store";
import {useDispatch} from "react-redux";
import _ from "lodash";

const DetailComponent = () => {
    const location = useLocation(); //파라미터 받을때 useLocation 써야 함
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const detail = location.state.item;
    const recentViewList = JSON.parse(localStorage.getItem('recentView'))
        .filter((item) => item.id !== detail.id);



    // const moveDetail = () => {
    //     navigate("/detail/"+ Number(props.item.id + 1), {state: {item: props.item}}); //useNavigate 쓸때 데이터 넘겨주기. 두번째 인자의 속성 이름은 반드시 state로 해야 함
    // };
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
                <YellowBtn bg="orange" className="btn" onClick={() => {dispatch(addItem(detail))}}>장바구니</YellowBtn>
                <YellowBtn bg="blue" className="btn">저장</YellowBtn>
                <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
            <div className="mt-5">
                <p>최근 본 아이템</p>
                {recentViewList && recentViewList.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <img width="80%" src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}/>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                    </div>
                ))}
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
    margin: 10px;
`;

export default DetailComponent;