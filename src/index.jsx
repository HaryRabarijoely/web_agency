import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            
            <main>
                <Navbar />
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