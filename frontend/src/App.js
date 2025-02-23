import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import FlightDetails from './components/FlightDetails';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar toggleTheme={toggleTheme} />
                    <AnimatePresence exitBeforeEnter>
                        <Switch>
                            <Route path="/" exact component={MapView} />
                            <Route path="/flight/:id" component={FlightDetails} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                        </Switch>
                    </AnimatePresence>
                </div>
            </div>
        </Router>
    );
}

export default App;