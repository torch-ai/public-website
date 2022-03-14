import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import { createClient } from 'contentful';
import Image from 'next/image';
import Style from '../styles/modules/company.module.scss';
import News from '../components/news';
import Footer from '../components/footer';
import { InView } from 'react-intersection-observer';

import BrainWeaver from '../img/dotArt/BrainWeaver.png';
import AdamLurie from '../img/dotArt/AdamLurie.png';
import AmyBradshaw from '../img/dotArt/AmyBradshaw.png';
import DavidKern from '../img/dotArt/DavidKern.png';
import HondoGeruts from '../img/dotArt/HondoGeruts.png';
import JanetHanofee from '../img/dotArt/JanetHanofee.png';
import JasonDelker from '../img/dotArt/JasonDelker.png';
import JasonEidam from '../img/dotArt/JasonEidam.png';
import JenniferUtting from '../img/dotArt/JenniferUtting.png';
import JonKramer from '../img/dotArt/JonKramer.png';
import MikeDanda from '../img/dotArt/MikeDanda.png';
import LaurenceTosi from '../img/dotArt/LaurenceTosi.png';
import ChristanSchnedler from '../img/dotArt/ChristanSchnedler.png';
import WilliamBeyer from '../img/dotArt/WilliamBeyer.png';
import MarkPerrin from '../img/dotArt/MarkPerrin.png';
import KevinMarcus from '../img/dotArt/KevinMarcus.png';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'news' });

	return {
		props: {
			news: res.items,
		},
	};
}

const Index = ({ setNavColor, news }) => {
	setNavColor('black');
	return (
		<>
			<Head>
				<title>
					Kansas City's Next Great Company | Unmatched Environment for Innovation | Torch.AI
				</title>
			</Head>
			<ReactFullpage
				licenseKey={'A33F98B7-1BF24B82-AB8933EF-A1EC533E'}
				navigation
				verticalCentered={false}
				responsiveSlides={true}
				responsiveHeight={900}
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
											<h2>We're building Kansas City's next great company.</h2>
											<p>
												The world's hardest problems. The world's greatest minds. An unmatched
												environment for innovation.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['culture']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['culture__content']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-12']}`}>
											<h3>Total badasses.</h3>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-3']}`}>
											<h5>Mission-Focused</h5>
											<p>
												We have the awesome privilege of sharing responsibility for the security of
												our country and the lives of warfighters protecting that security. From this
												starting point, we’ve developed a deep sense of duty to our clients,
												company, and each other. Our client’s mission is our mission.
											</p>
										</div>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-8']}`}>
											<h5>Curious & Innovative</h5>
											<p>
												We are always interested in finding new and better ways to do things–and
												never satisfied with what we have. We wonder constantly about “what could
												be” and how we might “solve the unsolvable.”
											</p>
										</div>
									</div>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-3']}`}>
											<h5>Gumption</h5>
											<p>
												We approach everything we do with a level of passion and intensity,
												consistent with the knowledge and understanding that our work is important
												and meaningful. We think and act like a start-up. Every day is Day 1.
											</p>
										</div>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-8']}`}>
											<h5>Do What's Right</h5>
											<p>
												We approach every decision, action, and interaction with an unwavering
												commitment to being ethical, considerate, transparent, and focused on
												achieving the best outcome for our clients and team, rather than ourselves.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['gallery']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']}  ${Style['gallery__title']}`}>
											<h3>Leadership.</h3>
											<p>
												We prioritize people and an entrepreneurial spirit at Torch.AI. You, and our
												relationship with you, is of utmost importance. At the same time, the drive
												to improve your life and the lives of those around you, this Torch.AI
												entrepreneurial spirit, is one of our most important priorities. Our
												customers appreciate the world class technology, talent, and passion we
												bring each day.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['gallery__layout']}`}>
											<div className={`${Grid['row']} ${Style['gallery__layout-featured']} `}>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={BrainWeaver} />
														<h5>Brain Weaver</h5>
														<p>Chief Executive Officer</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={JonKramer} />
														<h5>Jon Kramer</h5>
														<p>Chief Technology Officer</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={JanetHanofee} />
														<h5>Janet Hanofee</h5>
														<p>Chief People Officer</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={DavidKern} />
														<h5>David Kervin</h5>
														<p> Chief Solutions Officer</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['gallery']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']}  ${Style['gallery__title']}`}>
											<h3>Leadership Cont.</h3>
										</div>
									</div>
									<div className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['gallery__layout']}`}>
											<div className={`${Grid['row']} ${Style['gallery__layout-list']}`}>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={AdamLurie} />
														<h5>Adam Lurie</h5>
														<p>Chief Strategy Officer</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']}  ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={JasonDelker} />
														<h5>Jason Delker</h5>
														<p>Chief of Product</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={AmyBradshaw} />
														<h5>Amy Bradshaw</h5>
														<p>Chief Financial Officer</p>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={JenniferUtting} />
														<h5>Jennifer Utting</h5>
														<p>General Counsel</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['gallery']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']}  ${Style['gallery__title']}`}>
											<h3>Board of Directors</h3>
											<p>
												Torch.AI's board members have vast domain, technology, product, and business
												experience, and are helping us create one of our country's great companies.
												We endeavor to make the world a better place by advancing the use of AI to
												change how data is put to use.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['gallery__layout']}`}>
											<div className={`${Grid['row']} ${Style['gallery__layout-list']}`}>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={BrainWeaver} />
														<h5>Brian Weaver</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']}  ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={LaurenceTosi} />
														<h5>Laurence Tosi</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={ChristanSchnedler} />
														<h5>Christian Schnedler</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={WilliamBeyer} />
														<h5>William Beyer</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Style['gallery']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']}`}>
										<div className={`${Grid['col-xs-12']}  ${Style['gallery__title']}`}>
											<h3>Board of Advisors</h3>
											<p>
												Torch.AI's board members have vast domain, technology, product, and business
												experience, and are helping us create one of our country's great companies.
												We endeavor to make the world a better place by advancing the use of AI to
												change how data is put to use.
											</p>
										</div>
									</div>
									<div className={`${Grid['row']} ${Style['gallery__container']}`}>
										<div className={`${Grid['col-xs-12']} ${Style['gallery__layout']}`}>
											<div className={`${Grid['row']} ${Style['gallery__layout-list']}`}>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={KevinMarcus} />
														<h5>Kevin Marcus</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']}  ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={MarkPerrin} />
														<h5>Mark W. Perrin</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={HondoGeruts} />
														<h5>James "Hondo" Geurts</h5>
													</div>
												</div>
												<div
													className={`${Grid['col-lg-3']} ${Grid['col-xs-12']} ${Style['gallery__layout-item']}`}>
													<div className={`${Style['gallery__layout-item-content']}`}>
														<Image src={MikeDanda} />
														<h5>LtGen Mike Dana</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={` ${Style['careers']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['row']} ${Style['careers__content']}`}>
										<div className={`${Grid['col-xs-12']} ${Grid['col-lg-6']}`}>
											<h2>Careers.</h2>
											<p>
												At Torch.AI, we are passionate about building software that solves some of
												the world's most challenging problems. Our work is hard. It is fun. It has
												meaning. We have built a team of exceptional people that build great
												products and provide the highest quality support and services. If you are a
												curious pioneer looking for a challenge, let's connect.
											</p>
											<div className={` ${Style['button__content']}`}>
												<Link href='/careers'>
													<a role='button'>Find your job</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={`${Landing['news']} section`}>
								<News topNews={news.slice(0, 5)} news={news} />
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
