import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import ThemeContext from './ThemeContext';
//import Theme from './Theme';

const App = () => {

    const [currentTheme, setCurrentTheme] = useState(localStorage.selectTheme ||'light');
    useEffect(() => { localStorage.setItem('selectTheme', currentTheme) }, [currentTheme]);
    /*const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const ToggleTheme = useCallback(function () {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    }, []);

    const currentTheme = theme === 'light' ? Theme.light : Theme.dark;
    const button = theme === 'light' ? 'Darkmode OFF' : 'Darkmode ON'

    localStorage.setItem('theme', theme);*/

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            toggleTheme: () => {
                (currentTheme === 'light') ? setCurrentTheme('dark') : setCurrentTheme('light');
            }
        }}>{
            <Router>                
                
                <main className={`App ${currentTheme}`}>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                                
                            
                            <Route path="/About" element={<About />} />
                                
                            
                            <Route path="/Works" element={<Works />} />
                                
                            
                        </Routes>
                    </div>
                </main>
            </Router>
            }
        </ThemeContext.Provider>
    );
}

export default App;