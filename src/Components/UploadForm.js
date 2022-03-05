import { React, useState } from 'react';
import { create as ipfsHttpsClient } from 'ipfs-http-client';
import { Button } from 'reactstrap';
import Web3Modal from 'web3modal';

import { ethers } from 'ethers';
import { nftaddress, nftmarketaddress } from '../config';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

const client = ipfsHttpsClient('https://ipfs.infura.io:5001/api/v0');
const UploadForm = () => {
	const [fileUrl, setFileUrl] = useState(null);
	const [image, setimage] = useState();
	const [formInput, updateFormInput] = useState({
		price: '',
		name: '',
		description: '',
	});
	async function generate() {
		let number = Math.floor(Math.random() * 100 + 1);
		const imgfile = `../NFTs/${number}.png`;
		setFileUrl(imgfile);
		// try {
		// 	const added = await client.add(imgfile, {
		// 		progress: (prog) => console.log(`received: ${prog}`),
		// 	});
		// 	const url = `https://gateway.ipfs.io/ipfs/${added.path}`;
		// 	setFileUrl(url);
		// 	console.log(fileUrl);
		// } catch (error) {
		// 	console.log('Error uploading file: ', error);
		// }
	}
	async function onChange(e) {
		const file = e.target.files[0];
		try {
			const added = await client.add(file, {
				progress: (prog) => console.log(`received: ${prog}`),
			});
			const url = `https://gateway.ipfs.io/ipfs/${added.path}`;
			setFileUrl(url);
			console.log(fileUrl);
		} catch (error) {
			console.log('Error uploading file: ', error);
		}
	}
	async function createMarket() {
		const { name, description, price } = formInput;
		if (!name || !description || !price || !fileUrl) return;
		/* first, upload to IPFS */
		const data = JSON.stringify({
			name,
			description,
			image: fileUrl,
		});
		try {
			const added = await client.add(data);
			const url = `https://gateway.ipfs.io/ipfs/${added.path}`;
			/* after file is uploaded to IPFS, pass the URL to save it on Polygon */
			createSale(url);
		} catch (error) {
			console.log('Error uploading file: ', error);
		}
	}

	async function createSale(url) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		/* next, create the item */
		let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
		let transaction = await contract.createToken(url);
		let tx = await transaction.wait();
		let event = tx.events[0];
		let value = event.args[2];
		let tokenId = value.toNumber();

		const price = ethers.utils.parseUnits(formInput.price, 'ether');

		/* then list the item for sale on the marketplace */
		contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
		let listingPrice = await contract.getListingPrice();
		listingPrice = listingPrice.toString();

		transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
			value: listingPrice,
		});
		await transaction.wait();
		// this.props.history.push('/');
	}
	return (
		<div className='card' style={{ height: 'inherit' }}>
			<div className='card-header'>
				<h2 className='card-title text-danger my-4'>Generate your NFT</h2>
			</div>
			<div className='card-body upload_form'>
				<label>Asset</label>
				<div className='image_holder'>
					{fileUrl ? (
						<img src={fileUrl} alt='nft' />
					) : (
						<i className='tim-icons icon-cloud-upload-94 upload_icon' />
					)}
				</div>

				<label htmlFor='Asset' className='nft_upload'>
					Upload NFT
				</label>

				<input
					type='file'
					name='Asset'
					id='Asset'
					className='mb-4'
					onChange={onChange}
					accept='image/*'
					style={{ display: 'none' }}
				/>
				<Button className='ml-2' onClick={generate}>
					Generate
				</Button>

				<label htmlFor='asset_name' className='mt-4'>
					Name
				</label>
				<input
					placeholder='...'
					id='asset_name'
					className='form-control mb-4'
					onChange={(e) =>
						updateFormInput({ ...formInput, name: e.target.value })
					}
					required={true}
				/>
				<label htmlFor='asset_description'>Description</label>
				<textarea
					placeholder='...'
					className='form-control mb-4'
					id='asset_description'
					onChange={(e) =>
						updateFormInput({ ...formInput, description: e.target.value })
					}
				/>
				<label htmlFor='asset_price'>Price</label>
				<input
					placeholder='...'
					className='form-control mb-4'
					onChange={(e) =>
						updateFormInput({ ...formInput, price: e.target.value })
					}
					id='asset_price'
				/>

				{/* <img className="rounded mt-4" width="350" src="https://gateway.pinata.cloud/ipfs/QmfAvnM89JrqvdhLymbU5sXoAukEJygSLk9cJMBPTyrmxo/"/> */}
				{/* <button
					onClick={createMarket}
					className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
				>
					Create Digital Asset
				</button> */}
				<Button color='danger' title='Upload your NFT' onClick={createMarket}>
					Save NFT
				</Button>
			</div>
		</div>
	);
};

export default UploadForm;
