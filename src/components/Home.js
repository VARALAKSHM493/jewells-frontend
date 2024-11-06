import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch products on component mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/all');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = async (productId, name, description, price, image) => {
    try {
      const response = await axios.post('http://localhost:5000/cart/addtocart', [
        { productId, quantity: 1, name, description, price, image }
      ]);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Add product to wishlist
  const addToWishlist = async (product) => {
    try {
      // Check if product is already in the wishlist
      if (wishlist.includes(product._id)) {
        setWishlistMessage('Product is already in your wishlist!');
        return;
      }

      // Send all product details to the backend
      const { _id, name, description, price, image } = product;
      const response = await axios.post('http://localhost:5000/wishlist/addtowishlist', {
        productId: _id,
        name,
        description,
        price,
        image
      });

      setWishlist(prevWishlist => [...prevWishlist, _id]); // Update local wishlist state
      setWishlistMessage('Product added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      setWishlistMessage('Failed to add product to wishlist.');
    }
  };

  const styles = {
    container: {
      margin: '0',
      padding: '10px',
      maxWidth: '100%',
    },
    productGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      margin: '0',
      padding: '0',
      width: '100%',
    },
    productItem: {
      position: 'relative',
      flex: '0 1 calc(25% - 20px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      borderRadius: '5px',
      textAlign: 'center',
      backgroundColor: '#fff'
    },
    productImage: {
      width: '100%',
      height: 'auto'
    },
    wishlistIcon: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      cursor: 'pointer',
      color: 'black',
      fontSize: '24px',
      padding: '5px'
    },
    cartIcon: {
      cursor: 'pointer',
      color: 'black',
      fontSize: '24px',
      marginLeft: '10px',
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px'
    },
    price: {
      marginRight: '60px'
    },
    wishlistMessage: {
      marginTop: '10px',
      color: wishlistMessage === 'Product added to wishlist!' ? 'green' : 'red',
      textAlign: 'center',
    }
  };

  return (
    <>
      <div><CarouselComponent /></div>
      <Container style={styles.container}>
        <h2>Products</h2>
        {wishlistMessage && (
          <p style={styles.wishlistMessage}>{wishlistMessage}</p>
        )}
        <div style={styles.productGrid}>
          {products.map(product => (
            <div key={product._id} style={styles.productItem}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  ...styles.wishlistIcon,
                  color: wishlist.includes(product._id) ? 'red' : 'black'
                }}
                onClick={() => addToWishlist(product)}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div style={styles.priceContainer}>
                <p style={styles.price}>Price: ${product.price}</p>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={styles.cartIcon}
                  onClick={() => addToCart(product._id, product.name, product.description, product.price, product.image)}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
