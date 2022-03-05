import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/blk-design-system-react.css';

function PageHeader() {
	return (
		<div className='page-header header-filter'>
			<div className='squares square1' />
			<div className='squares square2' />
			<div className='squares square3' />
			<div className='squares square4' />
			<div className='squares square5' />
			<div className='squares square6' />
			<div className='squares square7' />
			<Container>
				<div className='content-center brand'>
					<h1 className='h1-seo title_h1'>NFT Hub</h1>
					<h3 className='d-none d-sm-block'>
						Discover, collect, and sell extraordinary NFTs NFT Hub is the
						greatest NFT marketplace
					</h3>

					<Link to='create_upload'>
						<Button
							className='btn-round'
							color='primary'
							type='button'
							style={{ width: '200px' }}
						>
							<span style={{ display: 'inline-flex', alignItems: 'center' }}>
								{' '}
								<i
									className='tim-icons icon-cloud-upload-94'
									style={{ paddingRight: '5px' }}
								/>
								Create
							</span>
						</Button>
					</Link>
					<div className='scroll_field'>
						<div className='scroll_icon'></div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default PageHeader;
