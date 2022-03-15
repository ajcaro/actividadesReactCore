import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
	return (
		<div className='container'>
			<h1>Bienvenidos a nuestra aplicación</h1>
			<Link to='/soporte'>
				<button>Ayuda</button>
			</Link>
		</div>
	);
};

export default Inicio;
