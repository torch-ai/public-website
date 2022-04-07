import { InView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../components/footer';
import Head from 'next/head';

const Prism = ({ setNavColor }) => {
	return (
		<>
			<Head>
				<title>World's Most Trusted AI Platform | Unlock Human Potential | Torch.AI</title>
			</Head>
			<ReactFullpage
				navigation
				verticalCentered={false}
				responsiveWidth={1500}
				render={(props) => {
					return (
						<ReactFullpage.Wrapper>
							<section className={`section hero`}></section>
							<section className={`section statement`}></section>
							<section className={`section nexus`}></section>
							<section className={`section data`}></section>
							<section className={`section impact`}></section>
							<Footer />
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Prism;
