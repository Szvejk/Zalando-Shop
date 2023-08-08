import React from 'react';
import styles from './Search.module.scss';
const SearchInput = () => {
	return (
		<div className={styles.wrapperSearchField}>
			<input type='text' placeholder='what are you looking for?' />

			<button>
				<span>Search</span>
			</button>
		</div>
	);
};

export default SearchInput;
