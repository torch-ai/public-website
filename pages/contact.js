import next from 'next';
import React from 'react';
import Image from 'next/image';
import Grid from '../styles/modules/grid.module.scss';
import Navigation from '../components/navigation';
import Style from '../styles/modules/contact.module.scss';
import Static from '../styles/modules/static.module.scss';
import { createClient } from 'contentful';
import JobCard from '../components/JobCard';
import Footer from '../components/footer';
import Link from 'next/link';

const Contact = ({ jobs }) => {
	return (
		<>
			<section className={`${Style['contact__container']}`}>
				<div className={`${Grid['container']} ${Grid['margin_center']}`}>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col-xs-12']} ${Style['contact__title']}`}>
							<h2>Contact Us.</h2>

							<p>Let's talk about how we can unlock your team's productivity.</p>
						</div>
					</div>
					<div className={`${Grid['row']}`}>
						<div className={`${Grid['col-xs-12']}`}>
							<form
								className={`${Style['contact__form']}`}
								action='https://formspree.io/f/mvolablv'
								method='POST'>
								<div>
									<label className={`${Style['contact__names']}`}>
										<input type='text' name='name' placeholder='Full Name' required />
									</label>
								</div>
								<div>
									<label>
										<input type='text' name='company' placeholder='Company' required />
									</label>
								</div>
								<div>
									<label>
										<input type='email' name='email' placeholder='Email' required />
									</label>
								</div>
								<div>
									<label>
										<textarea name='message' placeholder='Message' required></textarea>
									</label>
								</div>
								<div>
									<button type='submit'>Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* <section className={`${Style['contact__information']}`}>
				<div>
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
							<Link href='/careers'>
								<a>Careers </a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>5250 W 116TH Pl Suite 200</li>
						<li>Leawood​, KS, 66211</li>
						<li>+1 (202) 570-7169</li>
					</ul>
				</div>
			</section> */}
		</>
	);
};

export default Contact;
