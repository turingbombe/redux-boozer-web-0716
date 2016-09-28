import React from 'react';
import {Route} from 'react-router'
import App from './components/app'
import CocktailsIndex from './components/cocktails_index'
import CocktailShow from './components/cocktails_show'
export default (
	<Route path='/' component={App}>
		<Route path="/cocktails" component={CocktailsIndex}>
			<Route path="/cocktails/:id" component={CocktailShow} />
		</Route>
	</Route>
)
