import { useEffect, useRef } from 'react';

export const useFadeLoad = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		containerRef.current.classList.add('fade');
		setTimeout(() => {
			//Este delay es para que el navegador no implenete las dos clases al
			//mismo tiempo y se note el efecto FadeIn
			containerRef.current.classList.add('show');
		}, 100);
	}, []);

	return containerRef;
};
