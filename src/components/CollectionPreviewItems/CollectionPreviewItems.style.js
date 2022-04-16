import styled from 'styled-components';
import { bigFontSize, tinyFontSize } from '../../styles/font/font';

export const CollectionPreviewItemContainer = styled.div`
  width: 22vw;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  margin-right: 10px;

  &:hover svg,
  &:hover button {
    display: block;
  }

  @media (max-width: 800px) {
    width: 60vw;
    margin-bottom: 30px;
  }
`;

export const CollectionPreviewItemImg = styled.img`
  width: 100%;
  height: 95%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CollectionPreviewItemInformation = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 5%;
`;

export const CollectionPreviewItemButton = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;

  button {
    width: 100%;
    padding: 15px 0;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #222;
    text-transform: uppercase;
    font-size: ${tinyFontSize};
    display: none;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid #fff;
      color: #fff;
    }
  }
`;

export const CollectionPreviewItemHearth = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  & svg {
    font-size: ${bigFontSize};
    opacity: 0.6;
    display: none;
    color: ${({ theme }) => theme.colors.redColor};
    transition: all 0.3s ease-in;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
