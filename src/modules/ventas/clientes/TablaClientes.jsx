import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getClientes } from '../services/Clientes';

const TablaClientes = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		setClientes(() => getClientes());
	}, [clientes]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-100'>
					<h1>Clientes</h1>

					<Link to='../'>
						<button>Regresar</button>
					</Link>
					<Link to='/ventas/crear-cliente'>
						<button>Nuevo Cliente</button>
					</Link>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{clientes.map(cliente => (
								<tr key={cliente.cif}>
									<td>{cliente.nombre}</td>
									<td>
										<Link
											to={`/ventas/editar-cliente/${cliente.cif}`}
										>
											Visualizar
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TablaClientes;
