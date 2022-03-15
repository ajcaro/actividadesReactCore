import React from 'react';
import { Link } from 'react-router-dom';

const Soporte = () => {
	return (
		<div className='container'>
			<h1>Soporte</h1>
			<Link to='/'>
				<button>Volver al inicio</button>
			</Link>
		</div>
	);
};

export default Soporte;
