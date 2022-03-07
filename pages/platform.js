import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Image from 'next/image';
import Benefits from '../components/benefits';
import Features from '../components/features';
import Style from '../styles/modules/platform.module.scss';
import { InView } from 'react-intersection-observer';

import datamodel1 from '../img/datamodel1.svg';
import datamodel2 from '../img/datamodel2.svg';
import datamodel3 from '../img/datamodel3.svg';

const Index = ({ setNavColor }) => {
	return (
		<>
			<Head>
				<title>Platform | Torch AI</title>
			</Head>
			<ReactFullpage
				navigation
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={` ${Style['hero']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8']} ${Style['content-center']}`}>
										<h2>Nexus™. The highest-performance data processing platform ever built.</h2>
										<div className={`${Style['circle-icon']}`}>
											<svg
												width='50'
												height='50'
												viewBox='0 0 80 80'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<circle cx='40' cy='40' r='39.5' stroke='white' />
												<path
													d='M54.3773 40.4767L54.3796 40.479L55.2318 41.3243C55.4056 41.5037 55.5015 41.7425 55.5 41.9899C55.4985 42.2382 55.399 42.4769 55.2216 42.6545C55.2215 42.6546 55.2213 42.6547 55.2212 42.6548L41.1742 56.6368C40.9941 56.811 40.7516 56.9092 40.4983 56.9092C40.2451 56.9092 40.0027 56.811 39.8226 56.6369L25.7898 42.6569C25.7893 42.6565 25.7889 42.6561 25.7885 42.6557C25.6127 42.4771 25.515 42.2383 25.515 41.9903C25.515 41.7426 25.6126 41.504 25.7881 41.3255C25.7887 41.3249 25.7892 41.3244 25.7898 41.3238L26.6415 40.4791L26.6438 40.4767C26.7312 40.3888 26.8356 40.3188 26.951 40.271C27.0664 40.2231 27.1904 40.1984 27.3156 40.1984C27.4409 40.1984 27.5649 40.2231 27.6803 40.271C27.7956 40.3188 27.8999 40.3888 27.9874 40.4767L27.9889 40.4782L38.0928 50.549L38.9458 51.3991L38.9458 50.1948L38.9458 24.4423C38.9458 24.1938 39.0453 23.9546 39.2238 23.7775C39.4024 23.6004 39.6454 23.5001 39.8997 23.5001L41.1214 23.5001C41.3757 23.5001 41.6187 23.6004 41.7973 23.7775C41.9758 23.9546 42.0753 24.1938 42.0753 24.4423L42.0753 50.1948L42.0753 51.3991L42.9283 50.549L53.0322 40.4782L53.0337 40.4767C53.1212 40.3888 53.2255 40.3188 53.3408 40.271C53.4562 40.2231 53.5802 40.1984 53.7055 40.1984C53.8307 40.1984 53.9547 40.2231 54.0701 40.271C54.1855 40.3188 54.2899 40.3888 54.3773 40.4767Z'
													fill='white'
													stroke='white'
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['engines']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']}`}>
											<div
												className={`${Grid['col_lg_8']} ${Grid['col_xs_8']} ${Grid['margin_center']}`}>
												<h3>
													Nexus™ is a transparent and composable software bridging three powerful
													capabilities:
												</h3>
											</div>
										</div>
										<div className={`${Grid['row']} ${Style['engines__models']}`}>
											<div className={`${Grid['col_lg_2']} ${Grid['col_xs_8']}`}>
												<div>
													<Image src={datamodel1} />
												</div>
												<div>
													<h4>Ingest</h4>
													<p>
														The Nexus Ingest capability extracts meaningful content from structured,
														semi-structured, and unstructured input files. It supports any type of
														data, any format, any system, any structure, in the cloud or on
														premises. Nexus leverages machine learning algorithms to process data
														instantly, before it's stored anywhere.
													</p>
												</div>
											</div>
											<div className={`${Grid['col_lg_2']} ${Grid['col_xs_8']}`}>
												<div>
													<Image src={datamodel2} />
												</div>
												<div>
													<h4>Link</h4>
													<p>
														The Nexus Link capability securely connects your data sources and
														business systems to enhance productivity. It seamlessly plugs into your
														systems via composable microservices, so your investments in
														infrastructure don’t go to waste. Nexus enriches your data, by bringing
														information from external sources—like social media and geography.
													</p>
												</div>
											</div>
											<div className={`${Grid['col_lg_2']} ${Grid['col_xs_8']}`}>
												<div>
													<Image src={datamodel3} />
												</div>
												<div>
													<h4>Illuminate</h4>
													<p>
														The Nexus Illuminate capability graphs the relationships between all the
														atomic units in your data, creating a layer of knowledge that brings
														hidden context and correlations into view.  It retains attribution and
														lineage to the authoritative data for secure, governed, and trusted data
														discovery. This capability provides a deeper, ontological understanding
														of your data.
													</p>
												</div>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['datalake']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['datalake__content']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Your uncle's large scale data processor just became obsolete.</h3>
											<p>
												Nexus software's ground-breaking compute performance, up to 10.7x faster
												than the leading data lake software, enables your organization to interact
												directly with the entirety of your authoritative data.
											</p>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<div className={`${Style['datalake__title']}`}>
												<h4>Up to </h4>
												<h1>10.7x</h1>
												<h4>faster compute performance.</h4>
											</div>
											<p>
												<span className={`${Style['datalake__bold']}`}>Nexus:</span>&nbsp; 3.78 GB
												per 1 second 32-core CPU
											</p>
											<p>
												<span className={`${Style['datalake__bold']}`}>Nearest peer:</span>
												&nbsp; 0.345 GB per 1 second 32-core CPU (built on Apache Spark)
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['code']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']}`}>
											<div className={`${Grid['col_lg_5']}${Grid['col_xs_8']}`}>
												<h2>As Code</h2>
												<p>
													Securely provision and orchestrate multiple _____ (data pipes) at any
													scale.
												</p>
												<p>
													Composable microservices simplify the building, deployment, and management
													of cross-organizational computing services.
												</p>
												<p>
													Rapid deployment provides your customers value within a matter of hours.
												</p>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['benefits']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h2>Features</h2>
											<Features />
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h2>Benefits</h2>
											<Benefits />
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
