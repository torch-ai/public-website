import next from 'next';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Grid from '../styles/modules/grid.module.scss';
import Navigation from '../components/navigation';
import Landing from '../styles/modules/landing.module.scss';
import Careers from '../styles/modules/careers.module.scss';
import { createClient } from 'contentful';
import JobCard from '../components/JobCard';
import Footer from '../components/footer';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'careerPosting' });

	return {
		props: {
			jobs: res.items,
		},
	};
}

const commercial = ({ jobs }) => {
	return (
		<>
			<section className={`${Careers['intro']}`}>
				<Navigation />
				<div
					className={`${Grid.row} ${Grid.margin_center}  ${Grid.container} ${Careers['carrers__content']}`}>
					<div className={`${Grid.col_xs_8}`}>
						<h1> Careers. </h1>
						<p>
							At Torch.AI, we are passionate about building software that solves some of the world's
							most challenging problems. On the leading edge for AI for National Security clients
							and beyond, we partner with some of the most influential organizations to transform
							how they define success using data and technology.
						</p>
					</div>
				</div>
			</section>

			<section className={`${Careers['job-list']} ${Careers['section']}`}>
				<div className={`${Grid.row} ${Grid.margin_center} ${Grid.container}`}>
					<div className={`${Grid['row']}`}>
						<h2>Job Openings</h2>
					</div>
					<div className={`${Grid['row']}`}>
						{jobs.map((job) => (
							<div className={`${Grid['col_xs_8']}`}>
								<JobCard key={job.sys.id} job={job} />
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default commercial;
