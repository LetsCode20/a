import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEROUTE } from '../../navigation/CONSTANT';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer, HeaderLogo, HeaderLogoTitle } from './Header.style';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <HeaderLogoTitle>
                    <Link to={HOMEROUTE}>myStore</Link>
                </HeaderLogoTitle>
            </HeaderLogo>

            <Navbar />
        </HeaderContainer>
    );
};

export default Header;
