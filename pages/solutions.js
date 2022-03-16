import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Accor from '../styles/modules/accordian.module.scss';
import Image from 'next/image';
import Style from '../styles/modules/solution.module.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { InView } from 'react-intersection-observer';
import { gsap } from 'gsap/dist/gsap';

const Solutions = ({ setNavColor }) => {
	const fadeRef = useRef();
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

	return (
		<>
			<Head>
				<title>Drive Value from Data with a System of Intelligence | Torch.AI</title>
			</Head>
			<section>
				<InView as='span' onChange={(inView, entry) => setNavColor(inView ? 'white' : 'white')}>
					<Parallax pages={5} className={`${Style['wrapper']}`}>
						<ParallaxLayer className={`${Style['sol-title']}`} offset={0} speed={2.5}>
							<div className={`${Style['container']}`}>
								<h2>A system of intelligence across your organization. </h2>
								<p>Drive value from data across all enterprise functions.</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer offset={1} speed={0.9} className={`${Style['sol-background']}`} />

						{/* Infrastructure */}
						<ParallaxLayer
							sticky={{ start: 1, end: 3 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							offset={1}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3>Infrastructure</h3>
								<p>
									Data infrastructure is the entire backend computing support system required to
									process, store, transfer, and safeguard data. It is an essential aspect of data
									processing and analysis. Businesses and organizations cannot create value out of
									data without having the proper data infrastructures.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-subtitle']}`} offset={1} speed={0.5}>
							<div className={`${Style['container']} ${Style['mobile-only']}`}>
								<h3>Infrastructure</h3>
								<p>
									Data infrastructure is the entire backend computing support system required to
									process, store, transfer, and safeguard data. It is an essential aspect of data
									processing and analysis. Businesses and organizations cannot create value out of
									data without having the proper data infrastructures.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={2} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data lake</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Definition:</span> &nbsp; A
										storage repository that holds a vast amount of raw data in its native format
										until it is needed for analytics applications.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Flaw or Challenge:</span>
										&nbsp; Does not resemble the highly structured relational databases of the past.
										Locks value away in unstructured data such as documents, free text, or spoken
										language. Manually analyzing and processing this unstructured data is demanding,
										inefficient, and prone to errors. Contains copies of data outside of its
										authoritative source.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										does not replicate authoritative data to enable its analysis, transformation,
										and enrichment. Nexus' ability to analyze data in real time absolves an
										enterprise from unnecessary infrastructure costs, without undermining speed,
										reliability, or even compliance.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={3} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Streaming</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Definition:</span> &nbsp;
										Data that is continuously generated by different sources.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Flaw or Challenge:</span>
										&nbsp; Streaming data adds to the variety and velocity that organizations must
										keep up with. Real time processing of streaming data can be an insurmountable
										challenge.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										applies ML and statistic models to analyze data in flight, in real time, the
										moment it enters the data ecosystem.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={4} speed={2} className={`${Style['sol-background']}`} /> */}

						<ParallaxLayer
							sticky={{ start: 4, end: 4 }}
							className={`${Style['sol-subtitle']}`}
							offset={4}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3>Analytics</h3>
								<p>
									Data analytics empowers organizations to derive insights and make conclusions from
									their data. Many of the techniques have been automated into mechanical processes
									and algorithms that process the raw data for human consumption. Analytical tools
									can be used to convert business data into reports, dashboards, and other
									visualizations.
								</p>
							</div>
						</ParallaxLayer>
					</Parallax>
				</InView>
			</section>
		</>
	);
};

export default Solutions;
