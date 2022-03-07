import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Accor from '../styles/modules/accordian.module.scss';
import Image from 'next/image';
import Style from '../styles/modules/solution.module.scss';
import { InView } from 'react-intersection-observer';

const Solutions = ({ setNavColor }) => {
	return (
		<>
			<Head>
				<title>Solution | Torch AI</title>
			</Head>
			<ReactFullpage
				navigation
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={`${Style['background']} section`}>
								<InView as='div' onChange={(inView, entry) => setNavColor('White')}>
									<div className={`${Grid['container']} ${Grid['margin_center']}`}>
										<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
											<h2>A system of intelligence across your organization.</h2>
											<p>Drive value from data across all enterprise functions.</p>
											{/* <div className={`${Landing['circle-icon']}`}>
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
											</div> */}
										</div>
									</div>
								</InView>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Infrastructure</h2>
										<p>
											Data infrastructure is the entire backend computing support system required to
											process, store, transfer, and safeguard data. It is an essential aspect of
											data processing and analysis. Businesses and organizations cannot create value
											out of data without having the proper data infrastructures.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data Lake</h3>
											<p>
												A storage repository that holds a vast amount of raw data in its native
												format until it is needed for analytics applications.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Streaming</h3>
											<p>Data that is continuously generated by different sources.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Graph DB</h3>
											<p>
												A database that uses graph structures for semantic queries with nodes,
												edges, and properties to represent and store data.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data integration</h3>
											<p>
												Connecting disparate, siloed data stores so that they can share information.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>ETL/ELT</h3>
											<p>
												Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT) are data
												integration methods that transfer data from a source to a data warehouse.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Privacy & Security</h3>
											<p>
												Data lakes aggregate and replicate data, including personally identifiable
												information (PII), to enable its analysis.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge.
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data Observability</h3>
											<p>
												Ability to understand the health and state of the data in the eco-system.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Monitoring</h3>
											<p>Ability to measure the fitness of data for use across the eco-system.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/*  Analytics */}

							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Analytics</h2>
										<p>
											Data analytics empowers organizations to derive insights and make conclusions
											from their data. Many of the techniques have been automated into mechanical
											processes and algorithms that process the raw data for human consumption.
											Analytical tools can be used to convert business data into reports,
											dashboards, and other visualizations.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Platform support</h3>
											<p>
												Modern data ecosystems typically include a variety of disparate platforms.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Visualization support</h3>
											<p>
												Visualization tools can convert business data into reports, dashboards, and
												other visualizations.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data analysts and data science</h3>
											<p>
												Data analytics focuses on viewing the historical data in context while data
												science focuses on machine learning and predictive modeling.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data catalog and discovery</h3>
											<p>An organized inventory of data assets in the organization.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Query engine</h3>
											<p>
												Software that executes queries against data in various data sources to
												provide answers for users or applications.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Machine learning & AI */}

							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Machine learning & AI</h2>
										<p>
											Machine learning is an application of artificial intelligence (AI) that
											enables systems to automatically learn and improve from experience without
											being explicitly programmed. The learning process begins with a large data
											set, and the model looks for patterns in the data to make better decisions in
											the future.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data science platforms</h3>
											<p>
												Modern data science typically encompasses a variety of unique platforms.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>ML platform</h3>
											<p>Supports the integration of ML models to facilitate data analysis.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Data generation and labeling</h3>
											<p>
												Large amounts of high quality, labeled data is required to train effective
												machine learning models.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Model building</h3>
											<p>Machine learning algorithms build models based on sample data.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Deployment and production</h3>
											<p>
												Once trained and tested, machine learning models are deployed into
												production workflows.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Model monitoring</h3>
											<p>
												Production models must be closely monitored in order to evaluate their
												effectiveness.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Computer Vision, Speech Analysis, and Natural Language Processing</h3>
											<p>
												Modern machine learning models can perform tasks related to computer vision
												(CV), speech analysis, and natural language processing (NLP).
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Synthetic media</h3>
											<p>
												Artificial intelligence can create realistic synthetic media or data
												objects.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>AI hardware optimization</h3>
											<p>Machine learning models require computing resources to train.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Enterprise Applications */}
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Enterprise Applications</h2>
										<p>
											An enterprise application (EA) is a scalable software system designed for a
											large business or government agency. EAs are complex, distributed, and mission
											critical. EAs are developed using enterprise architecture and are a critical
											component of any computer-based information system.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Decisioning platforms</h3>
											<p>
												Software with defined decision logic used to automate an intelligent
												process.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Sales enablement</h3>
											<p>Software that provides visibility across the sales lifecycle.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Marketing</h3>
											<p>
												Software that enables marketing organizations to centralize and streamline
												their processes.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Customer experience</h3>
											<p>
												Software that helps companies establish their customer interaction goals.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Human capital management</h3>
											<p>
												Software that attempts to transform the traditional functions of human
												resources departments into opportunities that drive engagement,
												productivity, and business value.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Compliance</h3>
											<p>
												Software that tracks, monitors, and audits business processes to ensure they
												comply with policies and standards.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Security</h3>
											<p>
												Software that secures and protects a computer, network, or computing-enabled
												device.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Open Source */}
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Open Source</h2>
										<p>
											Open source software is developed in a decentralized and collaborative way,
											relying on peer review and community production. It has become a movement and
											a way of working that finds new ways to solve problems in communities and
											industries.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Orchestration</h3>
											<p>
												Software that automates the configuration, coordination, and management of
												other computer systems and software.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Query and data flow</h3>
											<p>Software that moves data along concurrent pipelines.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>AI and ML</h3>
											<p>
												Software that wraps the mathematics necessary to create specialized ML
												models.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Monitoring</h3>
											<p>Software that provides insights into the operation of a system.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Security</h3>
											<p>
												Software that secures and protects a computer, network, or computing-enabled
												device.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Streaming</h3>
											<p>Data that is continuously generated by different sources.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Real-Time Data Transformation.
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Real-Time Data Transformation.
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h2>Data APIs</h2>
										<p>
											Application Programming Interface (API) is a software intermediary that allows
											two applications to talk to each other. It opens up software features for use
											by external third parties, partners, and associates.
										</p>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>People & entities</h3>
											<p>Software that provides information on people and entities.</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Financial</h3>
											<p>
												Software that provides financial-related information on organizations and
												entities.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['background']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Air-space and sea</h3>
											<p>
												Software that provides air-space and sea-related information to
												organizations in any domain.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${Grid['col_lg_4']} ${Grid['col_xs_8']}`}>
											<h3>Location intelligence</h3>
											<p>
												Software that extracts information and derives insights from geo-spatial
												data.
											</p>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Flaw or Challenge
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
											<div className={`${Accor['accordian']}`}>
												<div>
													<input
														type='checkbox'
														name='accoridan'
														id='f1'
														className={`${Accor['accordian__input']}`}
													/>
													<label for='f1' className={`${Accor['accordian__label']}`}>
														Solution
													</label>
													<div className={`${Accor['accordian__content']}`}>
														<p>
															Nexus' ability to analyze data in real-time absolves an enterprise
															from unnecessary infrastructure costs, without undermining speed,
															reliability, or even compliance.
														</p>
													</div>
												</div>
											</div>
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

export default Solutions;
