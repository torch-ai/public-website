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
import Footer from '../components/footer';

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
					<Parallax pages={46} className={`${Style['wrapper']}`}>
						<ParallaxLayer className={`${Style['sol-title']}`} offset={0} speed={2.5}>
							<div className={`${Style['container']}`}>
								<h2>A system of intelligence across your organization. </h2>
								<p>Drive value from data across all enterprise functions.</p>

								<div className={`${Style['index']}`}>
									<div className={`${Style['index-item']}`}>
										<a href='#infrastructure' className={`${Style['index-content']}`}>
											<h5>Infrastructure</h5>
										</a>
									</div>
									<div className={`${Style['index-item']}`}>
										<a href='#analytics' className={`${Style['index-content']}`}>
											<h5>Analytics</h5>
										</a>
									</div>
									<div className={`${Style['index-item']}`}>
										<a href='#machine' className={`${Style['index-content']}`}>
											<h5>Machine learning & AI</h5>
										</a>
									</div>
									<div className={`${Style['index-item']}`}>
										<a href='#enterprise' className={`${Style['index-content']}`}>
											<h5>Enterprise Applications</h5>
										</a>
									</div>
									<div className={`${Style['index-item']}`}>
										<a href='#openSource' className={`${Style['index-content']}`}>
											<h5>Open Source</h5>
										</a>
									</div>
									<div className={`${Style['index-item']}`}>
										<a href='#dataApis' className={`${Style['index-content']}`}>
											<h5>Data APIs</h5>
										</a>
									</div>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={1} speed={0.9} className={`${Style['sol-background']}`} /> */}

						{/* Section Infrastructure */}

						<ParallaxLayer
							sticky={{ start: 1, end: 9 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='infrastructure'
							offset={1}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-infra']}`}>Infrastructure</h3>
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
								<h3 className={`${Style['title-infra']}`}>Infrastructure</h3>
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
								<div className={`${Style['sub-content-title']} `}>
									<h3>Data lake</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										A storage repository that holds a vast amount of raw data in its native format
										until it is needed for analytics applications.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
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
									<p>Data that is continuously generated by different sources.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
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

						<ParallaxLayer className={`${Style['sol-content']}`} offset={4} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Graph DB</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										A database that uses graph structures for semantic queries with nodes, edges,
										and properties to represent and store data
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Graph databases are expensive and complex to create.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides out-of-the-box features to generate instant relationships, enabling
										instant interaction with native graph databases. These features enable clients
										to take advantage of graph databases without any knowledge of the graph data
										underneath. Analysts can interact with the data through concepts they
										understand, such as objects and relationship types.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={5} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data integration</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Connecting disparate, siloed data stores so that they can share information.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Data integration can be a brittle, labor-intensive process to build and
										maintain.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp;
										Nexus' flexible, adaptive data mesh architecture enables organizations to
										compose the perfect solution for their unique data needs. Experience APIs assure
										that minimal (if any) effort is required to harmoniously insert Nexus into an
										existing architecture.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={6} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>ETL/ELT</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT) are data
										integration methods that transfer data from a source to a data warehouse.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Data transformations are rule-based definitions that require a human to
										configure and maintain. While the analyst can derive powerful insights by fusing
										data from disparate sources, it is a laborious undertaking with traditional data
										schemas. Data curation tasks such as adding a new dimension or normalizing data
										to the next level requires defined processes and human effort. In short, modern
										data analysis requires a hefty amount of human labor.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; The
										Nexus Knowledge Layer frees the analyst from the mundane operations, enabling
										them to focus on the fundamental business problems. Domain and database
										expertise not required.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={7} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Privacy & Security</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Data lakes aggregate and replicate data, including personally identifiable
										information (PII), to enable its analysis
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Organizations inadvertently store PII on systems outside the trusted,
										authoritative source, thereby creating privacy, security, and compliance risks.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										does not persist sensitive data, such as PII. This data remains at rest on the
										intended authoritative system with the appropriate governance controls. Nexus's
										ability to categorize object-level information at the moment of existence can
										prevent sensitive information from ever coming to rest in a data store or
										system.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={8} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data Observability</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Ability to understand the health and state of the data in the eco-system.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Organizations are awash in an ocean of data, but they can’t use it
										efficiently. Real-time processing of data can be an insurmountable challenge.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										deploys machine learning to process data instantly before it’s stored anywhere.
										By using ML, Nexus can ingest and decompose data in-flight, without the need for
										a data lake or warehouse. Any type of data, any format, any system, any
										structure, in the cloud or on premises.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={9} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Monitoring</h3>
									<p>Infrastructure</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Ability to measure the fitness of data for use across the eco-system.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Monitoring is typically a myopic process performed at the application or
										individual level of the source. It fails to provide a holistic, end-to-end view
										of the data.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; The
										Nexus Knowledge Layer accounts for all data within the ecosystem for real-time
										alert generation. It acts as the contextual overlay across the entire data
										landscape, establishing a clear view of meaningful entities, relationships, and
										insights while retaining attribution and lineage to the authoritative data for
										secure, governed, and trusted data discovery.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
						{/* Section Analytics */}

						<ParallaxLayer
							sticky={{ start: 10, end: 15 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='analytics'
							offset={10}
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

						<ParallaxLayer
							className={`${Style['sol-subtitle']} ${Style['mobile-only']}`}
							offset={10}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-analytics']}`}>Analytics</h3>
								<p>
									Data analytics empowers organizations to derive insights and make conclusions from
									their data. Many of the techniques have been automated into mechanical processes
									and algorithms that process the raw data for human consumption. Analytical tools
									can be used to convert business data into reports, dashboards, and other
									visualizations.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={11} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Platform support</h3>
									<p>Analytics</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Modern data ecosystems typically include a variety of disparate platforms.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Platform integration can be a brittle, labor-intensive process to build
										and maintain.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides out-of-the-box connectors for virtually every meaningful cloud service
										or system. For bespoke integrations, we have integration points that provide a
										rapid, straightforward process for developing reusable connectors. We have yet
										to come across a system that we can’t integrate with…and we have come across
										some interesting ones!
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={12} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Visualization support</h3>
									<p>Analytics</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Visualization tools can convert business data into reports, dashboards, and
										other visualizations.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Visualization tools are non-extensible, and their configuration requires
										an understanding of the underlying complex data model.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; We
										have out-of-the-box connectors for virtually every meaningful cloud service or
										system, such as Tableau, PowerBI, and Qlik. Nexus converts business-friendly
										data requests into optimized technical queries, enabling a “no code” mechanism
										for data access and discovery.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={13} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data analysts and data science</h3>
									<p>Analytics</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Data analytics focuses on viewing the historical data in context while data
										science focuses on machine learning and predictive modeling.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Labor intensive to process, cleanse, and verify the integrity and quality
										of the data.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides cleansed, ready-to-use data for both the analyst and the data
										scientist. Nexus streamlines visualization and KPIs. Nexus also supports Bring
										Your Own Model (BYOM) to wrap your existing data science artifacts in our MLOps
										environment, freeing data scientists to focus on innovation rather than mundane
										model operations and maintenance.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={14} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data catalog and discovery</h3>
									<p>Analytics</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>An organized inventory of data assets in the organization.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Unmanaged data lakes create a data swamp littered with hard-to-understand
										data across silos. There is no single place to find, understand, and govern data
										across the ecosystem. Extracting intelligence requires a permanent
										transformation process, typically configured by human engineers and consuming
										additional computing resources.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										enables organizations to semantically understand the wealth of information in
										their unstructured data, and then use that knowledge to contextualize and
										correlate their entire data ecosystem. It provides a holistic view of enterprise
										data that unleashes new insights and speeds decisioning.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={15} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Query engine</h3>
									<p>Analytics</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that executes queries against data in various data sources to provide
										answers for users or applications.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Current query engines are not data agnostic. They require the user to
										understand the underlying data structure. No single unified query access across
										all data sources.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides a proprietary “no code” data retrieval system which converts
										business-friendly data requests into optimized technical queries. Queries are
										made across federated data sources. Nexus users and decision-makers do not
										require knowledge of SQL queries or programming skills.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
						{/* Section Machine learning & AI */}

						<ParallaxLayer
							sticky={{ start: 16, end: 25 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='machine'
							offset={16}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Machine learning & AI</h3>
								<p>
									Machine learning is an application of artificial intelligence (AI) that enables
									systems to automatically learn and improve from experience without being
									explicitly programmed. The learning process begins with a large data set, and the
									model looks for patterns in the data to make better decisions in the future.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							className={`${Style['sol-subtitle']} ${Style['mobile-only']}`}
							offset={10}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Machine learning & AI</h3>
								<p>
									Machine learning is an application of artificial intelligence (AI) that enables
									systems to automatically learn and improve from experience without being
									explicitly programmed. The learning process begins with a large data set, and the
									model looks for patterns in the data to make better decisions in the future.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={17} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data science platforms</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Modern data science typically encompasses a variety of unique platforms.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Data science projects fail frequently. Data is often difficult to access,
										in different formats, in different data stores, and with different security and
										privacy requirements.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										data mesh architecture seamless integrates with upstream and downstream systems,
										connecting the silos and enabling analysts to interact with the totality of
										their data.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={18} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>ML platform</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Supports the integration of ML models to facilitate data analysis.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Building and deploying effective ML models requires significant expertise
										and investment.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp;
										Nexus’ holistic nature of data analysis enables ML automation. Models can be
										quickly built and deployed within workflows.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={19} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Data generation and labeling</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Large amounts of high quality, labeled data is required to train effective
										machine learning models.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; High quality labeled data is expensive to produce and may still contain
										errors.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										Dynamic Data Extraction (DDE) automates the data labeling process by analyzing
										any type of input, structured or unstructured, and tagging the relevant data
										within.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={20} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Model building</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Machine learning algorithms build models based on sample data.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Building and deploying effective ML models requires significant expertise
										and investment.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides best-in class, pre-built models for any natural language processing
										(NLP) and image processing (CV) task. Nexus also supports Bring Your Own Model
										(BYOM) to wrap existing data science artifacts in our MLOps environment.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={21} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Deployment and production</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Once trained and tested, machine learning models are deployed into production
										workflows.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; The process of deploying machine learning models requires significant
										hands-on expertise and involvement with the production workflow.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										fully manages the deployment of machine learning models into production
										workflows through a low-code or no-code interface.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={22} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Model monitoring</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Production models must be closely monitored in order to evaluate their
										effectiveness.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; There is typically a delay or latency in gathering information, and
										additional tools may be needed for event notifications and other feedback.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										collects and analyzes data in real time and provides automated alerts,
										notifications, and health checks.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={23} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Computer Vision, Speech Analysis, and Natural Language Processing</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Modern machine learning models can perform tasks related to computer vision
										(CV), speech analysis, and natural language processing (NLP).
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Limited number of pre-trained models available for use. No support for
										Bring Your Own Model (BYOM).
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides best-in class, pre-built models for any natural language processing
										(NLP) and image processing (CV) task or use case. NLP models include machine
										translation, sentiment analysis, question answering, named entity recognition,
										and text classification. CV models include segmentation, detection,
										classification, and recognition. Nexus also supports Bring Your Own Model (BYOM)
										to wrap existing data science artifacts in its MLOps environment.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={24} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Synthetic media</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Artificial intelligence can create realistic synthetic media or data objects.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Synthetic media is a state-of-the-art technology that requires
										significant expertise and investment.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										has created and deployed industrial grade synthetic media for existing
										customers.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={25} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>AI hardware optimization</h3>
									<p>Machine learning & AI</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Machine learning models require computing resources to train.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; The training process is computationally expensive and requires GPUs.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										is optimized to train models using off-the-shelf hardware.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
						{/* Section Enterprise Applications */}

						<ParallaxLayer
							sticky={{ start: 26, end: 33 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='enterprise'
							offset={26}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Enterprise Applications</h3>
								<p>
									An enterprise application (EA) is a scalable software system designed for a large
									business or government agency. EAs are complex, distributed, and mission critical.
									EAs are developed using enterprise architecture and are a critical component of
									computer-based information systems.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							className={`${Style['sol-subtitle']} ${Style['mobile-only']}`}
							offset={26}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Enterprise Applications</h3>
								<p>
									An enterprise application (EA) is a scalable software system designed for a large
									business or government agency. EAs are complex, distributed, and mission critical.
									EAs are developed using enterprise architecture and are a critical component of
									computer-based information systems.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={27} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Decisioning platforms</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software with defined decision logic used to automate an intelligent process.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Relies on humans to define and build workflows that are often based on
										flawed legacy processes.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										automatically surfaces meaningful intelligence from data across multiple
										sources. Users and decision-makers can leverage the intelligence within their
										data without knowledge of SQL queries or programming skills.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={28} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Sales enablement</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Software that provides visibility across the sales lifecycle.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Current sales enablement solutions are prone to flawed, limited data,
										providing questionable insight and low-impact observations.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										automatically surfaces meaningful intelligence from data across multiple
										sources. It processes all data to feed relationship and behavioral intelligence
										models, which generates specific sales targets and context.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={29} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Marketing</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that enables marketing organizations to centralize and streamline their
										processes.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Marketing solutions have manually defined schemas and rules which are
										bound by human expertise.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										automatically surfaces meaningful intelligence from data across multiple
										sources. It enables real-time detection of emerging communities or anomalies
										relevant to marketing strategy and execution.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={30} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Customer experience</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Software that helps companies establish their customer interaction goals.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Customer experience solutions rely on direct interactivity with the
										customer and are unable to acquire feedback from external sources.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										semantically understands unstructured feedback through channels such as social
										media. It can correlate sentiment with resolved entities in real time to create
										a holistic analysis of customer engagement.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={31} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Human capital management</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that attempts to transform the traditional functions of human resources
										departments into opportunities that drive engagement, productivity, and business
										value.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Human capital management systems are limited by the data they manage,
										creating an incomplete, myopic view of human capital.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										assimilates first and third-party data sources, including publicly available
										information, to provide a 360-degree view of people and their associated
										entities. Nexus automatically surfaces intelligence relevant to decision makers.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={32} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Compliance</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that tracks, monitors, and audits business processes to ensure they
										comply with policies and standards.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Compliance solutions can document governance rules, but they cannot
										enforce the rules in a production environment without expensive customization.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										seamlessly pairs with compliance solutions to enact and enforce defined policies
										on data in motion and at rest to ensure fine-grained governance on any data type
										and any system.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={33} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Security</h3>
									<p>Enterprise Applications</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that secures and protects a computer, network, or computing-enabled
										device.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Current solutions cannot perform real-time data correlation across an
										entire data ecosystem and thus have a narrow view of the context of events.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										processes, enriches, and analyzes logs in real time to create a more holistic
										view of the security landscape. This enables Nexus to more effectively identify
										anomalies, unexpected content, and exceeded thresholds, which can then trigger
										countermeasures.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
						{/* Section Open Source */}

						<ParallaxLayer
							sticky={{ start: 34, end: 39 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='openSource'
							offset={34}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Open Source</h3>
								<p>
									Open source software is developed in a decentralized and collaborative way,
									relying on peer review and community production. It has become a movement and a
									way of working that finds new ways to solve problems in communities and
									industries.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							className={`${Style['sol-subtitle']} ${Style['mobile-only']}`}
							offset={34}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-openSource']}`}>Open Source</h3>
								<p>
									Open source software is developed in a decentralized and collaborative way,
									relying on peer review and community production. It has become a movement and a
									way of working that finds new ways to solve problems in communities and
									industries.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={35} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Orchestration</h3>
									<p>Open Source</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Orchestration software requires detailed knowledge of both the software systems
										and the enablers that are being aggregated.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Orchestration software requires detailed knowledge of both the software
										systems and the enablers that are being aggregated.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										natively implements workflow, security, ML/AI, and integration functionality
										into a single platform, streamlining the ability to create data workflows.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={36} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Query and data flow</h3>
									<p>Open Source</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Software that moves data along concurrent pipelines.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; The different products in this domain use specialized methods to retrieve
										data, but they rely on humans to reactively define and execute the queries on
										the centralized data store.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										is a data-centric solution that aggregates the objects, concepts, and
										relationships within the data ecosystem in the Knowledge Layer. It not only
										responds to query requests, but it can proactively suggest the data objects
										necessary to perform a business function.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={37} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>AI and ML</h3>
									<p>Open Source</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that wraps the mathematics necessary to create specialized ML models.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; AI/ML frameworks require data scientists and domain experts to have
										knowledge of enterprise architecture, scalability practices, and auditing.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										provides over fifty pre-built models that provide best-in-class data operations.
										Nexus also supports Bring Your Own Model (BYOM) to wrap your existing data
										science artifacts in our MLOps environment, freeing data scientists to focus on
										innovation rather than mundane model operations and maintenance.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={38} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Monitoring</h3>
									<p>Open Source</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Software that provides insights into the operation of a system.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Current monitoring solutions cannot perform real-time data correlation
										and thus have a narrow view on the context of events.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; For
										appropriate event-generation accuracy and timeliness, Nexus correlates data
										across first and third party data sources, enabling whole-entity analysis.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={39} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Security</h3>
									<p>Open Source</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that secures and protects a computer, network, or computing-enabled
										device.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Current solutions cannot perform real-time data correlation across an
										entire data ecosystem and thus have a narrow view on the context of events.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										processes, enriches, and analyzes logs in real time to create a more holistic
										view of the security landscape. This enables Nexus to more effectively identify
										anomalies, unexpected content, and exceeded thresholds, which can then trigger
										countermeasures.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						{/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
						{/* Section Data APIs */}

						<ParallaxLayer
							sticky={{ start: 40, end: 44 }}
							className={`${Style['sol-subtitle']} ${Style['desktop-only']}`}
							id='dataApis'
							offset={40}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-machine']}`}>Data APIs</h3>
								<p>
									Application Programming Interface (API) is a software intermediary that allows two
									applications to talk to each other. It opens up software features for use by
									external third parties, partners, and associates.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer
							className={`${Style['sol-subtitle']} ${Style['mobile-only']}`}
							offset={40}
							speed={0.5}>
							<div className={`${Style['container']}`}>
								<h3 className={`${Style['title-openSource']}`}>Data APIs</h3>
								<p>
									Application Programming Interface (API) is a software intermediary that allows two
									applications to talk to each other. It opens up software features for use by
									external third parties, partners, and associates.
								</p>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={41} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>People & entities</h3>
									<p>Data APIs</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>Software that provides information on people and entities.</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Rigid definitions of people do not take advantage of all discoverable
										data points and cannot properly resolve ambiguities in aggregated data.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp;
										Torch.AI has pioneered an approach for acquiring and enriching publicly
										available information (PAI) that enables intelligence analysts to hone
										operational targets more efficiently and effectively. This process gathers
										structured and unstructured data (e.g., text, audio, video) in various languages
										from throughout the internet and dark web, uses machine learning models to
										extract and correlate entities and their relationships in a knowledge graph, and
										makes this data available for analyst search and discovery.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={42} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Financial</h3>
									<p>Data APIs</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that provides financial-related information on organizations and
										entities.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Financial analysis requires countless manual processes to integrate
										information from a wide variety of sources, both internal and external.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp;
										Torch.AI has pioneered an approach for acquiring and enriching publicly
										available information (PAI) that enables intelligence analysts to hone
										operational targets more efficiently and effectively. This process gathers
										structured and unstructured data (e.g., text, audio, video) in various languages
										from throughout the internet and dark web, uses machine learning models to
										extract and correlate entities and their relationships in a knowledge graph, and
										makes this data available for analyst search and discovery.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={43} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Air-space and sea</h3>
									<p>Data APIs</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that provides air-space and sea-related information to organizations in
										any domain.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Limited processing power and connectivity leads to challenges in creating
										actionable intelligence at the edge.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										Dynamic Data Extraction (DDE) categorizes data objects and creates atomic
										information about data on the edge so that workflows can be actioned on in the
										field and aggregated when compute/network is available.
									</p>
								</div>
							</div>
						</ParallaxLayer>

						<ParallaxLayer className={`${Style['sol-content']}`} offset={44} speed={0.5}>
							<div className={`${Style['container']}`}>
								<div className={`${Style['sub-content-title']}`}>
									<h3>Location intelligence</h3>
									<p>Data APIs</p>
								</div>
								<div className={`${Style['sub-content']}`}>
									<p>
										Software that extracts information and derives insights from geo-spatial data.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Challenge:</span>
										&nbsp; Geographical entities are subject to problems with ambiguities and do not
										consider context, especially within unstructured data.
									</p>
									<p>
										<span className={`${Style['sub-content-accent']}`}>Solution:</span> &nbsp; Nexus
										uses geographical data to resolve entity information and correlate locations
										with external data sets.
									</p>
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer className={`${Style['sol-content']}`} offset={45.5} speed={0.5}>
							<Footer />
						</ParallaxLayer>
					</Parallax>
				</InView>
			</section>
		</>
	);
};

export default Solutions;
