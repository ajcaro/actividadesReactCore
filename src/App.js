import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Inicio from './pages/Inicio';
import Soporte from './pages/Soporte';

// Carga del componente mediante LazyLoading

const InicioVentas = React.lazy(() => import('./modules/ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./modules/rrhh/InicioRRHH'));

function App() {
	return (
		<>
			<NavMenu />
			<Routes>
				/* La correspondiente a la ruta base del dominio */
				<Route path='/' element={<Inicio />} />
				<Route path='soporte' element={<Soporte />} />
				/* Ruta para modulo lazy loading */
				<Route
					path='/ventas/*'
					element={
						<React.Suspense
							fallback={<p style={{ textAlign: 'center' }}>Cargando</p>}
						>
							<InicioVentas />
						</React.Suspense>
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
				/* Para rutas no definidas (se pone al final) */
				<Route
					path='*'
					element={
						<div className='container'>
							{' '}
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
