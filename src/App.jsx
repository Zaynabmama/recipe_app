import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SearchRecipes from './pages/SearchRecipes';
import AllRecipes from './pages/AllRecipes';
import './styles/index.css';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/signin" element={<SignIn setUser={setUser} />} />
                    <Route path="/search" element={<SearchRecipes />} />
                    <Route path="/" element={user ? <Home user={user} /> : <SignIn setUser={setUser} />} />
                    <Route path="/recipes" element={<AllRecipes />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
