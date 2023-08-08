import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import axios from 'axios';
const Home = () => {
	interface productInterface {
		id: number;
		title: string;
		price: number;
		image: string;
	}
	const [product, setProduct] = useState([]);
	const info = () => {
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then((res) => {
				console.log(res.data);
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		info();
	}, []);

	return (
		<div className={styles.wrapperHome}>
			{' '}
			<h1>Popular in this week</h1>
			<div className={styles.container}>
				{product.map((el: productInterface, index: number) => (
					<section key={index} className={styles.wraperProduct}>
						<img src={el.image} className={styles.imageDiv} />
						<div className={styles.titleProduct}>{el.title}</div>
						<span> Price: {el.price}</span>
						<button className={styles.addToCard}> Add to your card</button>
					</section>
				))}
			</div>
		</div>
	);
};

export default Home;
