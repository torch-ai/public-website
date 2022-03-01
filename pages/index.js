import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';

const Index = () => {
	return (
		<>
			<Head>
				<title>My styled page</title>
			</Head>
			<ReactFullpage
				navigation
				render={() =>
					console.log('render prop change') || (
						<ReactFullpage.Wrapper>
							<div className='section'>
								<h1> HELLO WORLD</h1>
							</div>
							<div className='section'>
								<h1>HELLO MONDAY</h1>
							</div>
							<div className='section'>
								<h1>HELLO TUESDAY</h1>
							</div>
						</ReactFullpage.Wrapper>
					)
				}
			/>
		</>
	);
};

export default Index;
