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
				<title>Partners | Torch AI</title>
			</Head>
			<ReactFullpage
				navigation
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={`${Style['hero']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_xs_8']} ${Style['content-center']}`}>
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
										<div className={`${Grid['col_xs_8']}`}>
											<h2>We value our friends. This is more than business for us.</h2>
											<p>
												Torch.AI's strong partner ecosystem is foundational to our mission of
												“Transforming the potential of data for good.” Often, we co-invest in
												solutions alongside our more established partners, but we have also enjoyed
												great success providing support to new and emerging partners.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
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
										<h2>Benefits for our partners.</h2>
									</div>
									<div className={`${Grid['row']} ${Style['benefitsPartners__content']}`}>
										<div className={`${Grid['col_xs_8']} ${Grid['col_lg_2']}`}>
											<div>
												<Image src={traning} />
											</div>
											<h4>Training.</h4>
											<p>
												Access a robust set of training and enablement content. Get friendly with
												our Solution Architects to guarantee success of your program.
											</p>
										</div>
										<div className={`${Grid['col_xs_8']} ${Grid['col_lg_2']}`}>
											<div>
												<Image src={opportunities} />
											</div>
											<h4>Customer Opportunities.</h4>
											<p>
												Our partners enjoy new sales opportunities, sourced by Torch.AI, and aligned
												to their core competencies.
											</p>
										</div>
										<div className={`${Grid['col_xs_8']} ${Grid['col_lg_2']}`}>
											<div>
												<Image src={tools} />
											</div>
											<h4>Tools.</h4>
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
										<div className={`${Grid['col_xs_8']} ${Style['change__title']}`}>
											<h2>Help us change the world.</h2>
											<p>Interested in becoming a partner?</p>
											<p>Contact us for more information partners@torch.ai</p>
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
