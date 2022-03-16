import axios from 'axios';

const clientesEndPoint = 'http://localhost:8080/clientes';

const customers = [];

export function getClientes() {
	return axios.get(clientesEndPoint); // Devuelve una promesa
}

export const searchClientes = term => {
	return axios.get(`${clientesEndPoint}/search/${term}`);
};

export const setClientes = cliente => {
	customers.push(cliente);
};

export function getClienteByCif(cif) {
	return customers.find(cliente => cliente.cif === cif);
}
