import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import axios from 'axios';

interface productInterface {
	id: number;
	title: string;
	price: number;
	image: string;
}
interface Props {
	setAllValue: React.Dispatch<React.SetStateAction<productInterface[]>>;
	allValue: productInterface[];
}



const Home = ({ setAllValue, allValue }: Props) => {
	const [filterProduct, setFilterProduct] = useState<productInterface[]>([]);
	const [inputValue, setInputValue] = useState('');

	const info = () => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((res) => {
				console.log(res.data);
				setAllValue(res.data);
				setFilterProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		info();
	}, []);

	const handleKeyDown = (event: any) => {
		if (event.key === 'Enter') {
			filter();
		}
	};
	const filter = () => {
		setFilterProduct(
			allValue.filter((el: productInterface) =>
				el.title.toLowerCase().includes(inputValue.toLowerCase())
			)
		);
	};

	return (
		<>
			<div className={styles.wrapperSearchField}>
				<input
					type='text'
					value={inputValue}
					className={styles.input}
					placeholder='what are you looking for?'
					onChange={(el) => setInputValue(el.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button className={styles.filterButton} onClick={() => filter()}>
					Search
				</button>
			</div>
			<div className={styles.wrapperHome}>
				<h1>Popular in this week</h1>
				<div className={styles.container}>
					{filterProduct.map((el: productInterface, index: number) => (
						<section key={index} className={styles.wraperProduct}>
							<img src={el.image} className={styles.imageDiv} />
							<div className={styles.titleProduct}>{el.title}</div>
							<span> Price: {el.price} $</span>
							<button className={styles.addToCard}> Add to your card</button>
						</section>
					))}
				</div>
			</div>{' '}
		</>
	);
};

export default Home;
