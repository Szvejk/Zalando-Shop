import React from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

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

const FirstSide = ({ setAllValue, allValue }: Props) => {
	return (
		<div>
			<Nav />
			<Home setAllValue={setAllValue} allValue={allValue} />
		</div>
	);
};

export default FirstSide;
