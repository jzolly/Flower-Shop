const ProductImage = (props) => {
    return (
        <img
        src={props.image}
        className="flower-image"
        alt={props.name} 
        />
    );
}

export default ProductImage;