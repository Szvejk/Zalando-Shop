import React from 'react';
import Nav from '../Nav/Nav';
import styles from './WomenSide.module.scss';

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

const WomenSide = ({ setAllValue, allValue }: Props) => {
	return (
		<div>
			<Nav />
			<div className={styles.mapValues}>
				<div className={styles.containerProducts}>
					{allValue.map((el: productInterface, index: number) => (
						<>
						{el.category === "women's clothing" ? (
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
			</div>{' '}
		</div>
	);
};

export default WomenSide;
