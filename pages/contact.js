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
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';

const Contact = ({ jobs, setNavColor }) => {
	return (
		<>
			<Head>
				<title>Contact Us | Unlock Your Potential | Talk to Us | Torch.AI</title>
			</Head>
			<section className={`${Style['contact__container']}`}>
				<InView as='div' onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
					<div className={`${Grid['container']} ${Grid['margin_center']}`}>
						<div className={`${Grid['row']}`}>
							<div className={`${Grid['col-xs-12']} ${Style['contact__title']}`}>
								<h2>Contact Us.</h2>

								<p>Find out how Nexus can unlock your productivity.</p>
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
				</InView>
			</section>
			<Footer />
		</>
	);
};

export default Contact;
