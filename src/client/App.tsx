import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbah from './subcomponents/Navbah';
import Home from './components/Home';
import Details from './components/Details';
import Admin from './components/Admin';
import Compose from './components/Compose';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
		<Navbah />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/details/:id">
					<Details />
				</Route>
				<Route exact path="/admin/:id">
					<Admin />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
interface AppProps {}

export default App;