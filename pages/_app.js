import '../styles/global.scss';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Loader from '../components/loader';

const MyApp = ({ Component, pageProps }) => {
	// TODO add preloader to website.

	useEffect(() => {
		window.addEventListener('load', (event) => {
			console.log('Content is loaded!');
		});
	});

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
