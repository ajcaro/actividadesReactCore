import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditarCliente = () => {
	const params = useParams();

	useEffect(() => {
		console.log(params.cif);
	}, [params]);

	return <div>EditarCliente</div>;
};

export default EditarCliente;
