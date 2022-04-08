import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

export const CollectionPreviewContainer = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 30px 20px;
  margin: 20px 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 300px);
    grid-gap: 20px 20px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    justify-content: center;
    grid-template-columns: repeat(1, 250px);
    grid-gap: 20px 0;
  }
`;
