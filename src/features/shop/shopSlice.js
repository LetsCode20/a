import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { collectionRef } from '../../configs/FirebaseConfigs';

export const getCollections = createAsyncThunk('shop/setCollections', async () => {
    return getDocs(collectionRef)
        .then((snapshot) =>
            snapshot.docs
                .map((doc) => doc.data())
                .reduce((accumulator, collection) => {
                    accumulator.push(collection);
                    return accumulator;
                }, []),
        )
        .catch((error) => toast.error(error));
});

const initialState = {
    collections: [],
    status: null,
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: {
        [getCollections.pending]: (state) => {
            state.status = 'loading';
        },
        [getCollections.fulfilled]: (state, { payload }) => {
            state.collections = payload;
            state.status = 'success';
        },
        [getCollections.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export const { setCollections } = shopSlice.actions;

export const collections = (state) => state.shop.collections;
export const statusCollections = (state) => state.shop.status;

// export const collectionsInitiate = () => (dispatch: any) => {
//     onSnapshot(colRef, (snapshot) =>
//         snapshot.docs.map((doc) => {
//             const data = doc.data();

//             // dispatch(collectionsData(data));
//             return data;
//         }),
//     );
// };

// const collectionsData = (data: any) => (dispatch: any) => {
//     dispatch(setCollections(data));
// };

export default shopSlice.reducer;
