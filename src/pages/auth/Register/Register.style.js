import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints/breakpoints';
import { fontBold, smallFontSize } from '../../../styles/font/font';

export const Form = styled.form`
    margin: 30px 0;

    & h2 {
        margin-bottom: 10px;
    }

    & p {
        margin-bottom: 50px;
    }
`;

export const FormGroup = styled.div`
    margin: 50px 0;
    position: relative;
`;

export const FormLabel = styled.label`
    position: absolute;
    left: 1px;
    top: 7px;
    cursor: text;
    transition: top 0.3s ease-in, left 0.3s ease-in, font-size 0.3s ease-in;
`;

export const FormInput = styled.input`
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.containerColor};
    width: 100%;
    padding: 10px 0;
    position: relative;

    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.containerColor};
    }

    &:focus ~ label,
    &:not(:placeholder-shown)&:not(:focus) ~ label {
        top: -14px;
        left: 0;
        font-size: ${smallFontSize};
    }

    @media screen and (max-width: ${breakpoints.small}) {
        width: 90%;
    }
`;

export const FormButtons = styled.div`
    display: flex;

    button {
        height: 50px;
        text-transform: uppercase;
        font-weight: ${fontBold};
        cursor: pointer;
    }

    @media screen and (max-width: ${breakpoints.small}) {
        flex-direction: column;
    }
`;

export const FormButton = styled.button`
    margin-right: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    width: 120px;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.secondary};
    letter-spacing: 1px;
    transition: box-shadow 0.3s ease-in, color 0.3s ease-in;

    &:hover {
        box-shadow: inset 150px 0 0 0 ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: ${breakpoints.small}) {
        margin-bottom: 20px;
    }
`;

export const FormButtonGoogle = styled.button`
    background-color: #fd5d5d;
    color: #fff;
    transition: background-color 0.3s ease-in;
    width: 170px;

    &:hover {
        background-color: #ff6b6b;
        box-shadow: 0 !important;
    }
`;
