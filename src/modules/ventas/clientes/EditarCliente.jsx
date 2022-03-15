import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClienteByCif } from '../services/Clientes';

const EditarCliente = () => {
	const params = useParams();
	const [cliente, setCliente] = useState({});

	useEffect(() => {
		const cliente = getClienteByCif(params.cif);
		setCliente(cliente);
	}, [params]);

	return (
		<div className='container' ref={useFadeLoad()}>
			<div className='row'>
				<div className='col-100'>
					<h1>Detalle de cliente</h1>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>CIF</th>
								<th>Localidad</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{cliente.nombre}</td>
								<td>{cliente.cif}</td>
								<td>{cliente.localidad}</td>
							</tr>
						</tbody>
					</table>
					<Link to='/ventas/tabla-clientes'>
						<button>Regresar</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EditarCliente;
