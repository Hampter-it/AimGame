const start = document.getElementById('start')
const timer = document.getElementById('timer')
const timeOver = document.getElementById('timeOver')
const background = document.getElementById('background')
const screens = document.querySelectorAll('.screen')

let time = 11
let score = 0

start.addEventListener('click', event => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timer.addEventListener('click', event => {
	if (event.target.classList.contains('timer__button')) {
		parseInt((time = event.target.getAttribute('data-time')))
		screens[1].classList.add('up')
		startGame()
	}
})

// DEBUG
startGame()

function startGame() {
	setInterval(declaration, 1000)
	createRandomCircle()
	setTime(time)
}

function declaration() {
	if (time === 0) {
		finishGame()
	} else {
		let current = --time
		if (time < 10) {
			current = `0${current}`
		}
		setTime(current)
	}
}

function setTime(value) {
	timeOver.innerHTML = `00:${value}`
}

function finishGame() {}

function createRandomCircle() {
	const circle = document.createElement('div')
	circle.classList.add('circle')
	const sizeCircle = getRandomNumber(10, 40)
	circle.style.width = `${sizeCircle}px`
	circle.style.height = `${sizeCircle}px`
	const { width, height } = background.getBoundingClientRect()
	const x = getRandomNumber(sizeCircle, width - sizeCircle)
	const y = getRandomNumber(sizeCircle, height - sizeCircle)
	circle.style.left = `${x}px`
	circle.style.top = `${y}px`
	background.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
