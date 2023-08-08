import React from 'react';
import styles from './Nav.module.scss';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import zalandoLogo from '../image/zalandoLogo.png';

const Nav = () => {
	return (
		<section className={styles.wrapperNav}>
			<div className={styles.nav}>
				<div className={styles.logo}>
					<img src={zalandoLogo} className={styles.zalandoLogoFull}/>
				</div>
				<div className={styles.womanClothing}>Woman</div>
				<div className={styles.menClothing}>Men</div>
				<div className={styles.shopCard}>
					<span className={styles.iconShop}>
						<AiOutlineShopping />{' '}
					</span>
					<Link to='/order' className={styles.linkOrder}>
						{' '}
						<span> Shopping Card </span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Nav;
