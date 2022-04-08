import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { bigFontSize, tinyFontSize } from '../../styles/font/font';

export const CollectionPreviewItemContainer = styled.div`
  width: 220px;
  position: relative;

  &:hover svg,
  &:hover button {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 300px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 250px;
  }
`;

export const CollectionPreviewItemImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const CollectionPreviewItemInformation = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const CollectionPreviewItemButton = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  button {
    width: 150px;
    padding: 10px 0;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #222;
    text-transform: uppercase;
    font-size: ${tinyFontSize};
    display: none;
    transition: all 0.3s ease-in;

    @media screen and (max-width: ${breakpoints.medium}) {
      width: 220px;
    }

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
