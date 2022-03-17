import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateBudget from './CreateBudget';

describe('Test para formulario Crear Cliente', () => {
	//Describir el suite test

	test('Check Validacion del campo CIF', () => {
		// Describe el case test
		render(<CreateBudget />);
		//Hay una manera de comprobar que es lo que tenemos en el renderizado
		// const component = render(<CreateBudget />);
		// component.debug();
		const cifInput = screen.getByTestId('cif');
		const validationCifSpan = screen.getByTestId('validation-cif-span');
		userEvent.type(cifInput, 'Z');
		expect(validationCifSpan).toHaveTextContent('Letra del CIF no válida');
		userEvent.type(cifInput, 'A1A');
		expect(validationCifSpan).toHaveTextContent(
			'Debe tener 8 caracteres númericos después de la letra'
		);
	});
});
