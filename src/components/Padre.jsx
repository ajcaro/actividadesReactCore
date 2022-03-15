import React, { Component } from 'react';
import Hijo from './Hijo';

export class Padre extends Component {
	nombreUsuario = 'Juan';

	constructor(props) {
		super(props);
		console.log('Se ejecuta el constructor de padre');
		this.state = {
			mensaje: 'Bienvenidos!',
			cantidad: 0,
		};
	}

	componentDidMount() {
		console.log('Se ejecuta el metodo componentDidMount del padre');
		setTimeout(() => {
			this.setState({ mensaje: 'Que tal' });
			this.nombreUsuario = 'Laura';
		}, 2000);
	}

	componentDidUpdate() {
		console.log('Se ejecuta Al actualizar el estado del padre');
	}

	componentWillUnmount() {}

	handleSetCantidad = cantidad => {
		this.setState(prevState => ({
			cantidad: (prevState.cantidad += cantidad),
		}));
	};

	render() {
		console.log('Se ejecuta el metodo render del Padre');
		return (
			<>
				{/* <p>{this.state.mensaje}</p> */}
				<p>Cantidad {this.state.cantidad}</p>
				<Hijo
					mensaje={this.state.mensaje}
					nombreUsuario={this.nombreUsuario}
					handleSetCantidad={this.handleSetCantidad}
				/>
			</>
		);
	}
}

export default Padre;
