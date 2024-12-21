// создание счетчика
const resultDiv = document.querySelectorAll(".result")
const decreaseButton = document.getElementById("decrease-button")
const increaseButton = document.getElementById("increase-button")

// инициализация счетчика
let counter = 0

// функция обновления счетчика
function updateCounter() {
	[...resultDiv].forEach(el => (el.textContent = counter))
}

// обработчики событий для уменьшения счетчика
decreaseButton.addEventListener("click", () => {
	counter--
	updateCounter()
})

// обработчики событий для увеличения счетчика
increaseButton.addEventListener("click", () => {
	counter++
	updateCounter()
})

// обновление счетчика при загрузке страницы
updateCounter()

// кнопка сброса счетчика
const resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", () => {
	counter = 0
	updateCounter()
})
