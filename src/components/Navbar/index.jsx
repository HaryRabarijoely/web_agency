import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton';
import { Menu } from 'antd';
import ThemeContext from '../../ThemeContext';
import { HomeOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons';
import '../../App.scss';


const Navbar = () => {
    const theme = useContext(ThemeContext);

    return (
        <Menu mode="horizontal" theme={theme.currentTheme} style={{ display: 'flex', justifyContent:"space-between", alignItems:"center"}}>
            
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link> 
            </Menu.Item>
            <Menu.Item key="about" icon={<TeamOutlined />}>
                <Link to="/About">L'agence</Link>
            </Menu.Item>
            <Menu.Item key="Works" icon={<AppstoreOutlined />}>
                <Link to="/works">Projets</Link>
            </Menu.Item>
            <ToggleButton />         
            
        </Menu>
    );
};

export default Navbar;