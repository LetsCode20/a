import styled from 'styled-components';
import { fontSemiBold } from '../../styles/font/font';

export const CollectionTitle = styled.h3`
  font-weight: ${fontSemiBold};
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
  transition: text-decoration 0.3s ease-in;

  &:hover {
    text-decoration: underline;
  }
`;
