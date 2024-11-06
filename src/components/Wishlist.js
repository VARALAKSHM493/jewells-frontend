import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Wishlist.css'
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the wishlist items on component mount
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('/wishlist/allwishlistitems');
        setWishlist(response.data.products); // Assuming `products` is an array in the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching wishlist data');
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Remove an item from the wishlist
  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`/wishlist/removeFromWishlist/${productId}`);
      setWishlist((prevState) =>
        prevState.filter((product) => product.productId !== productId)
      );
    } catch (err) {
      setError('Error removing product from wishlist');
    }
  };

  // Add product to wishlist
  const handleAddToWishlist = async (product) => {
    try {
      await axios.post('/wishlist/addtowishlist', product);
      setWishlist((prevState) => [...prevState, product]);
    } catch (err) {
      setError('Error adding product to wishlist');
    }
  };

  if (loading) return <p>Loading wishlist...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((product) => (
            <li key={product.productId} className="wishlist-item">
              <div className="product-info">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p><strong>Price: ${product.price}</strong></p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(product.productId)}>
                Remove from Wishlist
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Add Product Button (This could be replaced with a dynamic product object) */}
      <div className="add-product">
        <button onClick={() => handleAddToWishlist({
          productId: '12345',
          name: 'Sample Product',
          description: 'This is a sample product.',
          price: 99.99,
          image: 'https://via.placeholder.com/150',
        })}>
          Add Sample Product to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
