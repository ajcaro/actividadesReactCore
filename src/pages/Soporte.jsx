import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeLoad } from '../hooks/useFadeLoad';

const Soporte = () => {
	return (
		<div className='container' ref={useFadeLoad()}>
			<h1>Soporte</h1>
			<Link to='/'>
				<button>Volver al inicio</button>
			</Link>
		</div>
	);
};

export default Soporte;
