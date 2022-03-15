import React, { Component } from 'react';

export class Hijo extends Component {
	constructor(props) {
		super(props);
		// console.log('Se ejecuta el constructor de Hijo');
	}

	componentDidMount() {
		// console.log('Se ejecuta el metodo componentDidMount del Hijo');
	}

	componentDidUpdate() {}

	render() {
		// console.log('Se ejecucta el render del Hijo');
		return (
			<>
				<div>Hijo</div>
				<p>{this.props.mensaje}</p>
				<p>{this.props.nombreUsuario}</p>
				<hr />
				<button onClick={() => this.props.handleSetCantidad(1)}>
					+1
				</button>
				<button onClick={() => this.props.handleSetCantidad(-1)}>
					-1
				</button>
			</>
		);
	}
}

export default Hijo;
