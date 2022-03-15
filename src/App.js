import React from 'react';
import { Nav } from './components/Nav';
import TablaClientes from './pages/TablaClientes';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clientes: [
				{ nombre: 'Gas Natural', cif: 'A12345678' },
				{ nombre: 'Iberdrola', cif: 'A87654321' },
				{ nombre: 'Jazztel', cif: 'B12345678' },
				{ nombre: 'BBVA', cif: 'C12345678' },
			],
			titulo: 'Listado de clientes',
		};
	}

	componentDidMount() {
		setTimeout(() => {
			// Simulamos un delay con nuevos datos
			//this.state.clientes.push({ nombre: 'Orange', dif: 'A444433333' });
			this.setState({
				clientes: [
					...this.state.clientes,
					{ nombre: 'Orange', cif: 'A444433333' },
				],
			});
		}, 2500);
	}

	render() {
		return (
			<>
				<Nav />
				<TablaClientes
					clientes={this.state.clientes}
					titulo={this.state.titulo}
				/>
			</>
		);
	}
}

export default App;
