import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import '../../App.scss';

const ToggleButton = () => {
    const theme = useContext(ThemeContext);
    const mode = (theme.currentTheme === 'light') ? 'Darkmode OFF' : 'Darkmode ON';

    /*    setTheme(t => t === 'light' ? 'dark' : 'light')
    }, []);

    const currentTheme = theme === 'light' ? Theme.light : Theme.dark;
    const button = theme === 'light' ? 'Darkmode OFF' : 'Darkmode ON'
    */
    
    return (
        <button  onClick={theme.toggleTheme}>{mode}</button>
    );
};

export default ToggleButton;