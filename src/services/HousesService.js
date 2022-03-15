const houses = [
	{
		id: 1,
		title: 'Villa en Los Altos',
		price: 2000000,
		pic: 'https://i.ibb.co/6RhzdWb/property2.jpg',
	},
	{
		id: 2,
		title: 'Villa en La Finca',
		price: 2500000,
		pic: 'https://i.ibb.co/DW27TmQ/property1.jpg',
	},
	{
		id: 3,
		title: 'Villa en Puerto Banús',
		price: 3300000,
		pic: 'https://i.ibb.co/r5nPNc4/property3.jpg',
	},
	{
		id: 4,
		title: 'Villa en La Quinta Golf',
		price: 4300000,
		pic: 'https://i.ibb.co/k0PQR34/property4.jpg',
	},
];

export function getHouses() {
	//Veremos más adelante qeu estarán las peticiones HTTP
	return houses;
}
