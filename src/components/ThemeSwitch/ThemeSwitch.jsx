import React from 'react';
import * as Bs from 'react-icons/bs';
import { SwitchButton, SwitchContainer } from './ThemeSwitch.style';

const ThemeSwitch = ({ theme, themeToggler }) => {
    return (
        <SwitchContainer onClick={themeToggler}>
            <SwitchButton className="button">
                {theme === 'light' ? <Bs.BsFillMoonStarsFill /> : <Bs.BsFillSunFill />}
            </SwitchButton>
        </SwitchContainer>
    );
};

export default ThemeSwitch;
