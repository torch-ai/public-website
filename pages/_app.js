import '../styles/global.scss';
import Layout from '../components/layout';
import ReactFullpage from '@fullpage/react-fullpage';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
