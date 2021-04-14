import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarCreation from '../Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <div className = "header-container">
            <NavbarCreation></NavbarCreation>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;