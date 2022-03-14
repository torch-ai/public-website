import Grid from '../styles/modules/grid.module.scss';
import Template from '../styles/modules/template.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import logo from '../img/logo.svg';

import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer id='contact' className={`${Template.footer} section`}>
			<div
				className={`${Grid.margin_center} ${Grid.container} ${Grid.row}  ${Template.footer__title}`}>
				<h3>Get in Touch With Us.</h3>
			</div>
			<div
				className={`${Grid.margin_center} ${Grid.container} ${Grid.row} ${Grid['gap']} ${Template.footer__content}`}>
				<div className={`${Template['footer__form-container']} flow`}>
					<div className={`${Template.footer__text}`}>
						<p>Let's talk about how we can unlock your team's productivity.</p>
					</div>

					<form
						action='https://formspree.io/f/mvolablv'
						method='POST'
						className={`${Template['footer__form']} flow`}>
						<div className={`${Template['footer__form-name']} ${Grid.row_wrapoff}`}>
							<input
								placeholder='First Name'
								id='name'
								type='text'
								autoComplete='name'
								required
								name='firstName'
							/>
							<input
								placeholder='Last Name'
								name='lastName'
								id='name'
								type='text'
								autoComplete='name'
								required
							/>
						</div>
						<div className={`${Template['footer__form-info']} ${Grid.row_wrapoff} `}>
							<input placeholder='Company' id='name' type='text' autoComplete='name' required />

							<input
								placeholder='Email Address'
								id='name'
								type='text'
								autoComplete='name'
								name='email'
								required
							/>
						</div>
						<div
							className={`${Template['footer__form-submit']} ${Grid['row']} ${Grid['gap']} flow`}>
							<button className={`${Template['footer__form-button']}`} type='submit'>
								Send
							</button>
							<div className={`${Template.socialIcons} ${Grid['row']} `}>
								<a href='https://www.linkedin.com/company/torchai' target='_blank'>
									<FontAwesomeIcon icon={faLinkedinIn} size='2x' />
								</a>
								<a href='https://twitter.com/torch_ai' target='_blank'>
									<FontAwesomeIcon icon={faTwitter} size='2x' />
								</a>
							</div>
						</div>
					</form>
				</div>

				<div className={`${Template['footer__terms']}`}>
					<ul>
						<li>
							<Link href='/termsofservice'>
								<a> Terms of Service </a>
							</Link>
						</li>
						<li>
							<Link href='/privacypolicy'>
								<a>Privacy Policy </a>
							</Link>
						</li>
						<li>
							<Link href='/legal'>
								<a>Legal</a>
							</Link>
						</li>
						<li>
							<Link href='/careers'>
								<a>Careers </a>
							</Link>
						</li>
					</ul>
				</div>

				<div className={`${Template['footer__address']}`}>
					<ul>
						<li>5250 W 116TH Pl Suite 200</li>
						<li>Leawood​, KS, 66211</li>
						<li>+1 (202) 570-7169</li>
					</ul>
				</div>
			</div>

			<div
				className={`${Template['footer__copy']} ${Grid.margin_center} ${Grid.container} ${Grid['between_xs']} ${Grid.row}`}>
				<Image className={`${Template.logo}`} src={logo} alt='The logo of Torch.ai' />
				<p>Copyright © 2022 Torch.AI</p>
			</div>
		</footer>
	);
};

export default Footer;
