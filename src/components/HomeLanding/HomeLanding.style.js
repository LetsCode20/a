import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

export const HomeLandingContainer = styled.section`
    width: 100%;
`;

export const HomeLandingWrapper = styled.div``;

export const HomeLandingBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: ${breakpoints.medium}) {
        flex-direction: column;
        justify-content: center;
    }
`;
