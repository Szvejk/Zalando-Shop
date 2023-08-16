import React, { useState } from 'react';
import styles from './../WomenSide/WomenSide.module.scss';
import Nav from '../Nav/Nav';

interface productInterface {
	id: number;
	title: string;
	price: number;
	image: string;
	category: string;
}

interface Props {
	setAllValue: React.Dispatch<React.SetStateAction<productInterface[]>>;
	allValue: productInterface[];
}

const MenSide = ({ setAllValue, allValue }: Props) => {
	return (
		<div>
			<Nav />
			<div className={styles.mapValues}>
				<div className={styles.containerProducts}>
					{allValue.map((el: productInterface, index: number) => (
						<>
							{el.category === "men's clothing" ? (
								<section key={index} className={styles.wrap}>
									<img src={el.image} className={styles.imageDiv} />
									<div className={styles.titleProduct}>{el.title}</div>
									<span> Price: {el.price} $</span>
									<button className={styles.addToCard}>
										{' '}
										Add to your card
									</button>
								</section>
							) : null}
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default MenSide;
