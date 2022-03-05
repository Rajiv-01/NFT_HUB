import React from 'react';

import LandingNavbar from '../Components/LandingNavbar';
import ProfileCardContainer from 'Components/ProfileCardContainer';
import Footer from '../Components/Footer';
import ProfilePageHeader from 'Components/ProfilePageHeader';
import GotoTop from 'helperFunctions/GotoTop';

const Profile = () => {
	return (
		<div className='profile-page'>
			<LandingNavbar />
			<div className='wrapper'>
				<ProfilePageHeader />
				<div className='main'>
					<ProfileCardContainer />
				</div>

				<Footer />
				<GotoTop />
			</div>
		</div>
	);
};

export default Profile;
