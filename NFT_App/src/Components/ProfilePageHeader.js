import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProfilePageHeader = () => {
	return (
		<div className='page-header'>
			<img alt='...' className='dots' src={require('../assets/img/dots.png')} />
			<img
				alt='...'
				className='path'
				src={require('../assets/img/path4.png')}
			/>
			<Container>
				<div className='content-center'>
					Page Header
					<Link to='/'>
						<Button>Back</Button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default ProfilePageHeader;
