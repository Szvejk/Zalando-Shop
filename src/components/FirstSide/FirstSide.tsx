import React from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import SearchInput from '../SearchInput/SearchInput';

const FirstSide = () => {
	return (
		<div>

			<Nav />
			<SearchInput/>
			<Home />
		</div>
	);
};

export default FirstSide;
