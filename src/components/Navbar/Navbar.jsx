import React, { useState } from 'react';
import * as Ai from 'react-icons/ai';
import {
  CHECKOUTROUTE,
  CONTACTROUTE,
  FAVORITEROUTE,
  SHOPROUTE,
} from '../../navigation/CONSTANT';
import CustomLink from '../CustomLink/CustomLink';
import { Menu, MenuBtn, Nav, NavItem, NavItems } from './Navbar.style';
import UserButton from '../UserButton/UserButton';
import { favoriteItems } from '../../redux/features/favorite/favoriteSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favoriteItem = useSelector(favoriteItems);
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
            <span>{favoriteItem.length}</span>
          </CustomLink>
        </NavItem>

        <NavItem>
          <CustomLink to={CHECKOUTROUTE}>
            <Ai.AiOutlineShopping />
            <span>0</span>
          </CustomLink>
        </NavItem>

        <UserButton />
      </NavItems>

      <Menu onClick={handleClick}>
        <MenuBtn className={clicked ? 'open' : ''}></MenuBtn>
      </Menu>
    </Nav>
  );
};

export default Navbar;
