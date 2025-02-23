import React, { useState } from 'react';
import axios from 'axios';

function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            history.push('/');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={submitHandler} className="bg-gray-800 p-6 rounded-lg shadow-2xl w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 mt-4 px-4 py-2 rounded w-full">Login</button>
            </form>
        </div>
    );
}

export default Login;