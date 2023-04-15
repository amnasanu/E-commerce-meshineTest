import React ,{useEffect} from 'react';
import Navbar from '../../Components/Header/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../Actions/productAction'
import { Link } from 'react-router-dom'
import './home.css'

function HomeScreen() {
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="products-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : products ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <Link to={`/product/${product.id}`} className="buy-now-button">
                Buy Now
              </Link>
            </div>
          ))          
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

