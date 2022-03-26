import { useEffect, useState, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from '../styles/modules/inspiration.module.scss';
import { InView } from 'react-intersection-observer';
import Footer from '../components/footer';
import { gsap } from 'gsap';

const Index = ({ setNavColor }) => {
	const router = useRouter();
	const fadeRef = useRef();
	const fadeRef2 = useRef();
	const buttonRef = useRef();

	useEffect(() => {
		gsap.fromTo(
			buttonRef.current,
			{ opacity: 0, y: '100%', ease: 'power1' },
			{ opacity: 1, y: 0, duration: 1, delay: 1 }
		);
	}, []);

	useEffect(() => {
		gsap.fromTo(
			fadeRef.current,
			{ opacity: 0, y: '-100%', ease: 'power1' },
			{ opacity: 1, y: 0, duration: 0.5, delay: 2 }
		);
	}, []);

	useEffect(() => {
		gsap.fromTo(
			fadeRef2.current,
			{ opacity: 0, y: '-100%', ease: 'power1' },
			{ opacity: 1, y: 0, duration: 0.5, delay: 2 }
		);
	}, []);

	return (
		<>
			<Head>
				<title>What Impact Can Nexus Have in the World? | Torch.AI</title>
			</Head>
			<ReactFullpage
				licenseKey={'A33F98B7-1BF24B82-AB8933EF-A1EC533E'}
				navigation
				verticalCentered={false}
				responsiveWidth={600}
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={`${Style['hero']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} `}>
										<div className={`${Grid['col-xs-12']} ${Style['gallery__title']}`}>
											<h3 ref={buttonRef}>Make your impact.</h3>
										</div>
									</div>
									<div ref={fadeRef} className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-defense']}`}>
											<a href='#defense'>
												<div className={`${Style['gallery__container-content']}`}>
													<p>Defense & Intelligence</p>
												</div>
											</a>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-logistics']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Logistics</p>
											</div>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-insurance']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Insurance</p>
											</div>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-marketing']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Marketing</p>
											</div>
										</div>
									</div>
									<div ref={fadeRef2} className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-financial']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Financial Services</p>
											</div>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-manufacture']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Manufacturing</p>
											</div>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-healthcare']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Healthcare</p>
											</div>
										</div>
										<div
											className={`${Grid['col-lg-2']} ${Grid['col-xs-12']} ${Style['gallery__container-item']} ${Style['gallery-publicSector']}`}>
											<div className={`${Style['gallery__container-content']}`}>
												<p>Public Sector</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div data-anchor='defense' className={`${Style['defense']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='defense' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['defenses__content']}`}>
											<div className={`${Grid['col-xs-12']}`}>
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
											<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							<div data-anchor='logistics' className={`${Style['logistics']} section`}>
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
							<div data-anchor='insurance' className={`${Style['insurance']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='insurance' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['insurance__content']}`}>
											<div className={`${Grid['col-xs-12']}`}>
												<h2>Insurance.</h2>
												<p>
													Creating new policies or even certificates of insurance (COIs) require
													human labor to review, interpret, and extract relevant information from
													various documents—a slow, error prone, and expensive process. Nexus solves
													this problem by extracting intelligence from unstructured information in
													real time.
												</p>
											</div>
											<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							<div data-anchor='marketing' className={`${Style['marketing']} section`}>
								<div id='marketing' className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['marketing__content']}`}>
										<div className={`${Grid['col-xs-12']}`}>
											<h2>Marketing.</h2>
											<p>
												Customer engagement and loyalty are imperative for sustainable success, yet
												for the consumer, the noise from digital marketing overwhelms. Get through
												the noise with targeted and tailored interactions. Nexus applies machine
												learning and recommendation mechanisms to keep you ahead.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col_lg_8']}`}>
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
							<div data-anchor='financial' className={`${Style['financial']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='financial' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['financial__content']}`}>
											<div className={`${Grid['col-xs-12']}`}>
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
											<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							<div data-anchor='manufacturing' className={`${Style['manufacturing']} section`}>
								<div id='manufacturing' className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row-reverse']} ${Style['manufacturing__content']}`}>
										<div className={`${Grid['col-lg-5']} ${Grid['col-xs-12']}`}>
											<h2>Manufacturing.</h2>
											<p>
												With supply chains operating on a global scale, intelligence must be
												aggregated across language, cultural, and national security barriers. Nexus
												implements AI to deploy risk measures across the supply chain, including
												financial distress, foreign influence, sole-source supplier, and economic
												threat.
											</p>
											<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							</div>
							<div data-anchor='healthcare' className={`${Style['healthcare']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='healthcare' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['healthcare__content']}`}>
											<div className={`${Grid['col-xs-12']}`}>
												<h2>Healthcare.</h2>
												<p>
													Artificial Intelligence is revolutionizing healthcare, from diagnosing
													conditions using computer vision in imagery to illuminating risk in a
													medical parts supply chain. Nexus can integrate data across all your
													systems, providing an enhanced patient profile for intelligent
													decisioning.
												</p>
											</div>
											<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							<div data-anchor='publicSector' className={`${Style['publicSector']} section`}>
								<div id='public' className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['publicSector__content']}`}>
										<div className={`${Grid['col-xs-12']}`}>
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
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
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
							<div className={`${Style['cta']} section`}>
								<InView
									as='div'
									onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}>
									<div id='public' className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['row']} ${Style['cta__content']}`}>
											<div className={`${Grid['col-lg-offset-6']} ${Grid['col-xs-12']}`}>
												<h3>Let us help you make data easier to use.</h3>
												<p>It's time to unleash your potential.</p>
											</div>
										</div>
										<div className={`${Grid['row']}`}>
											<div className={`${Grid['col-lg-offset-6']} ${Grid['col-lg-12']}`}>
												<Link href='/contact'>
													<a
														role='button'
														className={router.pathname == '/contact' ? `${Nav.active}` : ''}>
														Let's be friends
													</a>
												</Link>
											</div>
										</div>
									</div>
								</InView>
							</div>
							<Footer />
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Index;
