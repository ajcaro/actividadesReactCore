import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ usuario, children }) => {
	if (usuario?.rol !== 'ventas') {
		return <Navigate to='/no-permitido' replace />;
	}

	return children;
};

export default ProtectRoute;
