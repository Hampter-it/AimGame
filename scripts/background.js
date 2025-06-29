const board = document.querySelector('#background')
const SQUARE_NUMBER = 400

for (let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	square.addEventListener('mouseenter', () => {
		square.style.backgroundColor = '#6563ff'
		square.style.boxShadow = '0 0 2px #6563ff, 0 0 10px #6563ff'
	})
	square.addEventListener('mouseleave', () => {
		square.style.backgroundColor = '#2b2b2b'
		square.style.boxShadow = '0 0 2px #000'
	})
	board.append(square)
}
