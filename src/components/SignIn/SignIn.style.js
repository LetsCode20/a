import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

export const SignInContainer = styled.div`
    margin: 0 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;

    @media screen and (max-width: ${breakpoints.small}) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        place-items: center;
    }
`;
