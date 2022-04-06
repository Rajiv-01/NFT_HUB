import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

function Footer() {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col md='3'>
						<h1 className='title'>NFT-HUB</h1>
					</Col>
					<Col md='3'>
						<Nav>
							<NavItem>
								<NavLink to='/' tag={Link}>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='/purchase' tag={Link}>
									Purchase
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='/register-page' tag={Link}>
									Register
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='/profile' tag={Link}>
									Profile
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='/create_upload' tag={Link}>
									Create
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col md='3'>
						<Nav>
							<NavItem>
								<NavLink href='https://creative-tim.com/contact-us?ref=blkdsr-footer'>
									Contact Us
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://creative-tim.com/about-us?ref=blkdsr-footer'>
									About Us
								</NavLink>
							</NavItem>
							{/* <NavItem>
								<NavLink href='https://creative-tim.com/blog?ref=blkdsr-footer'>
									Blog
								</NavLink> */}
							{/* </NavItem>
							<NavItem>
								<NavLink href='https://opensource.org/licenses/MIT'>
									License
								</NavLink>
							</NavItem> */}
						</Nav>
					</Col>
					<Col md='3'>
						<h3 className='title'>Follow us:</h3>
						<div className='btn-wrapper profile'>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='#'
								id='tooltip622135962'
								target='_blank'
							>
								<i className='fa fa-twitter' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip622135962'>
								Follow us
							</UncontrolledTooltip>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='#'
								id='tooltip230450801'
								target='_blank'
							>
								<i className='fa fa-facebook-square' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip230450801'>
								Like us
							</UncontrolledTooltip>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='#'
								id='tooltip318450378'
								target='_blank'
							>
								<i className='fa fa-github' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip318450378'>
								Star Us
							</UncontrolledTooltip>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='#'
								id='tooltip318450379'
								target='_blank'
							>
								<i className='fa fa-github' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip318450379'>
								Join
							</UncontrolledTooltip>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
