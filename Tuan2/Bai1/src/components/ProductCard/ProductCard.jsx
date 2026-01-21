import "./ProductCard.css";
import ronaldoImg from "../../assets/ronaldo.jpg";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src={ronaldoImg}
        alt="Product"
        className="product-image"
      />

      <h3 className="product-name">Áo thun nam</h3>
      <p className="product-price">199.000đ</p>

      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProductCard;
