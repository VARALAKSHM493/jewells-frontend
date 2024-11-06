import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState({ products: [] });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart/allcartitems');
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, []);

    const updateQuantity = async (productId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            await axios.post('http://localhost:5000/cart/updatequantity', {
                productId,
                quantity: newQuantity
            });
            setCart((prevCart) => ({
                ...prevCart,
                products: prevCart.products.map(item =>
                    item.productId === productId ? { ...item, quantity: newQuantity } : item
                ),
            }));
            setMessage('Product quantity updated!'); // Message for updating quantity
            setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const deleteFromCart = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/cart/remove/${productId}`);
            setCart((prevCart) => ({
                ...prevCart,
                products: prevCart.products.filter(item => item.productId !== productId),
            }));
            setMessage('Product removed from cart!'); // Message for removal
            setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
        } catch (error) {
            console.error('Error deleting from cart:', error);
        }
    };

    const handleIncrement = (productId, quantity) => {
        updateQuantity(productId, quantity + 1);
    };

    const handleDecrement = (productId, quantity) => {
        if (quantity > 1) {
            updateQuantity(productId, quantity - 1);
        }
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>} {/* Display message */}

            {cart.products.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.products.map(item => (
                        <li key={item.productId} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <img src={item.image} alt={`Product ${item.productId}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Description: {item.description}</p>
                                <p>Price: ${item.price}</p>
                                <p>
                                    Quantity: 
                                    <button onClick={() => handleDecrement(item.productId, item.quantity)}>-</button>
                                    {item.quantity}
                                    <button onClick={() => handleIncrement(item.productId, item.quantity)}>+</button>
                                </p>
                                <button onClick={() => deleteFromCart(item.productId)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
