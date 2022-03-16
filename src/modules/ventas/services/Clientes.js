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
	return axios.post(clientesEndPoint, cliente);
};

export function getClienteById(_id) {
	return axios.get(`${clientesEndPoint}/${_id}`);
}
