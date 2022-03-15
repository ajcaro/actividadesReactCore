import React, { Component } from 'react';

export class TablaClientes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowHelp: false,
		};
		// Enlaza el this del componente con la funcion en el elemento
		// this.handleShowHelp = this.handleShowHelp.bind(this);
	}

	handleShowHelp() {
		// Cuando utilicemos el estado previo para setear el nuevo, usaremos una callback
		this.setState(prevState => ({ isShowHelp: !prevState.isShowHelp }));
	}

	render() {
		return (
			<div className='container'>
				<h1>{this.props.titulo}</h1>
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>CIF</th>
						</tr>
					</thead>
					<tbody>
						{this.props.clientes.map(cliente => (
							<tr key={cliente.cif}>
								<td>{cliente.nombre}</td>
								<td>{cliente.cif}</td>
							</tr>
						))}
					</tbody>
				</table>
				{this.state.isShowHelp ? (
					<>
						{' '}
						<button onClick={() => this.handleShowHelp()}>
							Ocultar ayuda
						</button>
						<div className='help'>
							<p>Lorem ipsum dolor sit.</p>
						</div>
					</>
				) : (
					<button onClick={() => this.handleShowHelp()}>
						Ver ayuda
					</button>
				)}
			</div>
		);
	}
}

export default TablaClientes;
