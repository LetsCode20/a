import { createSlice } from '@reduxjs/toolkit';
import { SHOPACCESSORIESROUTE, SHOPKIDSROUTE, SHOPMENROUTE, SHOPWOMENROUTE } from '../../navigation/CONSTANT';

const initialState = {
    sections: [
        {
            title: 'women',
            imageUrl: 'https://i.ibb.co/nzZ5tNv/Collection-1.png',
            id: 1,
            linkUrl: SHOPWOMENROUTE,
        },
        {
            title: 'men',
            imageUrl: 'https://i.ibb.co/GFxkZMb/men-collection.png',
            id: 2,
            linkUrl: SHOPMENROUTE,
        },
        {
            title: 'kids',
            imageUrl: 'https://i.ibb.co/Ch4YbxL/kids-collection1.png',
            id: 3,
            linkUrl: SHOPKIDSROUTE,
        },
        {
            title: 'accessories',
            imageUrl: 'https://i.ibb.co/nbyxV1K/Collection-4.png',
            id: 4,
            linkUrl: SHOPACCESSORIESROUTE,
        },
    ],
};

export const directorySlice = createSlice({
    name: 'directory',
    initialState,
    reducers: {
        setSections: (state) => {
            state = { sections: state.sections };
        },
    },
});

export const { setSections } = directorySlice.actions;

export const selectSections = (state) => state.directory.sections;

export default directorySlice.reducer;
