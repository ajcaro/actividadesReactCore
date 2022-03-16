import { Outlet, Routes, Route, Link } from 'react-router-dom';
import TablaClientes from './clientes/TablaClientes';
import CrearCliente from './clientes/CrearCliente';
import EditarCliente from './clientes/EditarCliente';
import { useFadeLoad } from '../../hooks/useFadeLoad';

const InicioVentas = () => {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<InicioVentasLayout />} />
				<Route path='tabla-clientes' element={<TablaClientes />} />
				<Route path='crear-cliente' element={<CrearCliente />} />
				<Route path='editar-cliente/:_id' element={<EditarCliente />} />
				{/* <Route path='editar-cliente'>
					<Route path=':cif' element={<EditarCliente />} />
				</Route> */}
			</Route>
		</Routes>
	);
};

export default InicioVentas;

const InicioVentasLayout = () => {
	return (
		<div className='container' ref={useFadeLoad()}>
			<h1>Ventas</h1>
			{/* <Link to='tabla-clientes'>  */}
			{/* //con ruta relativa /*con ruta absoluta (más recomentable por legibilidad) */}
			<Link to='/ventas/tabla-clientes'>
				<button>Clientes</button>
			</Link>
		</div>
	);
};
