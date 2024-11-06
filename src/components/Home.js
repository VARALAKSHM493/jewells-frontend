import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
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

    const addToWishlist = (productId) => {
        alert(`Product added to wishlist!`);
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
        }
    };

    return (
        <>
            <div><CarouselComponent /></div>
            <Container style={styles.container}>
                <h2>Products</h2>
                <div style={styles.productGrid}>
                    {products.map(product => (
                        <div key={product._id} style={styles.productItem}>
                            <img src={product.image} alt={product.name} style={styles.productImage} />
                            <FontAwesomeIcon
                                icon={faHeart}
                                style={styles.wishlistIcon}
                                onClick={() => addToWishlist(product._id)}
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
