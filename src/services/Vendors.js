const vendors = [
	{ nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao' },
	{ nombre: 'Iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao' },
	{ nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid' },
	{ nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona' },
];

export const findVendors = term => {
	let vendorsFoundes = [];
	if (term !== '') {
		const pattern = new RegExp('^' + term.toLocaleLowerCase()); //Todos los que comiencen por el term
		//Checkea el nombre con el patron y filtramos
		vendorsFoundes = vendors.filter(vendor =>
			pattern.test(vendor.nombre.toLocaleLowerCase())
		);
	}

	return vendorsFoundes;
};
