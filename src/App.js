import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route here
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'; // Correctly import Signup
import Cart from './components/Cart';
import UpperNavbar from './components/Uppernavbar';
import LowerNavbar from './components/Lowernavbar';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <UpperNavbar />
                <CustomNavbar />
                <LowerNavbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </>
    );
};

export default App;
