import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme }) {
    return (
        <header className="bg-gray-700 p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-3xl font-bold">FlyIntel - Live Flight Tracker</h1>
            <div>
                <button onClick={toggleTheme} className="text-white mr-4">Toggle Theme</button>
                <Link to="/login" className="text-white mr-4">Login</Link>
                <Link to="/register" className="text-white">Register</Link>
            </div>
        </header>
    );
}

export default Navbar;