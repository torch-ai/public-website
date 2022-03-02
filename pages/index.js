import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import style from '../styles/modules/style.module.scss';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';

const Index = ({ setActiveBackground, activeBackground }) => {
	useEffect(() => {
		if (!activeBackground) {
			setActiveBackground(['white', 'black', 'white', 'black']);
		}
	}, [activeBackground, setActiveBackground]);

	return (
		<>
			<Head>
				<title>Torch AI</title>
			</Head>
			<ReactFullpage
				navigation
				sectionsColor={activeBackground}
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={`${style['test']} section`}>
								<div className={`${Grid['container']} ${Grid['margin_center']}`}>
									<div className={`${Grid['col_xs_8 col_lg_8']} ${Landing['content-center']}`}>
										<h1>Unlock Human Potential.</h1>
										<div className={`${Landing['circle-icon']}`}>
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
								<video
									data-keepplaying
									className={`${Landing['background-video']}`}
									id='background-video'
									autoPlay
									muted>
									<source src='./videos/hero.mp4' type='video/mp4' />
								</video>
							</div>
							<div
								onMouseLeave={() => setActiveBackground('white')}
								className={`${style['test2']} section`}>
								<h1>HELLO MONDAY</h1>
							</div>
							<div
								// onMouseLeave={() => setActiveBackground('black')}
								className={`${style['test3']} section`}>
								<h1>HELLO TUESDAY</h1>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Index;
