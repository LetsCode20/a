import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontBold } from '../../styles/font/font';

export const Button = styled.button`
  width: 90px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: ${fontBold};
  transition: all 0.2s linear;

  &:hover {
    box-shadow: inset 90px 0 0 0 ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ButtonLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s linear;
`;
