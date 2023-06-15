const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")
const historyBtn = document.querySelector(".history")
const stopwatch = document.querySelector(".stopwatch")
const time = document.querySelector(".time")
const timeList = document.querySelector(".time-list")
const infoBtn = document.querySelector(".info")
const modalShadow = document.querySelector(".modal-shadow")
const closeModalBtn = document.querySelector(".close")

let sec = 0
let min = 0

const handleStart = () => {
	setInterval(() => {
		sec++
	if (sec <= 9 ){
		stopwatch.textContent = `${min}:0${sec}`
	} else if (sec > 9 && sec <=59){
		stopwatch.textContent = `${min}:${sec}`
	} else {
		sec = 0
		min++
		stopwatch.textContent = `${min}:0${sec}`
	}
	
	}, 200)
}

startBtn.addEventListener("click", handleStart)
