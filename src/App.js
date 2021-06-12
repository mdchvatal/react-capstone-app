import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component{
	render() {
		return (
			<Provider store={store}>
				<MemoryRouter>
					<div>   
						<Main />
					</div>
				</MemoryRouter>
			</Provider>
		);
	}
}

export default App;
