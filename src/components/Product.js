const Product = (props) => {
    return (
        <div className="flowers">
            <img className="productImg" src={props.data.image} ></img>
            <h3 className="props.data.name">{props.data.name}</h3>
            <div className="price">
                <p className="props.data.price">{props.data.price}</p>
            </div>
            <div className="props.data.tags">
                <p className="props.data.tags[0]"></p> 
                <p className="props.data.tags[1]"></p> 
                <p className="props.data.tags[2]"></p> 
                <p className="props.data.tags[3]"></p> 
            </div>
            
        </div>
    );
}

export default Product;