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
let timeHistoryArray = []

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
	clearInterval(countTime)
	recordTimeResult()
	createTimeRecord()
}

const recordTimeResult = () => {
	if (stopwatch.textContent !== "0:00") {
		time.style.visibility = "visible"
		time.innerHTML = `Last recorded time: ${stopwatch.textContent}`
		timeHistoryArray.push(`${stopwatch.textContent}`)
		console.log(timeHistoryArray)
	}
	clearStopwatch()
}

const clearStopwatch = () => {
	stopwatch.textContent = "0:00"
	sec = 0
	min = 0
}

const createTimeRecord = () => {
	timeList.textContent = ""
	timeHistoryArray.forEach(time => {
		const liTime = document.createElement("li")
		liTime.append(time)
		timeList.append(liTime)
	})
}

const handleVisibility = () => {
	timeList.classList.toggle("showlist")
}

const resetHandle = () => {
	clearStopwatch()
	timeHistoryArray = []
	timeList.textContent = ""
	timeList.classList.remove("showlist")
}

const toggleModal = () => {
	if (modalShadow.style.display === "block") {
		modalShadow.style.display = "none"
	} else {
		modalShadow.style.display = "block"
	}
}

startBtn.addEventListener("click", handleStart)
pauseBtn.addEventListener("click", handlePause)
stopBtn.addEventListener("click", handleStop)
historyBtn.addEventListener("click", handleVisibility)
resetBtn.addEventListener("click", resetHandle)
infoBtn.addEventListener("click", toggleModal)
closeModalBtn.addEventListener("click", toggleModal)
window.addEventListener("click", e =>
	e.target === modalShadow ? toggleModal() : false
)
