import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Grid from '../styles/modules/grid.module.scss';
import Landing from '../styles/modules/landing.module.scss';
import Link from 'next/link';

const News = ({ news, topNews }) => {
	const displayCurrentTime = (data) => {
		let api = data.fields;
		const date = new Date(api.publishDate);
		const month = date.toLocaleString('default', { month: 'long' });
		let time;
		time = month + ' ' + date.getDay() + ', ' + date.getFullYear();
		return time;
	};

	return (
		<>
			<div className={`${Grid['container']} ${Grid['margin_center']}`}>
				<div className={`${Grid['row']}`}>
					<div className={`${Grid['col-xs-12']}  ${Landing['news__title']}`}>
						<h3>Latest News.</h3>
					</div>
				</div>
				<div className={`${Grid['row']} ${Landing['news__container']}`}>
					<div className={`${Grid['col-xs-8']} ${Landing['news__layout']}`}>
						<div className={`${Grid['row']} ${Landing['news__layout-featured']} `}>
							<div
								className={`${Grid['col-lg-8']} ${Grid['col-xs-12']} ${Landing['news__layout-item']}`}>
								{/* <Image
									src={'http:' + topNews[0].fields.fullSizeImage.fields.file.url}
									layout='fill'
								/> */}
								<div className={`${Landing['news__layout-item-content']}`}>
									<p>{displayCurrentTime(topNews[0])}</p>
									<h5>{topNews[0].fields.title}</h5>
									<Link href={'/post/' + topNews[0].fields.slug}>
										<a>Read More</a>
									</Link>
								</div>
							</div>
							<div
								className={`${Grid['col-lg-4']} ${Grid['col-xs-12']} ${Landing['news__layout-item']}`}>
								{/* <Image
									src={'http:' + topNews[1].fields.fullSizeImage.fields.file.url}
									layout='fill'
								/> */}
								<div className={`${Landing['news__layout-item-content']}`}>
									<p>{displayCurrentTime(topNews[1])}</p>
									<h5>{topNews[1].fields.title}</h5>
									<Link href={'/post/' + topNews[1].fields.slug}>
										<a>Read More</a>
									</Link>
								</div>
							</div>
						</div>
						<div className={`${Grid['row']} ${Grid['between-lg']} ${Landing['news__layout-list']}`}>
							<div
								className={`${Grid['col-lg-4']} ${Grid['col-xs-12']} ${Landing['news__layout-item']}`}>
								{/* <Image
									src={'http:' + topNews[2].fields.fullSizeImage.fields.file.url}
									layout='fill'
								/> */}
								<div className={`${Landing['news__layout-item-content']}`}>
									<p>{displayCurrentTime(topNews[2])}</p>
									<h5>{topNews[2].fields.title}</h5>
									<Link href={'/post/' + topNews[2].fields.slug}>
										<a>Read More</a>
									</Link>
								</div>
							</div>
							<div
								className={`${Grid['col-lg-4']} ${Grid['col-xs-12']}  ${Landing['news__layout-item']}`}>
								{/* <Image
									src={'http:' + topNews[3].fields.fullSizeImage.fields.file.url}
									layout='fill'
								/> */}
								<div className={`${Landing['news__layout-item-content']}`}>
									<p>{displayCurrentTime(topNews[3])}</p>
									<h5>{topNews[3].fields.title}</h5>
									<Link href={'/post/' + topNews[3].fields.slug}>
										<a>Read More</a>
									</Link>
								</div>
							</div>
							<div
								className={`${Grid['col-lg-4']} ${Grid['col-xs-12']} ${Landing['news__layout-item']}`}>
								{/* <Image
									src={'http:' + topNews[4].fields.fullSizeImage.fields.file.url}
									layout='fill'
								/> */}
								<div className={`${Landing['news__layout-item-content']}`}>
									<p>{displayCurrentTime(topNews[4])}</p>
									<h5>{topNews[4].fields.title}</h5>
									<Link href={'/post/' + topNews[4].fields.slug}>
										<a>Read More</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
