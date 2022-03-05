import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { Container } from 'reactstrap';
import NFTCard from './NFTCard';

//store
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { userActions, nftActions } from '../redux/store.js';

import WalletError from './WalletError';

import { nftaddress, nftmarketaddress } from '../config';

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

function IndexCardContainer() {
	const [nfts, setnfts] = useState([]);
	const [loadingState, setLoadingState] = useState('not-loaded');

	// const dispatch = useDispatch();
	// const userSliceselector = useSelector((state) => state.userSliceReducer);
	// const nftSliceselector = useSelector((state) => state.nftSliceReducer);
	useEffect(() => {
		checkIfWalletIsConnected();
		loadNFTs();
	}, []);

	async function login() {
		const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
		await provider.send('eth_requestAccounts', []);
		const signer = provider.getSigner();
		const address = await signer.getAddress();
		return address;
	}

	const checkIfWalletIsConnected = async () => {
		try {
			const provider = new ethers.providers.Web3Provider(
				window.ethereum,
				'any'
			);
			if (provider) {
				console.log('Got the ethereum obejct: ', window.ethereum);
			} else {
				console.log('No Wallet found. Connect Wallet');
			}

			const accounts = await provider.send('eth_requestAccounts', []);

			if (accounts.length !== 0) {
				console.log('Found authorized Account: ', accounts[0]);
				connectWallet();
			} else {
				console.log('No authorized account found');
			}
		} catch (err) {
			console.log(err);
		}
	};
	const connectWallet = async () => {
		try {
			const provider = new ethers.providers.Web3Provider(
				window.ethereum,
				'any'
			);

			if (!window.ethereum) {
				console.log('Metamask not detected');
				return;
			}
			let chainId = await provider.send('eth_chainId', []);
			console.log('Connected to chain:' + chainId);

			const mumbaiChainId = '0x13881';

			if (chainId !== mumbaiChainId) {
				console.log('Not connected to Mumbai testnet!');
				return;
			}

			login()
				.then((address) => {
					// setUserAddress(address);
					// dispatch(userActions.loginUser({ address: address }));
					// dispatch(userActions.setWalletState({ walletState: 'connected' }));
				})
				.catch((err) => {
					console.error(err);
				});
		} catch (error) {
			console.log('Error connecting to metamask', error);
		}
	};

	async function loadNFTs() {
		const provider = new ethers.providers.JsonRpcProvider(
			'https://matic-mumbai.chainstacklabs.com/'
		);
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
		const marketContract = new ethers.Contract(
			nftmarketaddress,
			Market.abi,
			provider
		);
		const data = await marketContract.fetchUnsoldItems();

		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await tokenContract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					itemId: i.itemId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description,
					// likes: i.likes.toNumber(),
					sold: i.sold,
				};
				console.log(item);
				return item;
			})
		);
		// dispatch(nftActions.updateMarketNfts({ nfts: items }));
		setnfts(items);
		setLoadingState('loaded');
	}
	async function buyNft(nft) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

		const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
		const transaction = await contract.createMarketSale(
			nftaddress,
			nft.itemId,
			{
				value: price,
			}
		);
		await transaction.wait();
		loadNFTs();
	}

	//  Increment like function

	async function incrementLike(nft) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
		console.log(nft.itemId, typeof nft.itemId);
		const transaction = await contract.increment_nft_likes(nft.itemId);
		await transaction.wait();
		loadNFTs();
	}
	// if (userSliceselector.walletState === 'not-connected')
	// 	return <WalletError onConnectWallet={() => connectWallet()} />;
	return (
		<div className='section section-typo'>
			{/* <img
				alt='...'
				className='path'
				src={require('../assets/img/path1.png')}
			/>
			<img
				alt='...'
				className='path path1'
				src={require('../assets/img/path3.png')}
			/> */}

			<Container className='cardcontainer'>
				<div id='typography'>
					<div className='typography-line'>
						<h1>Explore NFT Collection</h1>
					</div>
				</div>
			</Container>
			<div className='all_NFT'>
				{loadingState === 'loaded' && !nfts.length ? (
					<h1>
						No items in marketplace
						{/* {nftSliceselector.marketNfts.length} */}
					</h1>
				) : (
					nfts.map((nft, id) => (
						<NFTCard
							key={id}
							nft={nft}
							buyNft={() => buyNft(nft)}
							increment={() => incrementLike(nft)}
						/>
					))
				)}
				{/* <NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard />
				<NFTCard /> */}
			</div>
		</div>
	);
}

export default IndexCardContainer;
