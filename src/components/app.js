import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        
        <div className='container'>
        	<h3 className = 'row'><Link to='/cocktails'>Let's Get Crunk</Link></h3>
        	{ props.children }
        </div>

      </div>
    )
};
