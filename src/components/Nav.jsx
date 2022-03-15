import React, { Component } from 'react';

export class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<a className='activo'>Inicio</a>
					<a>Ventas</a>
					<a>Soporte</a>
				</ul>
			</nav>
		);
	}
}

export default Nav;
