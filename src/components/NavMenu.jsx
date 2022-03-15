import { NavLink } from 'react-router-dom';

const NavMenu = ({ usuario, handleLogin, handleLogout }) => {
	return (
		<nav>
			{usuario !== null ? (
				<div>
					<button onClick={handleLogout}>Logout</button>
					{usuario.nombre}
				</div>
			) : (
				<button onClick={handleLogin}>Login</button>
			)}
			<div>Logo</div>
			<div>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'activo' : '')}>
					Inicio
				</NavLink>
				{usuario?.rol === 'ventas' ? (
					<NavLink
						to='/ventas'
						className={({ isActive }) => (isActive ? 'activo' : '')}
					>
						Ventas
					</NavLink>
				) : null}

				<NavLink
					to='/recursos-humanos'
					className={({ isActive }) => (isActive ? 'activo' : '')}
				>
					Recursos Humanos
				</NavLink>
				<NavLink
					to='/soporte'
					className={({ isActive }) => (isActive ? 'activo' : '')}
				>
					Soporte
				</NavLink>
			</div>
		</nav>
	);
};

export default NavMenu;
