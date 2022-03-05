import { createSlice, createAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const nftSlice = createSlice({
	name: 'nft',
	initialState: {
		marketNfts: [],
		soldNfts: [],
		createdNfts: [],
		userOwnedNfts: [],
	},
	reducers: {
		updateMarketNfts: (state, action) => {
			state.marketNfts = action.payload.nfts;
			// state.nfts.push(action.payload.nft)
		},
		setSoldNfts: (state, action) => {
			state.soldNfts = action.payload.soldNfts;
		},
		setCreatedNfts: (state, action) => {
			state.createdNfts = action.payload.createdNfts;
		},
		setUserOwnedNfts: (state, action) => {
			state.userOwnedNfts = action.payload.userOwnedNfts;
		},
	},
});

const userSlice = createSlice({
	name: 'usere',
	initialState: {
		address: '',
		walletState: 'not-connected',
	},
	reducers: {
		loginUser: (state, action) => {
			state.address = action.payload.address;
		},
		setWalletState: (state, action) => {
			state.walletState = action.payload.address;
		},
	},
});

const reducer = combineReducers({
	nftSliceReducer: nftSlice.reducer,
	userSliceReducer: userSlice.reducer,
});

const store = createStore(reducer);

export default store;
export const nftActions = nftSlice.actions;
export const userActions = userSlice.actions;
