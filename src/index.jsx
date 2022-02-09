import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import Theme from './Theme';

const App = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const ToggleTheme = useCallback(function () {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    }, []);

    const currentTheme = theme === 'light' ? Theme.light : Theme.dark;
    const button = theme === 'light' ? 'Dark mode' : 'Light mode'

    localStorage.setItem('theme', theme);

    return (
        <Router>
            <button onClick={ToggleTheme}>{button}</button>
            <Navbar />
            <main style={currentTheme}>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                        
                    
                    <Route path="/About" element={<About />} />
                        
                    
                    <Route path="/Works" element={<Works />} />
                        
                    
                </Routes>
            </main>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));