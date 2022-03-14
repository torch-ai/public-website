import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Image from 'next/image';
import Style from '../styles/modules/partners.module.scss';
import { InView } from 'react-intersection-observer';

import traning from '../img/training.png';
import opportunities from '../img/oppertunities.png';
import tools from '../img/tools.png';

const Index = ({ setNavColor }) => {
	return (
		<>
			<Head>
				<title>
					Torch.AI Partnerships | Transoforming the Potential of Data for Good | Torch.AI
				</title>
			</Head>
			<ReactFullpage
				licenseKey={'A33F98B7-1BF24B82-AB8933EF-A1EC533E'}
				navigation
				verticalCentered={false}
				scrollOverflowReset={true}
				parallax={true}
				parallaxKey={'EF2EC031-21464D53-B55BDB11-5FA39137'}
				parallaxOptions={{ type: 'cover', percentage: 62, property: 'background' }}
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={`${Style['hero']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['content-center']}`}>
											<h1>Welcome to the future.</h1>
											<p>
												Torch.AI's partners build long-term relationships for mutually beneficial
												opportunities.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['value']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['value__content']}`}>
										<div className={`${Grid['col-lg-offset-3']} ${Grid['col-xs-12']}`}>
											<h3>We value our friends. This is more than business for us.</h3>
											<p>
												Torch.AI's strong partner ecosystem is foundational to our mission of
												“Transforming the potential of data for good.” Often, we co-invest in
												solutions alongside our more established partners, but we have also enjoyed
												great success providing support to new and emerging partners.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
											<a href='#' role='button'>
												Request Whitepaper
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['benefitsPartners']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['benefitsPartners__title']}`}>
										<h3>Benefits for our partners.</h3>
									</div>
									<div className={`${Grid['row']} ${Style['benefitsPartners__content']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-3']}`}>
											<div>
												<Image src={traning} />
											</div>
											<h5>Training.</h5>
											<p>
												Access a robust set of training and enablement content. Get friendly with
												our Solution Architects to guarantee success of your program.
											</p>
										</div>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-3']}`}>
											<div>
												<Image src={opportunities} />
											</div>
											<h5>Customer Opportunities.</h5>
											<p>
												Our partners enjoy new sales opportunities, sourced by Torch.AI, and aligned
												to their core competencies.
											</p>
										</div>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-3']}`}>
											<div>
												<Image src={tools} />
											</div>
											<h5>Tools.</h5>
											<p>
												Access a wide variety of bespoke sales, marketing, ML modeling, and other
												technical tools.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['change']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['change__title']}`}>
											<h2>Help us change the world.</h2>
											<p>Interested in becoming a partner?</p>
											<p>
												Contact us for more information{' '}
												<a href='mailto:partners@torch.ai'> partners@torch.ai </a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Index;
