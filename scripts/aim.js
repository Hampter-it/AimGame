const start = document.getElementById('start')
const timer = document.getElementById('timer')
const timeOver = document.getElementById('timeOver')
const background = document.getElementById('background')
const screens = document.querySelectorAll('.screen')

let time = 0

start.addEventListener('click', event => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timer.addEventListener('click', event => {
	if (event.target.classList.contains('timer__button')) {
		time = event.target.getAttribute('data-time')
		screens[1].classList.add('up')
	}
})
