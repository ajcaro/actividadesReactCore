import React, { useEffect, useState } from 'react';

const CodeCheck = () => {
	const [codigo, setCodigo] = useState('');
	const [isShowInput, setIsShowInput] = useState(true);
	const [contador, setContador] = useState(20);

	//e es el evento con los valores de control de JS
	const handleChange = e => {
		setCodigo(e.target.value);
	};

	useEffect(() => {
		if (codigo === '1234') {
			setIsShowInput(false);
			setContador(0);
		}
	}, [codigo]);

	useEffect(() => {
		const timer = setInterval(() => {
			if (contador > 0) {
				setContador(prevContador => prevContador - 1);
			}
		}, 1000);

		//Callback Opcional de limpieza
		return () => clearInterval(timer);
	}, [contador]);

	return (
		<>
			{isShowInput ? (
				<>
					<p>Introduzca el código recibido por sms</p>
					<input
						type='text'
						value={codigo}
						onChange={handleChange}
						placeholder='Intrdozuca el código'
					/>
					<p className='clock'>{contador}</p>
				</>
			) : (
				<p>Código Correcto, bienvenido!!</p>
			)}
		</>
	);
};

export default CodeCheck;
