import { NavLink } from 'react-router-dom';

const NavMenu = () => {
	return (
		<nav>
			<div>Logo</div>
			<div>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'activo' : '')}>
					Inicio
				</NavLink>
				<NavLink
					to='/ventas'
					className={({ isActive }) => (isActive ? 'activo' : '')}
				>
					Ventas
				</NavLink>
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
