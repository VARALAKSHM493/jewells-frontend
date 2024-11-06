import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch wishlist items on mount
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://localhost:5000/wishlist/allwishlistitems');
        // Ensure wishlist data is properly structured
        setWishlist(response.data.wishlist ? response.data.wishlist.products : []);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        setErrorMessage('Failed to fetch wishlist.');
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = async (productId) => {
    try {
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:5000/wishlist/removefromwishlist/${productId}`);

      // Check if the delete was successful (status 200)
      if (response.status === 200) {
        // Update frontend state by removing the product
        setWishlist(wishlist.filter(product => product.productId !== productId));
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      setErrorMessage('Failed to remove product from wishlist.');
    }
  };

  // Add product to cart
  const addToCart = async (product) => {
    try {
      await axios.post('http://localhost:5000/cart/addtocart', {
        products: [{ productId: product._id, quantity: 1 }],
      });
      removeFromWishlist(product._id); // Remove from wishlist after adding to cart
    } catch (error) {
      console.error('Error adding to cart:', error);
      setErrorMessage('Failed to add product to cart.');
    }
  };

  // Show loading state while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h2>Your Wishlist</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <Row>
          {wishlist.map((product) => (
            <Col key={product.productId} md={3} className="text-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <h5>{product.name}</h5>
              <p>Price: ₹{product.price.toFixed(2)}</p>
              <p>{product.description}</p>
              {/* <Button variant="success" onClick={() => addToCart(product)}>
                Add to Cart
              </Button> */}
              <Button
                variant="danger"
                onClick={() => removeFromWishlist(product.productId)} // Corrected productId usage
                className="ms-2"
              >
                Remove from Wishlist
              </Button>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Wishlist;
