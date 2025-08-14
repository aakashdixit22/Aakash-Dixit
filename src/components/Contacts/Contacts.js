

import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@material-ui/core/styles';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles(() => ({
		input: {
			border: `2px solid ${theme.primary}20`,
			backgroundColor: theme.secondary,
			color: theme.tertiary,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			fontSize: '1rem',
			padding: '12px',
			borderRadius: '8px',
			marginBottom: '15px',
			width: '100%',
			transition: 'all 0.3s ease',
			'@media (min-width: 768px)': {
				fontSize: '1.05rem',
				padding: '14px',
				borderRadius: '10px',
				marginBottom: '18px',
			},
			'@media (min-width: 1024px)': {
				fontSize: '1.1rem',
				padding: '15px',
				borderRadius: '12px',
				marginBottom: '20px',
			},
			'&:focus': {
				border: `2px solid ${theme.primary}`,
				boxShadow: `0 0 0 4px ${theme.primary}20`,
				outline: 'none',
			},
		},
		message: {
			border: `2px solid ${theme.primary}20`,
			backgroundColor: theme.secondary,
			color: theme.tertiary,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			fontSize: '1.1rem',
			padding: '15px',
			borderRadius: '12px',
			marginBottom: '20px',
			minHeight: '150px',
			transition: 'all 0.3s ease',
			'&:focus': {
				border: `2px solid ${theme.primary}`,
				boxShadow: `0 0 0 4px ${theme.primary}20`,
				outline: 'none',
			},
		},
		submitBtn: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			border: 'none',
			borderRadius: '12px',
			padding: '16px 32px',
			fontWeight: 700,
			fontSize: '1.1rem',
			cursor: 'pointer',
			transition: 'all 0.3s ease',
			letterSpacing: '1px',
			position: 'relative',
			overflow: 'hidden',
			'&:hover': {
				transform: 'translateY(-2px)',
				boxShadow: `0 10px 20px ${theme.primary}20`,
			},
			'&:active': {
				transform: 'translateY(0)',
				boxShadow: `0 5px 10px ${theme.primary}20`,
			},
		},
		socialIcon: {
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '20px',
			backgroundColor: theme.secondary,
			color: theme.primary,
			margin: '0 8px',
			border: `2px solid ${theme.primary}40`,
			transition: 'all 0.3s ease',
			'@media (min-width: 768px)': {
				width: '42px',
				height: '42px',
				fontSize: '21px',
				margin: '0 10px',
			},
			'@media (min-width: 1024px)': {
				width: '45px',
				height: '45px',
				fontSize: '22px',
				margin: '0 12px',
			},
			'&:hover': {
				backgroundColor: theme.primary,
				color: theme.secondary,
				transform: 'translateY(-3px)',
				boxShadow: `0 10px 20px ${theme.primary}20`,
			},
		},
	}));
	const classes = useStyles();

	const handleContactForm = (e) => {
		e.preventDefault();
		if (name && email && message) {
			if (isEmail(email)) {
				setName('');
				setEmail('');
				setMessage('');
				setErrMsg('Message sent!');
				setOpen(true);
			} else {
				setErrMsg('Invalid email');
				setOpen(true);
			}
		} else {
			setErrMsg('Please fill all fields');
			setOpen(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};

	return (
		<div className='contacts' id='contacts' 
			style={{ 
				background: theme.secondary
			}}
		>
			<div 
				className="contacts-form-container"
				style={{ 
					background: theme.secondary,
					boxShadow: `0 20px 40px ${theme.primary}10`,
					border: `2px solid ${theme.primary}10`
				}}
			>
				<h2 style={{ 
					color: theme.primary,
					textAlign: 'left',
					marginBottom: '20px',
					fontWeight: 800,
					fontSize: '2rem',
					letterSpacing: '1px',
					'@media (min-width: 768px)': {
						fontSize: '2.2rem',
						marginBottom: '25px'
					},
					'@media (min-width: 1024px)': {
						fontSize: '2.5rem',
						marginBottom: '30px'
					}
				}}>Let's Talk</h2>
				<p style={{
					color: theme.tertiary,
					marginBottom: '30px',
					fontSize: '1rem',
					lineHeight: '1.6',
					opacity: '0.85',
					'@media (min-width: 768px)': {
						fontSize: '1.05rem',
						marginBottom: '35px'
					},
					'@media (min-width: 1024px)': {
						fontSize: '1.1rem',
						marginBottom: '40px'
					}
				}}>Have a project in mind? Let's create something awesome together.</p>
				<form onSubmit={handleContactForm} style={{ display: 'flex', flexDirection: 'column' }}>
					<input
						className={classes.input}
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className={classes.input}
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						className={classes.message}
						placeholder='Message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type='submit' className={classes.submitBtn}>Send</button>
				</form>
				<div style={{ textAlign: 'center', marginTop: '24px' }}>
					{socialsData.github && (
						<a href={socialsData.github} target='_blank' rel='noreferrer' className={classes.socialIcon}>
							<FaGithub />
						</a>
					)}
					{socialsData.linkedIn && (
						<a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className={classes.socialIcon}>
							<FaLinkedinIn />
						</a>
					)}
					{socialsData.instagram && (
						<a href={socialsData.instagram} target='_blank' rel='noreferrer' className={classes.socialIcon}>
							<FaInstagram />
						</a>
					)}
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
				>
					<SnackbarContent
						action={
							<IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
								<CloseIcon fontSize='small' />
							</IconButton>
						}
						style={{ backgroundColor: theme.tertiary, color: theme.secondary, fontFamily: 'var(--primaryFont)' }}
						message={errMsg}
					/>
				</Snackbar>
			</div>

			{/* Right side illustration */}
			<div className="contacts-illustration">
				<div style={{
					position: 'relative',
					width: '100%',
					aspectRatio: '1',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<svg width="100%" height="100%" viewBox="0 0 500 500">
						<defs>
							<linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stopColor={theme.primary} stopOpacity="0.1"/>
								<stop offset="100%" stopColor={theme.primary} stopOpacity="0.05"/>
							</linearGradient>
							<clipPath id="screenClip">
								<rect x="50" y="50" width="400" height="300" rx="20"/>
							</clipPath>
						</defs>
						
						{/* Computer Stand */}
						<path d="M200,350 L300,350 L320,400 L180,400" 
							fill={theme.primary} 
							opacity="0.1" 
							stroke={theme.primary} 
							strokeWidth="2"/>

						{/* Monitor Frame */}
						<rect x="50" y="50" width="400" height="300" rx="20"
							fill={theme.secondary}
							stroke={theme.primary}
							strokeWidth="3"/>

						{/* Screen Content */}
						<g clipPath="url(#screenClip)">
							<rect x="50" y="50" width="400" height="300"
								fill="url(#screenGlow)"/>

							{/* Code Lines with syntax highlighting */}
							<g className="code-container" style={{ animation: 'slideUp 15s linear infinite' }}>
								<text x="70" y="160" fill={theme.primary} opacity="0.9" fontSize="14">
									<tspan x="70" dy="0">&lt;!DOCTYPE html&gt;</tspan>
									<tspan x="70" dy="25">&lt;html&gt;</tspan>
									<tspan x="70" dy="25">&lt;title&gt;Portfolio&lt;/title&gt;</tspan>
									<tspan x="70" dy="25">&lt;body&gt;</tspan>
									<tspan x="90" dy="25">&lt;h1&gt;Hello!&lt;/h1&gt;</tspan>
									<tspan x="70" dy="25">&lt;/body&gt;</tspan>
									<tspan x="70" dy="25">&lt;/html&gt;</tspan>
								</text>
							</g>

							{/* Active typing cursor */}
							<rect 
								className="cursor"
								x="70" 
								y="310" 
								width="2" 
								height="16"
								fill={theme.primary}
								opacity="0.8"
								style={{ animation: 'blink 1s ease infinite' }}
							/>
						</g>

						{/* Decorative Elements */}
						<g className="particles">
							{[...Array(8)].map((_, i) => (
								<circle key={i}
									cx={100 + Math.random() * 300}
									cy={50 + Math.random() * 300}
									r={2 + Math.random() * 3}
									fill={theme.primary}
									opacity={0.2 + Math.random() * 0.3}
									style={{
										animation: `float ${2 + Math.random() * 3}s ease-in-out infinite alternate`
									}}
								/>
							))}
						</g>

						{/* Camera */}
						<circle cx="250" cy="65" r="4" 
							fill={theme.primary} 
							opacity="0.5"/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Contacts;