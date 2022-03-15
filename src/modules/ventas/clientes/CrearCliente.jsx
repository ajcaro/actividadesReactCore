import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { setClientes } from '../services/Clientes';

const CrearCliente = () => {
	const [values, setValues] = useState({
		nombre: '',
		cif: '',
		localidad: '',
	});

	const navigate = useNavigate();

	const handleOnChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		setClientes(values);
		navigate('/ventas/tabla-clientes'); //Navegación programática
	};

	return (
		<div className='container' ref={useFadeLoad()}>
			<div className='row'>
				<div className='col-100'>
					<h1>Nuevo cliente</h1>
					<form onSubmit={handleOnSubmit}>
						<div className='row'>
							<div className='col-100'>
								<label>Nombre</label>
								<input
									type='text'
									name='nombre'
									value={values.nombre}
									onChange={handleOnChange}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-100'>
								<label>Cif</label>
								<input
									type='text'
									name='cif'
									value={values.cif}
									onChange={handleOnChange}
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
								/>
							</div>
						</div>
						<div className='row end'>
							<Link to='/ventas/tabla-clientes'>
								<button className='outline'>Cancelar</button>
							</Link>
							<button type='submit'>Crear</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CrearCliente;
