const Modal = ({ text, handleCancel, handleConfirm }) => {
	return (
		<div className='overlay'>
			<div className='modal'>
				<p>{text}</p>
				<div className='modal-buttons'>
					<button onClick={handleCancel} className='outline'>
						Cancelar
					</button>
					<button onClick={handleConfirm}>Aceptar</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
