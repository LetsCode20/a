import styled from 'styled-components';
import { fontSizeH2 } from '../../styles/font/font';
import { NavbarHeight } from '../../styles/spaces/spaces';

export const HeaderContainer = styled.header`
    height: ${NavbarHeight};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    z-index: 100;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;

    & svg {
        font-size: ${fontSizeH2};
    }
`;

export const HeaderLogoTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1px;
`;
