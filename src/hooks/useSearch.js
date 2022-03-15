import { useEffect, useState } from 'react';
import { findProducts } from '../services/ProductService';
import { findVendors } from '../services/Vendors';

export const useSearch = (term, entity) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			switch (entity) {
				case 'vendors':
					setData(findVendors(term));
					break;

				case 'products':
					setData(findProducts(term));
					break;
			}
			setIsLoading(false);
		}, 1500);
	}, [term]);

	return { data, isLoading };
};
