import {Table} from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
    const storeState = useSelector((state) => state.user);
    console.log(storeState);
    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>안녕</td>
                <td>안녕</td>
                <td>안녕</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default Cart;