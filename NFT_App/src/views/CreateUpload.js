import { React } from 'react';
import LandingNavbar from '../Components/LandingNavbar';
import Footer from '../Components/Footer';
import UploadForm from 'Components/UploadForm';
import { Container } from 'reactstrap';
import GotoTop from 'helperFunctions/GotoTop';
// import classnames from 'classnames';

// import { create as ipfsHttpsClient } from 'ipfs-http-client';
// import CreatePageHeader from 'Components/CreatePageHeader';
// import Web3Modal from 'web3modal';

// import ethers from 'ethers';
// import { nftaddress, nftmarketaddress } from '../config';
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
// import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';
// import { Router } from 'react-router-dom';

// const client = ipfsHttpsClient('https://ipfs.infura.io:5001/api/v0');

function CreateUpload() {
	// const [iconTabs, setIconsTabs] = useState(1);
	return (
		<div className='register-page'>
			<LandingNavbar />
			<div className='wrapper'>
				<Container>
					<div className='content-center '>
						<UploadForm />
					</div>
				</Container>
				{/* <Nav className='nav-tabs-danger upload_tabs' role='tablist' tabs>
					<NavItem style={{ cursor: 'pointer' }}>
						<NavLink
							className={classnames({
								active: iconTabs === 1,
							})}
							onClick={(e) => setIconsTabs(1)}
						>
							<i className='tim-icons icon-cloud-download-93' />
							Create NFT
						</NavLink>
					</NavItem>
					<NavItem style={{ cursor: 'pointer' }}>
						<NavLink
							className={classnames({
								active: iconTabs === 2,
							})}
							onClick={(e) => setIconsTabs(2)}
						>
							<i className='tim-icons icon-cloud-upload-94' />
							Upload your NFT
						</NavLink>
					</NavItem>
				</Nav>

				<TabContent activeTab={'link' + iconTabs}>
					<TabPane tabId='link1'>
						<p>
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits. <br />
							<br />
							Dramatically visualize customer directed convergence without
							revolutionary ROI.
						</p>
					</TabPane>
					<TabPane tabId='link2'>
						<div className='content-center '>
							<UploadForm />
						</div>
					</TabPane>
				</TabContent> */}

				<Footer />
				<GotoTop />
			</div>
		</div>
	);
}

export default CreateUpload;
