import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize } from './font/font';
import { breakpoints } from './breakpoints/breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background-color:	#595f69;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3d4148;
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #2f3237;
  }

  body {
    font-family: ${fontFamily}, sans-serif;
    font-size: ${fontSize};
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul { 
    list-style: none;
  }

  button {
    border: none;
    background: none;
  }
`;

export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    /* Small */
    @media (min-width: ${breakpoints.small}) {
        width: 750px;
    }

    /* Medium */
    @media (min-width: ${breakpoints.medium}) {
        width: 970px;
    }

    /* Large */
    @media (min-width: ${breakpoints.large}) {
        width: 1170px;
    }
`;

export default GlobalStyle;
