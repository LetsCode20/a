import styled from 'styled-components';
import { fontSizeH2 } from '../../styles/font/font';

export const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxes.boxShadow};
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;

export const SwitchButton = styled.button`
    cursor: pointer;

    svg {
        font-size: ${fontSizeH2};
        color: ${({ theme }) => theme.colors.secondary};

        opacity: 0.2;
        transform: translateY(-10px);
        animation-name: icon;
        animation-timing-function: ease-in-out;
        animation-duration: 1s;
        animation-fill-mode: forwards;

        @keyframes icon {
            50% {
                transform: translateY(10px);
                opacity: 0.7;
            }

            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;
