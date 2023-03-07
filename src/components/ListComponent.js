import ItemComponents from "./ItemComponents";
import data from "../data.js";
import {useEffect, useState} from "react";
import axios from "axios";

const ListComponent = () => {
    //const rowData = data;
    const [item, setItem] = useState(data);
    useEffect(() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((res) => {
                const axiosData = res.data;
                setItem([...item, ...axiosData]);
            }).catch((e) => {
                console.log(e.getMessage);
        });
        return(() => {
            setItem([]);
        })
    },[]);
    return (
        <>
            <div className="main-bg" style={{backgroundImage: 'url('+process.env.PUBLIC_URL + '/images/Westerlund2.png' + ')'}}></div>
            <div className="container">
                <div className="row">
                    {item && item.map((item) => (
                        <ItemComponents item={item}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListComponent;