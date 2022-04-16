const primaryLight = '#222';
const secondaryLight = '#fff';
const lightTertiary = '#383838';
const containerColorLight = '#888b91';
const navbackLight = '#eee';
const boxShadowLight = '2px 2px 8px 0px rgba(0,0,0,0.4)';
const boxCollectionLight = '3px 3px 0px 1px rgba(0, 0, 0, 0.4)';

const primaryDark = '#fff';
const secondaryDark = '#222';
const darkTertiary = '#FAFDD6';
const containerColorDark = '#888b91';
const navbackDark = '#333';
const boxShadowDark = '2px 2px 10px 0px rgba(255,255,255,0.2)';
const boxCollectionDark = '3px 3px 0px 1px rgba(255, 255, 255, 0.4)';

const redColor = '#f00';

export const lightTheme = {
  colors: {
    primary: `${primaryLight}`,
    secondary: `${secondaryLight}`,
    tertiary: `${lightTertiary}`,
    containerColor: `${containerColorLight}`,
    navback: `${navbackLight}`,
    redColor: `${redColor}`,
  },
  boxes: {
    boxShadow: `${boxShadowLight}`,
    boxCollection: `${boxCollectionLight}`,
  },
};

export const darkTheme = {
  colors: {
    primary: `${primaryDark}`,
    secondary: `${secondaryDark}`,
    tertiary: `${darkTertiary}`,
    containerColor: `${containerColorDark}`,
    navback: `${navbackDark}`,
    redColor: `${redColor}`,
  },
  boxes: {
    boxShadow: `${boxShadowDark}`,
    boxCollection: `${boxCollectionDark}`,
  },
};
