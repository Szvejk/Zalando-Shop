import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import FirstSide from './components/FirstSide/FirstSide';
import SecondSide from './components/SecondSide/SecondSide';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<FirstSide />} />
				<Route path='/order' element={<SecondSide />} />
			</Routes>
		</Router>
	);
};

export default App;
