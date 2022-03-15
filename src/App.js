import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ProtectRoute from './guards/ProtectRoute';
import Inicio from './pages/Inicio';
import Soporte from './pages/Soporte';

// Carga del componente mediante LazyLoading

const InicioVentas = React.lazy(() => import('./modules/ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./modules/rrhh/InicioRRHH'));

function App() {
	const [usuario, setUsuario] = useState(null);
	const navigate = useNavigate();

	const handleLogin = () => {
		setUsuario({ nombre: 'Juan Perez', rol: 'ventas' });
		navigate('/');
	};

	const handleLogout = () => {
		setUsuario(null);
		navigate('/');
	};

	return (
		<>
			<NavMenu
				usuario={usuario}
				handleLogin={handleLogin}
				handleLogout={handleLogout}
			/>
			<Routes>
				/* La correspondiente a la ruta base del dominio */
				<Route path='/' element={<Inicio />} />
				<Route path='soporte' element={<Soporte />} />
				/* Ruta para modulo lazy loading */
				<Route
					path='/ventas/*'
					element={
						<ProtectRoute usuario={usuario}>
							<React.Suspense
								fallback={<p style={{ textAlign: 'center' }}>Cargando</p>}
							>
								<InicioVentas />
							</React.Suspense>
						</ProtectRoute>
					}
				/>
				<Route
					path='/recursos-humanos/*'
					element={
						<React.Suspense
							fallback={<p style={{ textAlign: 'center' }}>Cargando</p>}
						>
							<InicioRRHH />
						</React.Suspense>
					}
				/>
				<Route path='no-permitido' element={<p>Acceso no permitido</p>}></Route>
				/* Para rutas no definidas (se pone al final) */
				<Route
					path='*'
					element={
						<div className='container'>
							<p>Lo sentimos, la página no existe</p>
							<Link to='/'>
								<button>Volver al Inicio</button>
							</Link>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
