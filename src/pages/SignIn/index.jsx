// src/pages/SignIn/index.jsx
import React, { useState } from 'react';
import { signIn } from '../../utils/api';
import './style.css';

const SignIn = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await signIn(email, password);
        
        console.log('Login response:', response);

        if (response.status === 'authenticated') {
            setUser({ id: response.id, email: response.email });
        } else {
            setError(response.message || 'Login failed');
        }
    };

    return (
        <div className="signin-page">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default SignIn;
