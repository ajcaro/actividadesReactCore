describe('Crear cliente', () => {
	const cliente = {
		nombre: 'Iberdrola',
		cif: 'A12345678',
		localidad: 'Sevilla',
	};

	it('Navega al componente para crear cliente', () => {
		cy.visit('http://127.0.0.1:3000');
		cy.wait(1000);
		cy.get('nav > button').click();
		cy.wait(1000);
		cy.get('[href="/ventas"]').click();
		cy.wait(1000);
		cy.get('a > button').click();
		cy.wait(1000);
		cy.get('[href="/ventas/crear-cliente"] > button').click();
		cy.wait(1000);
	});

	it('Completa el formulario', () => {
		cy.get(':nth-child(1) > .col-100 > input').type(cliente.nombre);
		cy.wait(1000);

		cy.get(':nth-child(2) > .col-100 > input').type(cliente.cif);
		cy.wait(1000);

		cy.get(':nth-child(3) > .col-100 > input').type(cliente.localidad);
		cy.wait(1000);

		cy.get('[type="submit"]').click();
	});

	it('registra el nuevo cliente', () => {
		cy.get(':nth-child(5) > :nth-child(1)').contains(cliente.nombre);
	});
});
