import React from 'react';
import { HomeLandingBox, HomeLandingImage, HomeLandingBoxDetails } from './HomeLandingMenu.style';

const HomeLandingMenu = ({ id, linkUrl, imageUrl, title }) => {
    return (
        <HomeLandingBox to={linkUrl}>
            <HomeLandingImage className="background-image" style={{ backgroundImage: `url('${imageUrl}')` }} />
            <HomeLandingBoxDetails className="details">
                <h3>{title} Collection</h3>
                <p>Buy now</p>
            </HomeLandingBoxDetails>
        </HomeLandingBox>
    );
};

export default HomeLandingMenu;
