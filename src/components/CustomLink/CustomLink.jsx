import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { NavItemLink } from '../Navbar/Navbar.style';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavItemLink className={match ? 'active' : ''} to={to} {...props}>
            {children}
        </NavItemLink>
    );
};

export default CustomLink;
