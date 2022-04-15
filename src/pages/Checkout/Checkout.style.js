import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSemiBold } from '../../styles/font/font';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutFooterContainer = styled.div`
  padding: 10px;
`;

export const CheckoutFooterBlockContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const CheckoutFooterButtonContainer = styled.div`
  margin: 15px 0;

  button {
    font-weight: ${fontSemiBold};
    text-transform: uppercase;
    background-color: #fd5d5d;
    color: #fff;
    cursor: pointer;
    width: 100%;
    padding: 15px;
    margin-top: 0;
  }
`;

export const CheckoutFooterLink = styled(Link)`
  span {
    margin-top: -10px;
    margin-left: 5px;
  }
`;

export const CheckoutMessageBlockContainer = styled.div`
  color: ${({ theme }) => theme.colors.redColor};
  text-align: center;

  p {
    margin: 10px 0;
  }
`;
