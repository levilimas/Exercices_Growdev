const square = document.querySelector('#square');

square.addEventListener('click', () => {
	const newPositionX = Math.random() * (window.innerWidth - square.offsetWidth);
	const newPositionY = Math.random() * (window.innerHeight - square.offsetHeight);

	square.style.left = `${newPositionX}px`;
	square.style.top = `${newPositionY}px`;
});

