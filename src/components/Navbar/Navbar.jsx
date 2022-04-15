import React, { useState } from 'react';
import * as Ai from 'react-icons/ai';
import {
  CHECKOUTROUTE,
  CONTACTROUTE,
  FAVORITEROUTE,
  SHOPROUTE,
} from '../../navigation/CONSTANT';
import CustomLink from '../CustomLink/CustomLink';
import { Menu, Nav, NavItem, NavItems } from './Navbar.style';
import UserButton from '../UserButton/UserButton';
import { favoriteItemsLength } from '../../redux/features/favorite/favoriteSlice';
import { cartItemsLength } from '../../redux/features/checkout/checkoutSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favoriteItemLen = useSelector(favoriteItemsLength);
  const cartItemLen = useSelector(cartItemsLength);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Nav>
      <NavItems className={clicked ? 'active' : ''}>
        <NavItem>
          <CustomLink to={SHOPROUTE}>Collections</CustomLink>
        </NavItem>

        <NavItem>
          <CustomLink to={CONTACTROUTE}>Contact</CustomLink>
        </NavItem>

        <NavItem>
          <CustomLink to={FAVORITEROUTE}>
            <Ai.AiOutlineHeart />
            <span>{favoriteItemLen}</span>
          </CustomLink>
        </NavItem>

        <NavItem>
          <CustomLink to={CHECKOUTROUTE}>
            <Ai.AiOutlineShopping />
            <span>{cartItemLen}</span>
          </CustomLink>
        </NavItem>

        <UserButton />
      </NavItems>

      <Menu onClick={handleClick}>
        {clicked ? <Ai.AiOutlineClose /> : <Ai.AiOutlineMenu />}
      </Menu>
    </Nav>
  );
};

export default Navbar;
