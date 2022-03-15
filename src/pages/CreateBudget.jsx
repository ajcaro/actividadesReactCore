import React, { useState } from 'react';

const CreateBudget = () => {
	const [values, setValues] = useState({
		customer: '',
		cif: '',
		date: new Date().toISOString().substring(0, 10),
	});

	const [validFields, setValidFields] = useState({
		customer: { valid: false, message: '*' },
		cif: { valid: false, message: '*' },
	});

	const validateInput = (name, value) => {
		switch (name) {
			case 'customer':
				if (value.length < 4) {
					setValidFields({
						...validFields,
						customer: {
							valid: false,
							message: 'El cliente debe tener al menos 4 caracteres',
						},
					});
				} else {
					setValidFields({
						...validFields,
						customer: {
							valid: true,
							message: '',
						},
					});
				}
				break;

			case 'cif':
				if (!new RegExp(/([ABCDEFGHPQSKLMX])/i).test(value)) {
					setValidFields({
						...validFields,
						cif: {
							valid: false,
							message: 'Letra del CIF no válida',
						},
					});
				} else if (!new RegExp(/[0-9]{8}/i).test(value.substring(1))) {
					setValidFields({
						...validFields,
						cif: {
							valid: false,
							message:
								'Debe tener 8 caracteres númericos después de la letra',
						},
					});
				} else {
					setValidFields({
						...validFields,
						cif: {
							valid: true,
							message: '',
						},
					});
				}
				break;
		}
	};

	const handleOnChange = ({ target }) => {
		setValues(prevState => {
			validateInput(target.name, target.value);
			return { ...values, [target.name]: target.value };
		});
	};

	return (
		<div className='container'>
			<form>
				<div className='row'>
					<div className='col-100'>
						<label>
							Cliente
							<span className='alert'>{validFields.customer.message}</span>
						</label>
						<input
							type='text'
							name='customer'
							value={values.customer}
							onChange={handleOnChange}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-50'>
						<label>
							CIF
							<span className='alert'>{validFields.cif.message}</span>
						</label>
						<input
							type='text'
							name='cif'
							value={values.cif}
							onChange={handleOnChange}
							maxLength='9'
						/>
					</div>
					<div className='col-50'>
						<label>Fecha presupuesto</label>
						<input
							type='date'
							name='date'
							value={values.date}
							onChange={handleOnChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateBudget;
