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
let countTime

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		sec++
		if (sec <= 9) {
			stopwatch.textContent = `${min}:0${sec}`
		} else if (sec > 9 && sec <= 59) {
			stopwatch.textContent = `${min}:${sec}`
		} else {
			sec = 0
			min++
			stopwatch.textContent = `${min}:0${sec}`
		}
	}, 50)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	console.log("stop")
	clearInterval(countTime)
	timeResult()
}

const timeResult = () => {
	const newTime = document.createElement("li")

	if (sec <= 9) {
		newTime.textContent = `${min}:0${sec}`
	}
	if (sec > 9 && sec <= 59) {
		newTime.textContent = `${min}:${sec}`
	}

	timeList.append(newTime)
	clearStopwatch()
}

const clearStopwatch = () => {
	stopwatch.textContent = "0:00"
	sec = 0
	min = 0
}

startBtn.addEventListener("click", handleStart)
pauseBtn.addEventListener("click", handlePause)
stopBtn.addEventListener("click", handleStop)
