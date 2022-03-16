import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClienteById } from '../services/Clientes';

const EditarCliente = () => {
	//const navigate = useNavigate();
	const params = useParams();
	const [isEditMode, setIsEditMode] = useState(false);
	const [values, setValues] = useState({
		nombre: '',
		actividades: '',
		direccion: '',
		localidad: '',
	});

	useEffect(() => {
		getClienteById(params._id)
			.then(res => {
				setValues(() => ({
					nombre: res.data.cliente.nombre,
					actividades: res.data.cliente.actividades,
					direccion: res.data.cliente.direccion,
					localidad: res.data.cliente.localidad,
				}));
			})
			.catch(err => {
				console.log(err);
			});
	}, [params]);

	const handleOnChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = e => {};
	return (
		<div className='container' ref={useFadeLoad()}>
			<div className='row'>
				<div className='col-100'>
					<h1>Editar cliente</h1>
					<form onSubmit={handleOnSubmit}>
						<div className='row'>
							<div className='col-100'>
								<label>Nombre</label>
								<input
									type='text'
									name='nombre'
									value={values.nombre}
									onChange={handleOnChange}
									readOnly={!isEditMode}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-100'>
								<label>actividades</label>
								<input
									type='text'
									name='actividades'
									value={values.actividades}
									onChange={handleOnChange}
									readOnly={!isEditMode}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-100'>
								<label>direccion</label>
								<input
									type='text'
									name='direccion'
									value={values.direccion}
									onChange={handleOnChange}
									readOnly={!isEditMode}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-100'>
								<label>Localidad</label>
								<input
									type='text'
									name='localidad'
									value={values.localidad}
									onChange={handleOnChange}
									readOnly={!isEditMode}
								/>
							</div>
						</div>
						<div className='row end'>
							<Link to='/ventas/tabla-clientes'>
								<button className='outline'>Cancelar</button>
							</Link>
							<button type='submit'>Actualizar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditarCliente;

{
	/* <div className='row'>
				<div className='col-100'>
					<h1>Detalle de cliente</h1>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Actividades</th>
								<th>Direccion</th>
								<th>Localidad</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{cliente.nombre}</td>
								<td>{cliente.actividades}</td>
								<td>{cliente.direccion}</td>
								<td>{cliente.localidad}</td>
							</tr>
						</tbody>
					</table>
					<Link to='/ventas/tabla-clientes'>
						<button>Regresar</button>
					</Link>
				</div>
			</div> */
}
