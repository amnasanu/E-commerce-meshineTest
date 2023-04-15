import React, { useState , useEffect} from "react";
import { listProductDetails } from '../../Actions/productAction'
import { useParams , useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./productdetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  let navigate = useNavigate();

  const match = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(listProductDetails(match.id))
  },[dispatch, match])


  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  const handleAddToCart = () => {
    navigate(`/cart/${match.id}?qty=${quantity}`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-status">
          Status: {product.status ? "In Stock" : "Out of Stock"}
        </p>
        <div className="product-quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
