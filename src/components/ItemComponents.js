import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { addItem } from "../store.js";

const ItemComponents = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const moveDetail = () => {
        navigate("/detail/"+ Number(props.item.id + 1), {state: {item: props.item}}); //useNavigate 쓸때 데이터 넘겨주기. 두번째 인자의 속성 이름은 반드시 state로 해야 함
    };

    return (
        <div className="col-md-4" onClick={moveDetail}>
            <img width="80%" src={`https://codingapple1.github.io/shop/shoes${props.item.id + 1}.jpg`}/>
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <button type="button" onClick={() => {dispatch(addItem(props.item))}}>담기</button>
        </div>
    )
};
export default ItemComponents;