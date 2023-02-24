import ItemComponents from "./ItemComponents";
import data from "../data.js";
import {useState} from "react";
import {Outlet} from "react-router-dom";

const ListComponent = () => {
    const [item, setItem] = useState(data);
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
            <Outlet></Outlet>
        </>
    );
};

export default ListComponent;