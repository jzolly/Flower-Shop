const Product = (props) => {
    return (
        <div className="flowers">
            <img className="productImg" src={props.data.image} ></img>
            <h3 className="props.data.name">{props.data.name}</h3>
            <div className="price">
                <p className="props.data.price">{props.data.price}</p>
            </div>
            <div className="props.data.tags">
                <p></p> 
            </div>
            
        </div>
    );
}