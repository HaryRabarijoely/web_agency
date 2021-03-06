import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import ThemeContext from './ThemeContext';
import StudyCase from './components/StudyCase';
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
            <div>   
                <Router>                
                        
                    <main className={`App ${currentTheme}`}>                        
                        <Navbar />
                        
                            <Routes>
                                <Route path="/" element={<Home />} />                                  
                                        
                                <Route path="/About" element={<About />} />                                    
                                        
                                <Route path="/Works" element={<Works />} />
                                    <Route path="/Works/:workSlug" element={<StudyCase />} />                                
                            </Routes>
                                                
                    </main>
                        
                </Router>
            </div>
            }
        </ThemeContext.Provider>
    );
}

export default App;