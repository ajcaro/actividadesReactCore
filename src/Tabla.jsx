import React, { useState } from 'react';
import Modal from './componentes/Modal';

const Tabla = ({ proveedores, handleDeleteProveedor }) => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [idProveedor, setIdProveedor] = useState(null);

	const handleToggleModal = () => setIsShowModal(prev => !prev);

	const handleSelectProveedor = id => {
		setIdProveedor(id);
		handleToggleModal();
	};

	const handleConfirmDeleteProveedor = () => {
		handleDeleteProveedor(idProveedor);
		handleToggleModal();
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>CIF</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{proveedores.map(proveedor => {
						return (
							<tr key={proveedor.id}>
								<td>{proveedor.nombre}</td>
								<td>{proveedor.cif}</td>
								<td onClick={() => handleSelectProveedor(proveedor.id)}>
									Eliminar
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{isShowModal && (
				<Modal
					text='¿Está seguro que desea elimiunar el cliente?'
					handleCancel={handleToggleModal}
					handleConfirm={handleConfirmDeleteProveedor}
				/>
			)}
		</>
	);
};

export default Tabla;
