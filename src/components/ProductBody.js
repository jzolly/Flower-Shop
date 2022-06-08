const ProductBody = ({name, price, tags}) => {
    return (
        <div className="product-body">
            <div className="p-body-top">
            <p className="name"><strong>{name}</strong></p>
            <p className="price"><strong>${price}</strong></p>
            </div>
            <p className="tags">{tags.join(' ')}</p>

        </div>
    );
}

export default ProductBody;