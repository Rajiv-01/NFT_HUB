import { React, useState } from 'react';
import {
	Card,
	CardImg,
	CardBody,
	CardText,
	CardTitle,
	Col,
	Button,
} from 'reactstrap';

const NFTCard = (props) => {
	const [islike, setislike] = useState(false);

	function toggleLike() {
		setislike(!islike);
	}

	return (
		<div className='NFT'>
			<Card>
				<CardImg alt='Card image cap' src={props.nft.image} top width='100%' />
				<CardBody>
					<CardTitle tag='h2'>{props.nft.name}</CardTitle>

					<CardText>
						<span className='text-muted'>{props.nft.description}</span>
						<span
							style={{ color: '#3fff00', display: 'block', fontSize: '1.2rem' }}
						>
							{props.nft.price} ETH <i className='fab fa-ethereum'></i>
						</span>
					</CardText>
					<div className='buyandlike'>
						{/* <Button onClick={props.increment} color='danger'>
						Like
					</Button> */}
						{!islike ? (
							<i
								className='far fa-heart'
								style={{ color: '#eb3535', fontSize: '1.5rem' }}
								onClick={() => {
									toggleLike();
									props.increment();
								}}
							/>
						) : (
							<i
								className='fas fa-heart'
								style={{ color: '#eb3535', fontSize: '1.5rem' }}
								onClick={toggleLike}
							/>
						)}
						{!props.isProfile && (
							<Button onClick={props.buyNFT} color='danger'>
								Buy
							</Button>
						)}
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default NFTCard;
