const ItemComponents = (props) => {
    return (
        <div className="col-md-4">
            <img width="80%" src={`https://codingapple1.github.io/shop/shoes${props.item.id + 1}.jpg`}/>
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
        </div>
    )
};
export default ItemComponents;