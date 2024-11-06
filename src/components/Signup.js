import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(''); // New state to handle OTP
    const [isOtpSent, setIsOtpSent] = useState(false); // Flag to check if OTP was sent
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();

    // Handle form submission for Signup
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        console.log('Attempting to submit sign up form...');

        try {
            // Sending data for signup
            console.log('Sending signup request...');
            const response = await axios.post('http://localhost:5000/api/user/Signup', {
                username,
                email,
                password,
            });
            console.log('Response from signup:', response);

            if (response.status === 200) {
                console.log('Signup successful, OTP will be sent.');
                // Successfully created account, now request OTP
                setIsOtpSent(true); // Show OTP input form
                alert('Account created successfully! Please enter the OTP sent to your email.');
            } else {
                console.log('Signup failed with status:', response.status);
                throw new Error('Failed to create account');
            }
        } catch (err) {
            console.error('Signup error:', err);

            if (err.response) {
                const errorMessage = err.response.data.message || JSON.stringify(err.response.data);
                setError(errorMessage);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    // Handle OTP verification
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setError(null);

        console.log('Attempting to verify OTP...');

        try {
            // Verifying OTP
            console.log('Sending OTP verification request...');
            const response = await axios.post('http://localhost:5000/api/user/verify-otp', {
                email,
                otp,
            });

            console.log('Response from OTP verification:', response.data);
            if (response.status === 200) {
                console.log('OTP verification successful!');
                setSuccess('OTP verified successfully!');
                navigate('/login'); // Navigate to login after successful OTP verification
            } else {
                console.log('OTP verification failed with status:', response.status);
                throw new Error('Invalid OTP');
            }
        } catch (err) {
            console.error('OTP verification error:', err);

            if (err.response) {
                const errorMessage = err.response.data || 'Invalid OTP';
                setError(errorMessage);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="create-account-container">
            <h2>Sign Up</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}

            {/* Signup Form */}
            {!isOtpSent ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: 'green' }}>
                        Create Account
                    </button>
                </form>
            ) : (
                // OTP Verification Form (Only shows when OTP has been sent)
                <div>
                    <p>Please check your email for the OTP. Enter the OTP below to verify your account.</p>
                    <form onSubmit={handleVerifyOtp}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                placeholder="Enter OTP"
                            />
                        </div>
                        <button type="submit" style={{ backgroundColor: 'green' }}>
                            Verify OTP
                        </button>
                    </form>
                </div>
            )}

            <p>
                Already have an account? <Link to="/login">LogIn</Link>
            </p>
        </div>
    );
};

export default SignUp;
