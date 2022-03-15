import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

const DashboardProducts = () => {
	const [term, setTerm] = useState('');
	const { data, isLoading } = useSearch(term, 'products');

	const handleSearchProduct = e => setTerm(e.target.value);

	return (
		<div className='row'>
			<div className='col-100'>
				<input type='text' onChange={handleSearchProduct} />
				<table>
					<thead>
						<tr>
							<th>Articulo</th>
							<th>Marca</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={3}> Cargando datos ...</td>
							</tr>
						) : (
							data.map(product => (
								<tr key={product.sku}>
									<td>{product.nombre}</td>
									<td>{product.marca}</td>
									<td>{product.precio}</td>
								</tr>
							))
						)}
						<tr></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashboardProducts;
