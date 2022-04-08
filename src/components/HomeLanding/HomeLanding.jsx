import React from 'react';
import { HomeLandingContainer, HomeLandingWrapper, HomeLandingBoxes } from './HomeLanding.style';
import { useSelector } from 'react-redux';
import { selectSections } from '../../features/directory/directorySlice';
import HomeLandingMenu from '../HomeLandingMenu/HomeLandingMenu';

const HomeLanding = () => {
    const sections = useSelector(selectSections);

    return (
        <HomeLandingContainer>
            <HomeLandingWrapper>
                <HomeLandingBoxes>
                    {sections.map(({ id, imageUrl, linkUrl, title }) => (
                        <HomeLandingMenu key={id} id={id} imageUrl={imageUrl} linkUrl={linkUrl} title={title} />
                    ))}
                </HomeLandingBoxes>
            </HomeLandingWrapper>
        </HomeLandingContainer>
    );
};

export default HomeLanding;
