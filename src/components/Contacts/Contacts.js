/*
====================
Original Contacts.js (commented for reference)
====================
// ...existing code...
*/

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
			fontSize: '1.1rem',
			padding: '15px',
			borderRadius: '12px',
			marginBottom: '20px',
			transition: 'all 0.3s ease',
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
			width: '45px',
			height: '45px',
			borderRadius: '50%',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '22px',
			backgroundColor: theme.secondary,
			color: theme.primary,
			margin: '0 12px',
			border: `2px solid ${theme.primary}40`,
			transition: 'all 0.3s ease',
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
				background: theme.secondary,
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '40px 80px',
				gap: '80px'
			}}
		>
			<div 
				style={{ 
					background: theme.secondary,
					borderRadius: '24px',
					padding: '48px',
					width: '45%',
					maxWidth: '600px',
					boxShadow: `0 20px 40px ${theme.primary}10`,
					border: `2px solid ${theme.primary}10`,
				}}
			>
				<h2 style={{ 
					color: theme.primary,
					textAlign: 'left',
					marginBottom: '30px',
					fontWeight: 800,
					fontSize: '2.5rem',
					letterSpacing: '1px'
				}}>Let's Talk</h2>
				<p style={{
					color: theme.tertiary,
					marginBottom: '40px',
					fontSize: '1.1rem',
					lineHeight: '1.6',
					opacity: '0.85'
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
			<div style={{
				width: '45%',
				maxWidth: '600px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative'
			}}>
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
// import React, { useContext, useState } from 'react';
// import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import axios from 'axios';
// import isEmail from 'validator/lib/isEmail';
// import { makeStyles } from '@material-ui/core/styles';
// import {
    
//     FaLinkedinIn,
//     FaGithub,
    
//     FaInstagram,
    
// } from 'react-icons/fa';
// import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
// import { FiPhone, FiAtSign } from 'react-icons/fi';
// import { HiOutlineLocationMarker } from 'react-icons/hi';

// import { ThemeContext } from '../../contexts/ThemeContext';

// import { socialsData } from '../../data/socialsData';
// import { contactsData } from '../../data/contactsData';
// import './Contacts.css';

// function Contacts() {
//     const [open, setOpen] = useState(false);

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const [success, setSuccess] = useState(false);
//     const [errMsg, setErrMsg] = useState('');

//     const { theme } = useContext(ThemeContext);

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };

//     const useStyles = makeStyles((t) => ({
//         input: {
//             border: `4px solid ${theme.primary80}`,
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.tertiary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 500,
//             transition: 'border 0.2s ease-in-out',
//             '&:focus': {
//                 border: `4px solid ${theme.primary600}`,
//             },
//         },
//         message: {
//             border: `4px solid ${theme.primary80}`,
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.tertiary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 500,
//             transition: 'border 0.2s ease-in-out',
//             '&:focus': {
//                 border: `4px solid ${theme.primary600}`,
//             },
//         },
//         label: {
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.primary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 600,
//             fontSize: '0.9rem',
//             padding: '0 5px',
//             transform: 'translate(25px,50%)',
//             display: 'inline-flex',
//         },
//         socialIcon: {
//             width: '45px',
//             height: '45px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '21px',
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             transition: '250ms ease-in-out',
//             '&:hover': {
//                 transform: 'scale(1.1)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//         detailsIcon: {
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             borderRadius: '50%',
//             width: '45px',
//             height: '45px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '23px',
//             transition: '250ms ease-in-out',
//             flexShrink: 0,
//             '&:hover': {
//                 transform: 'scale(1.1)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//         submitBtn: {
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             transition: '250ms ease-in-out',
//             '&:hover': {
//                 transform: 'scale(1.08)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//     }));

//     const classes = useStyles();

//     const handleContactForm = (e) => {
//         e.preventDefault();

//         if (name && email && message) {
//             if (isEmail(email)) {
//                 const responseData = {
//                     name: name,
//                     email: email,
//                     message: message,
//                 };

//                 axios.post(contactsData.sheetAPI, responseData).then((res) => {
//                     console.log('success');
//                     setSuccess(true);
//                     setErrMsg('');

//                     setName('');
//                     setEmail('');
//                     setMessage('');
//                     setOpen(false);
//                 });
//             } else {
//                 setErrMsg('Invalid email');
//                 setOpen(true);
//             }
//         } else {
//             setErrMsg('Enter all the fields');
//             setOpen(true);
//         }
//     };

//     return (
//         <div
//             className='contacts'
//             id='contacts'
//             style={{ backgroundColor: theme.secondary }}
//         >
//             <div className='contacts--container'>
//                 <h1 style={{ color: theme.primary }}>Contacts</h1>
//                 <div className='contacts-body'>
//                     <div className='contacts-form'>
//                         <form onSubmit={handleContactForm}>
//                             <div className='input-container'>
//                                 <label htmlFor='Name' className={classes.label}>
//                                     Name
//                                 </label>
//                                 <input
//                                     placeholder='John Doe'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     type='text'
//                                     name='Name'
//                                     className={`form-input ${classes.input}`}
//                                 />
//                             </div>
//                             <div className='input-container'>
//                                 <label
//                                     htmlFor='Email'
//                                     className={classes.label}
//                                 >
//                                     Email
//                                 </label>
//                                 <input
//                                     placeholder='John@doe.com'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     type='email'
//                                     name='Email'
//                                     className={`form-input ${classes.input}`}
//                                 />
//                             </div>
//                             <div className='input-container'>
//                                 <label
//                                     htmlFor='Message'
//                                     className={classes.label}
//                                 >
//                                     Message
//                                 </label>
//                                 <textarea
//                                     placeholder='Type your message....'
//                                     value={message}
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     type='text'
//                                     name='Message'
//                                     className={`form-message ${classes.message}`}
//                                 />
//                             </div>

//                             <div className='submit-btn'>
//                                 <button
//                                     type='submit'
//                                     className={classes.submitBtn}
//                                 >
//                                     <p>{!success ? 'Send' : 'Sent'}</p>
//                                     <div className='submit-icon'>
//                                         <AiOutlineSend
//                                             className='send-icon'
//                                             style={{
//                                                 animation: !success
//                                                     ? 'initial'
//                                                     : 'fly 0.8s linear both',
//                                                 position: success
//                                                     ? 'absolute'
//                                                     : 'initial',
//                                             }}
//                                         />
//                                         <AiOutlineCheckCircle
//                                             className='success-icon'
//                                             style={{
//                                                 display: !success
//                                                     ? 'none'
//                                                     : 'inline-flex',
//                                                 opacity: !success ? '0' : '1',
//                                             }}
//                                         />
//                                     </div>
//                                 </button>
//                             </div>
//                         </form>
//                         <Snackbar
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'center',
//                             }}
//                             open={open}
//                             autoHideDuration={4000}
//                             onClose={handleClose}
//                         >
//                             <SnackbarContent
//                                 action={
//                                     <React.Fragment>
//                                         <IconButton
//                                             size='small'
//                                             aria-label='close'
//                                             color='inherit'
//                                             onClick={handleClose}
//                                         >
//                                             <CloseIcon fontSize='small' />
//                                         </IconButton>
//                                     </React.Fragment>
//                                 }
//                                 style={{
//                                     backgroundColor: theme.primary,
//                                     color: theme.secondary,
//                                     fontFamily: 'var(--primaryFont)',
//                                 }}
//                                 message={errMsg}
//                             />
//                         </Snackbar>
//                     </div>

//                     <div className='contacts-details'>
//                         <a
//                             href={`mailto:${contactsData.email}`}
//                             className='personal-details'
//                         >
//                             <div className={classes.detailsIcon}>
//                                 <FiAtSign />
//                             </div>
//                             <p style={{ color: theme.tertiary }}>
//                                 {contactsData.email}
//                             </p>
//                         </a>
//                         <a
//                             href={`tel:${contactsData.phone}`}
//                             className='personal-details'
//                         >
//                             <div className={classes.detailsIcon}>
//                                 <FiPhone />
//                             </div>
//                             <p style={{ color: theme.tertiary }}>
//                                 {contactsData.phone}
//                             </p>
//                         </a>
                        
//                         <div className='socialmedia-icons'>
                           
//                             {socialsData.github && (
//                                 <a
//                                     href={socialsData.github}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaGithub aria-label='GitHub' />
//                                 </a>
//                             )}
//                             {socialsData.linkedIn && (
//                                 <a
//                                     href={socialsData.linkedIn}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaLinkedinIn aria-label='LinkedIn' />
//                                 </a>
//                             )}
//                             {socialsData.instagram && (
//                                 <a
//                                     href={socialsData.instagram}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaInstagram aria-label='Instagram' />
//                                 </a>
//                             )}
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <img
//                 src={theme.contactsimg}
//                 alt='contacts'
//                 className='contacts--img'
//             />
//         </div>
//     );
// }

// export default Contacts;

