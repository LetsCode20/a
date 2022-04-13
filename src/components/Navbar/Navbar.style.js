import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import {
  fontBold,
  fontMedium,
  fontSizeH2,
  tinyFontSize,
} from '../../styles/font/font';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: ${breakpoints.small}) {
    display: none;
    position: relative;

    &.active {
      width: 100%;
      position: absolute;
      top: 70px;
      left: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 400px;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.navback};
      transition: all 0.3s linear;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0 20px;
  text-transform: capitalize;
  transition: all 0.3s linear;

  & svg {
    font-size: ${fontSizeH2};
  }

  & span {
    background-color: ${({ theme }) => theme.colors.redColor};
    color: #fff;
    text-align: center;
    padding: 0 3px;
    border-radius: 50px;
    font-size: ${tinyFontSize};
    font-weight: ${fontBold};
    margin-left: -7px;
  }
`;

export const NavItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.containerColor};
  transition: color 0.2s ease-in;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 1px;
    width: 0%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${fontMedium};

    &::after {
      width: 100%;
    }
  }
`;

export const Menu = styled.div`
  display: none;

  @media screen and (max-width: ${breakpoints.small}) {
    display: block;
  }
`;

export const MenuBtn = styled.div`
  cursor: pointer;
  font-size: 18px;
`;
