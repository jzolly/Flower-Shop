import ProductImage from "./ProductImage";
import ProductBody from "./ProductBody";

const Product = (props) => {
    return (
        <div className="product">
          <ProductImage image={props.image} name={props.name}/>
          <ProductBody name={props.name} price={props.price} tags={props.tags}/> 
        </div>
    );
}

export default Product;