import React, { useState } from 'react';

const withModal = Component => {
	function ComponentWithModal() {
		const [text, setText] = useState('');
		const [isShowModal, setIsShowModal] = useState(false);

		const handleToggleModal = () => {
			setIsShowModal(prev => !prev);
		};

		const handleModalText = text => {
			setText(text);
		};

		return (
			<>
				{isShowModal && (
					<div className='overlay'>
						<div className='modal'>
							<p>{text}</p>
							<button onClick={handleToggleModal}>Aceptar</button>
						</div>
					</div>
				)}

				<Component
					handleModalText={handleModalText}
					handleToggleModal={handleToggleModal}
				/>
			</>
		);
	}
	return ComponentWithModal;
};

export default withModal;
