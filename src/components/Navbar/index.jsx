import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to="/" className="link">Home</Link> 
                <Link to="/About" className="link">L'agence</Link> 
                <Link to="/Works" className="link">Projets</Link>
                <ToggleButton />
            </ul>    
            
        </nav>
    );
};

export default Navbar;