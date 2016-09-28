import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CocktailsIndex(props){
	return(
		<div>
			<div className='col-md-4'>
				<ul>
					{props.cocktails.map(cocktail => <Link to={`/cocktails/${cocktail.id}`}><li key={cocktail.id}>{cocktail.name}</li></Link>)}
				</ul>
			</div>
			<div className='col-md-8'>
				{props.children}
			</div>
		</div>

	)
}

function mapStateToProps(state){
	return{
		cocktails: state.cocktails
	}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailsIndex)