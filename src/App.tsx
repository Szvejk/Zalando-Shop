import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import FirstSide from './components/FirstSide/FirstSide';
import SecondSide from './components/SecondSide/SecondSide';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenSide from './components/MenSide/MenSide';
import WomenSide from './components/WomenSide/WomenSide';
import OthersSide from './components/OthersSide/OthersSide';

interface productInterface {
	id: number;
	title: string;
	price: number;
	image: string;
	category: string;
}

const App = () => {
	const [allValue, setAllValue] = useState<productInterface[]>([]);
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<FirstSide allValue={allValue} setAllValue={setAllValue} />}
				/>
				<Route path='/order' element={<SecondSide />} />
				<Route path='/men' element={<MenSide allValue={allValue} setAllValue={setAllValue} />} />
				<Route
					path='/women'
					element={<WomenSide allValue={allValue} setAllValue={setAllValue} />}
				/>
				<Route path='/others' element={<OthersSide />} />
			</Routes>
		</Router>
	);
};

export default App;
