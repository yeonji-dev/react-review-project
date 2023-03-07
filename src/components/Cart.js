import {Table} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {changeUser, changeNum} from "../store.js";

const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>
                    <button onClick={() => {
                            dispatch(changeNum(10));
                        }}>숫자 바꾸기
                    </button>
                </th>
                <th>
                    <button onClick={() => {
                        dispatch(changeUser('연지'));
                    }}>이름 바꾸기</button>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>안녕</td>
                <td>{state.user.number}</td>
                <td>{state.user.user}</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default Cart;