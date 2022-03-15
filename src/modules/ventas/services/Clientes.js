const customers = [
	{ nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao' },
	{ nombre: 'Iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao' },
	{ nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid' },
	{ nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona' },
];

export function getClientes() {
	return customers;
}

export const setClientes = cliente => {
	customers.push(cliente);
};

export function getClienteByCif(cif) {
	return customers.find(cliente => cliente.cif === cif);
	// return customers.filter(cliente => cliente.cif === cif)[0];
}
