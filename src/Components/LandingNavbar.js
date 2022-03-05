import React from 'react';
import { Link } from 'react-router-dom';

import {
	Button,
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	FormGroup,
	Input,
	UncontrolledTooltip,
} from 'reactstrap';

function LandingNavbar() {
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [collapseOut, setCollapseOut] = React.useState('');
	const [color, setColor] = React.useState('navbar-transparent');

	React.useEffect(() => {
		window.addEventListener('scroll', changeColor);
		return function cleanup() {
			window.removeEventListener('scroll', changeColor);
		};
	}, []);
	const changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			setColor('bg-info');
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			setColor('navbar-transparent');
		}
	};
	const toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open');
		setCollapseOpen(!collapseOpen);
	};
	const onCollapseExiting = () => {
		setCollapseOut('collapsing-out');
	};
	const onCollapseExited = () => {
		setCollapseOut('');
	};

	return (
		<Navbar className={'fixed-top ' + color} color-on-scroll='100' expand='lg'>
			<Container>
				<div className='navbar-translate'>
					<NavbarBrand to='/' tag={Link} id='navbar-brand'>
						<span>NFT-HUB </span>
					</NavbarBrand>
					<UncontrolledTooltip placement='bottom' target='navbar-brand'>
						Create NFT at one click
					</UncontrolledTooltip>

					<button
						aria-expanded={collapseOpen}
						className='navbar-toggler navbar-toggler'
						onClick={toggleCollapse}
					>
						<span className='navbar-toggler-bar bar1' />
						<span className='navbar-toggler-bar bar2' />
						<span className='navbar-toggler-bar bar3' />
					</button>
				</div>

				<Collapse
					className={'justify-content-end ' + collapseOut}
					navbar
					isOpen={collapseOpen}
					onExiting={onCollapseExiting}
					onExited={onCollapseExited}
				>
					<div className='navbar-collapse-header'>
						<Row>
							<Col className='collapse-brand' xs='6'>
								<a href='/' onClick={(e) => e.preventDefault()}>
									<h2>NFT HUB</h2>
								</a>
							</Col>
							<Col className='collapse-close text-right' xs='6'>
								<button
									aria-expanded={collapseOpen}
									className='navbar-toggler'
									onClick={toggleCollapse}
								>
									<i className='tim-icons icon-simple-remove' />
								</button>
							</Col>
						</Row>
					</div>
					<Nav navbar>
						<NavItem>
							<FormGroup className='searchbox'>
								<i className='fa fa-search' style={{ marginLeft: '7.5px' }} />

								<Input defaultValue='' placeholder='Serch items' type='text' />
							</FormGroup>
						</NavItem>
						{/* <NavItem className='active'>
							<NavLink href='#pablo' onClick={(e) => e.preventDefault()}>
								<i className='tim-icons icon-world' />
								Discover
							</NavLink>
						</NavItem> */}
						<UncontrolledDropdown nav>
							<DropdownToggle
								caret
								color='default'
								data-toggle='dropdown'
								href='#pablo'
								nav
								onClick={(e) => e.preventDefault()}
							>
								<i className='fa fa-cogs d-lg-none d-xl-none' />
								Getting started
							</DropdownToggle>
							<DropdownMenu className='dropdown-with-icons'>
								<DropdownItem tag={Link} to='/create_upload'>
									<i className='tim-icons icon-upload' />
									Create/Upload
								</DropdownItem>

								<DropdownItem tag={Container} className='social_icons'>
									<Link to='https://instagram.com' title='Follow on Insta'>
										Insta
									</Link>
									<Link to='https://instagram.com' title='Follow on Insta'>
										G
									</Link>
									<Link to='https://instagram.com' title='Follow on Insta'>
										twi
									</Link>
									<Link to='https://instagram.com' title='Follow on Insta'>
										you
									</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<Link to='/profile' className='nav-link'>
								<i className='tim-icons icon-single-02' />
								Profile
							</Link>
						</NavItem>
						{/* <NavItem>
							<NavLink href='#pablo' onClick={(e) => e.preventDefault()}>
								<i className='tim-icons icon-wallet-43' />
								Wallet
							</NavLink>
						</NavItem> */}
						{/* <NavItem className='p-0'>
							<NavLink
								data-placement='bottom'
								href='https://twitter.com/CreativeTim'
								rel='noopener noreferrer'
								target='_blank'
								title='Follow us on Twitter'
							>
								<i className='fab fa-twitter' />
								<p className='d-lg-none d-xl-none'>Twitter</p>
							</NavLink>
						</NavItem>
						<NavItem className='p-0'>
							<NavLink
								data-placement='bottom'
								href='https://www.facebook.com/CreativeTim'
								rel='noopener noreferrer'
								target='_blank'
								title='Like us on Facebook'
							>
								<i className='fab fa-facebook-square' />
								<p className='d-lg-none d-xl-none'>Facebook</p>
							</NavLink>
						</NavItem>
						<NavItem className='p-0'>
							<NavLink
								data-placement='bottom'
								href='https://www.instagram.com/CreativeTimOfficial'
								rel='noopener noreferrer'
								target='_blank'
								title='Follow us on Instagram'
							>
								<i className='fab fa-instagram' />
								<p className='d-lg-none d-xl-none'>Instagram</p>
							</NavLink>
						</NavItem> */}
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
}

export default LandingNavbar;
