import React, { useEffect } from 'react';
import withModal from '../hocs/withModal';

const Home = props => {
	useEffect(() => {
		props.handleModalText(
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum in'
		);
	}, []);

	return (
		<div className='container'>
			<button onClick={props.handleToggleModal}>Ver Condiciones</button>
		</div>
	);
};

export default withModal(Home);
