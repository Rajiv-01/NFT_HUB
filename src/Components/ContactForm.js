import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Form,
	FormGroup,
	Input,
	Button,
	UncontrolledTooltip,
} from 'reactstrap';

const ContactForm = () => {
	return (
		<Container>
			<img
				alt='...'
				className='path'
				src={require('../assets/img/path4.png')}
				width='60%'
			/>
			<Row>
				<Col md='6'>
					<Card className='card-plain'>
						<CardHeader>
							<h1 className='profile-title text-left'>Contact</h1>
						</CardHeader>
						<CardBody>
							<Form>
								<Row>
									<Col md='6'>
										<FormGroup>
											<label>Your Name</label>
											<Input placeholder='Your name' type='text' />
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup>
											<label>Email address</label>
											<Input placeholder='Your email' type='email' />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md='6'>
										<FormGroup>
											<label>Phone</label>
											<Input defaultValue='9999999999' type='text' />
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup>
											<label>Company</label>
											<Input defaultValue='NFT-HUB' type='text' />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md='12'>
										<FormGroup>
											<label>Message</label>
											<Input placeholder='Hello there!' type='text' />
										</FormGroup>
									</Col>
								</Row>
								<Button
									className='btn-round float-right'
									color='primary'
									data-placement='right'
									id='tooltip341148792'
									type='button'
								>
									Send text
								</Button>
								<UncontrolledTooltip
									delay={0}
									placement='bottom'
									target='tooltip341148792'
								>
									Can't wait for your message
								</UncontrolledTooltip>
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col className='ml-auto' md='4'>
					<div className='info info-horizontal'>
						<div className='icon icon-primary'>
							<i className='tim-icons icon-square-pin' />
						</div>
						<div className='description'>
							<h4 className='info-title'>Find us at the office</h4>
							<p>
								Pick any place you want, <br />
								Chandigarh, <br />
								India
							</p>
						</div>
					</div>
					<div className='info info-horizontal'>
						<div className='icon icon-primary'>
							<i className='tim-icons icon-mobile' />
						</div>
						<div className='description'>
							<h4 className='info-title'>Give us a ring</h4>
							<p>
								Mr. Anonymous <br />
								+91 9999999999 <br />
								Mon - Fri, 8:00-22:00
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactForm;
