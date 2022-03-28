import Navigation from '../../components/navigation';
import Grid from '../../styles/modules/grid.module.scss';
import Static from '../../styles/modules/static.module.scss';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Footer from '../../components/footer';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'news',
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'news',
		'fields.slug': params.slug,
	});

	return {
		props: { news: items[0] },
	};
}

const slug = ({ news, setNavColor }) => {
	const { content } = news.fields;
	return (
		<>
			<Head>
				<title>{news.fields.title} | Torch.AI</title>
			</Head>
			<section>
				<header className={`${Static['service-header']}`}>
					<InView as='div' onChange={(inView, entry) => setNavColor(inView ? 'white' : 'black')}>
						<div className={`${Static['service']}`}>
							<div className={`${Static['content']}`}>
								<div className={`post flow`}>
									<h3>{news.fields.title}.</h3>
									<p>
										<em>{news.fields.summary} </em>
									</p>
								</div>
							</div>
						</div>
					</InView>
				</header>
				{/* <InView as='div' onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}> */}
				<div className={`${Static['service-content']}`}>
					<div>
						<div className={` ${Static['content']} post flow`}>
							<p>{documentToReactComponents(content)}</p>
						</div>
					</div>
				</div>
				{/* </InView> */}
			</section>
			<Footer />
		</>
	);
};

export default slug;
