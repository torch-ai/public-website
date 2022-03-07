import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from '../styles/modules/inspiration.module.scss';
import { InView } from 'react-intersection-observer';

const Index = ({ setNavColor }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Inspiration | Torch AI</title>
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
											<div className={`${Grid['row']}`}>
												<div className={`${Grid['col_xs_8']}`}>
													<h2>Get Inspired.</h2>
												</div>
											</div>
											{/* <div className={`${Grid['row']} ${Style['gallery']}`}>
												<div className={`${Grid['row']}`}>
													<a href='#logistics'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-logistics']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Logistics</h5>
															</div>
														</div>
													</a>
													<a href='#defense'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-defense']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Defense & Intelligence</h5>
															</div>
														</div>
													</a>
													<a href='#insurance'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-insurance']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Insurance</h5>
															</div>
														</div>
													</a>
													<a href='#marketing'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-marketing']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Marketing</h5>
															</div>
														</div>
													</a>
												</div>

												<div className={`${Grid['row']}`}>
													<a href='#public'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-publicSector']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Public Sector</h5>
															</div>
														</div>
													</a>
													<a href='#manufacturing'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-manufacture']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Manufacturing</h5>
															</div>
														</div>
													</a>
													<a href='#financial'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-financial']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Financial Services</h5>
															</div>
														</div>
													</a>
													<a href='#healthcare'>
														<div
															className={`${Grid['col_xs_8']} ${Grid['col_lg_2']} ${Style['gallery-item']} ${Style['gallery-healthcare']}`}>
															<div className={`${Style['gallery__label']} `}>
																<h5>Healthcare</h5>
															</div>
														</div>
													</a>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>

							<div className={`${Style['logistics']} section`}>
								<div id='logistics' className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['logistics__content']}`}>
										<div className={`${Grid['col_xs_8']}`}>
											<h2>Logistics.</h2>
											<p>
												Everyday banking operations such as loan processing require countless
												full-time resources to review, interpret, and extract relevant information
												from various documents—a slow and expensive process. Nexus automates
												business processes with higher speed and accuracy than otherwise possible.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div
											className={`${Grid['col_xs_8']} ${Grid['col_lg_8']} ${Style['inspiration__button']}`}>
											<Link href='/contact'>
												<a
													role='button'
													className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
													Request Brief
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['defense']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='defense' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['defenses__content']}`}>
											<div className={`${Grid['col_xs_8']}`}>
												<h2>Defense & Intelligence.</h2>
												<p>
													The defense industry contends with many data challenges to include
													countless data, sources, and a myriad of data types. The Nexus platform is
													data agnostic and allows for the ingestion of all data types while also
													allowing each data type to confer with each other. This allows the
													military access to the right data at the right time and informs quick
													tactical and strategic decisions.
												</p>
											</div>
											<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Learn More
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['insurance']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='insurance' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['insurance__content']}`}>
											<div className={`${Grid['col_xs_8']}`}>
												<h2>Insurance.</h2>
												<p>
													Creating new policies or even certificates of insurance (COIs) require
													human labor to review, interpret, and extract relevant information from
													various documents—a slow, error prone, and expensive process. Nexus solves
													this problem by extracting intelligence from unstructured information in
													real time.
												</p>
											</div>
											<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Request Impact Study
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['marketing']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='marketing' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['marketing__content']}`}>
											<div className={`${Grid['col_xs_8']}`}>
												<h2>Marketing.</h2>
												<p>
													Customer engagement and loyalty are imperative for sustainable success,
													yet for the consumer, the noise from digital marketing overwhelms. Get
													through the noise with targeted and tailored interactions. Nexus applies
													machine learning and recommendation mechanisms to keep you ahead.
												</p>
											</div>
										</div>
										<div className={`${Grid['row']}`}>
											<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Request Whitepaper
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['manufacturing']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div
										id='manufacturing'
										className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row-reverse']} ${Style['manufacturing__content']}`}>
											<div className={`${Grid['col_lg_5']} ${Grid['col_xs_8']}`}>
												<h2>Manufacturing.</h2>
												<p>
													With supply chains operating on a global scale, intelligence must be
													aggregated across language, cultural, and national security barriers.
													Nexus implements AI to deploy risk measures across the supply chain,
													including financial distress, foreign influence, sole-source supplier, and
													economic threat.
												</p>
												<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
													<Link href='/contact'>
														<a
															role='button'
															className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
															Find Out More
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['financial']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='financial' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['financial__content']}`}>
											<div className={`${Grid['col_xs_8']}`}>
												<h2>Financial Services.</h2>
												<p>
													Financial firms must acquire deep insights into their customers and
													prospects. Analysts must ingest a vast amount of disparate information to
													understand current and future customer needs. Building this intelligence
													base requires countless manual processes to integrate information from a
													wide variety of sources, both internal and external. Nexus can perform
													this work for you.
												</p>
											</div>
											<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Request Brief
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['publicSector']} section`}>
								<div id='public' className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['publicSector__content']}`}>
										<div className={`${Grid['col_xs_8']}`}>
											<h2>Public Sector.</h2>
											<p>
												Government agencies are charged with serving citizens while also protecting
												data privacy. Many government IT systems contain vast amounts of personally
												identifiable information (PII), and agencies must protect the
												confidentiality, integrity, and availability of this information. Nexus is
												uniquely positioned to tackle government agencies’ data needs while also
												allowing for platform auditability.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
											<Link href='/contact'>
												<a
													role='button'
													className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
													Learn More
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['healthcare']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='healthcare' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['healthcare__content']}`}>
											<div className={`${Grid['col_xs_8']}`}>
												<h2>Healthcare.</h2>
												<p>
													The key to intelligence is gathering, synthesizing, and analyzing
													disparate types of data. In order for analysts to make informed decisions,
													they need access to the right data at the right time. Nexus enables the
													ingestion of vast amounts of data and has the ability to tag data upon
													ingest for further analysis. Our machine learning models build out network
													analyses and help the analyst drill down into the web of information to
													extract pertinent information.
												</p>
											</div>
											<div className={`${Grid['col_xs_8']} ${Grid['col_lg_8']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Request Whitepaper
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Index;
