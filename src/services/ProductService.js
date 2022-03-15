const products = [
	{ sku: 'A1', nombre: 'Iphone', marca: 'Apple', precio: 600 },
	{ sku: 'X1', nombre: 'Redmi', marca: 'Xiaomi', precio: 150 },
	{ sku: 'S1', nombre: 'Galaxy', marca: 'Samsung', precio: 300 },
];

export const findProducts = term => {
	let productsFoundes = [];
	if (term !== '') {
		const pattern = new RegExp('^' + term.toLocaleLowerCase()); //Todos los que comiencen por el term
		//Checkea el nombre con el patron y filtramos
		productsFoundes = products.filter(product =>
			pattern.test(product.nombre.toLocaleLowerCase())
		);
	}

	return productsFoundes;
};
