import { fontBold, fontSemiBold, fontSize, smallerFontSize } from '../../styles/font/font';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

export const HomeLandingBox = styled(Link)`
    min-width: 45%;
    height: 300px;
    margin: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: ${({ theme }) => theme.boxes.boxCollection};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & .details {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    @media screen and (max-width: ${breakpoints.medium}) {
        width: 100%;
        margin: 20px 0;
        height: 250px;
    }
`;

export const HomeLandingImage = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: saturate(120%);
`;

export const HomeLandingBoxDetails = styled.div`
    position: absolute;
    bottom: 60px;
    left: 0;
    padding: 25px 10px;
    min-width: 40%;
    background-color: rgba(255, 255, 255, 0.7);
    color: #222;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
    text-transform: uppercase;

    h3 {
        font-size: ${fontSize};
        font-weight: ${fontBold};
        margin-bottom: 15px;
    }

    p {
        font-size: ${smallerFontSize};
        font-weight: ${fontSemiBold};
    }
`;
