import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { deleteCliente, getClientes, searchClientes } from '../services/Clientes';

const TablaClientes = () => {
	const [clientes, setClientes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		term: '',
	});

	// useEffect(() => {
	// 	setIsLoading(() => true); // Todos los registros sin paginar
	// 	getClientes()
	// 		.then(res => {
	// 			setIsLoading(() => false);
	// 			setClientes(res.data.clientes);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});

	// 	//setClientes(() => getClientes());
	// }, []);

	const handleOnChange = ({ target }) => {
		setForm({ term: target.value });
	};

	const handleDeleteCliente = _id => {
		deleteCliente(_id)
			.then(res => {
				console.log('res: ', res);
				setClientes([]);
				setForm({ term: '' });
			})
			.catch(err => console.log('err: ', err));
	};

	useEffect(() => {
		if (form.term.length > 0) {
			setIsLoading(() => true);
			searchClientes(form.term)
				.then(res => {
					setClientes(() => res.data.clientes);
					setIsLoading(() => false);
				})
				.catch(err => {
					console.log(err);
					setIsLoading(() => false);
				});
		} else {
			setClientes([]);
		}
	}, [form.term]);

	return (
		<div className='container' ref={useFadeLoad()}>
			<div className='row'>
				<div className='col-100'>
					<h1>Clientes</h1>

					<Link to='../'>
						<button>Regresar</button>
					</Link>
					<Link to='/ventas/crear-cliente'>
						<button>Nuevo Cliente</button>
					</Link>

					<div className='row'>
						<form>
							<input
								type='search'
								name='term'
								value={form.term}
								onChange={handleOnChange}
							/>
						</form>
					</div>

					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{isLoading ? (
								<tr>
									<td colSpan={3}>Cargando ....</td>
								</tr>
							) : (
								clientes.map(cliente => (
									<tr key={cliente._id}>
										<td>{cliente.nombre}</td>
										<td>
											<Link
												to={`/ventas/editar-cliente/${cliente._id}`}
											>
												Visualizar
											</Link>
										</td>
										<td
											onClick={() =>
												handleDeleteCliente(cliente._id)
											}
										>
											Eliminar
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TablaClientes;
