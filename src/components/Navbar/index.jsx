import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton';

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link> | {" "}
            <Link to="/About">About</Link> | {" "}
            <Link to="/Works">Works</Link>
            <ToggleButton />
        </>
    );
};

export default Navbar;