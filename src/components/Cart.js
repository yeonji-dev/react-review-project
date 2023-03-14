import {Table} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState, memo, useMemo} from "react";
import _ from "lodash";

const Cart = () => {
    const cartList = useSelector((state) => state.cartItem);
    const [list, setList] = useState([]);
    const [cnt, setCnt] = useState({});
    const [test, setTest] = useState(0);
    const calculateResult = useMemo(() => {return calculateFunction()});

    useEffect(() => {
        setList(_.uniq(cartList));
        const countBy = _.countBy(cartList, (i) => {
            return i.id;
        });
        setCnt(countBy);
    },[cartList]);

    const getCount = (id) => {
        return cnt[id];
    }

    return (
        list.length === 0
        ? <h4>장바구니 비어있음</h4>
        :
        <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>상품설명</th>
                    <th>상품가격</th>
                    <th>수량</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.price}</td>
                    <td>{getCount(item.id)}</td>
                </tr>
                ))}
                </tbody>
            </Table>
            <button onClick={() => setTest(test + 1)}>테스트 {test}</button>
            <div>{calculateResult}</div>
            <Child/>
        </div>
    );
};

const Child = memo(() => {
    console.log('rerendering');
    return (<div>자식임</div>);
});

const calculateFunction = () => {
    return 1; //대충 반복문 10억번 돌린 결과
};

export default Cart;