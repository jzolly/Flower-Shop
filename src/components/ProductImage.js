const ProductImage = ({image, name}) => {
    return (
        <img
        className="flower-image"
        src={image}
        alt={name} 
        />
    );
}

export default ProductImage;