const screens = document.querySelectorAll('.screen')
const ChooseEnemyBtn = document.querySelectorAll('.choose-enemy-btn')
const startBtn = document.querySelector('#start-btn')
const gameContainer = document.querySelector('#game-container')
const timeEl = document.querySelector('.time')
const scoreEl = document.querySelector('.score')
const messageEl = document.querySelector('.message')

let seconds = 0
let score = 0
let selectEnemy = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

ChooseEnemyBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selectEnemy = { src, alt }
    screens[1].classList.add('up')
    setTimeout(createEnemy, 1000)
    startGame()
  })
})

function startGame() {
  setInterval(increaseTime, 1000)
}

function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}`: m
  s = s < 10 ? `0${s}`: s
  timeEl.innerHTML = `Time: ${m}:${s}`
  seconds++
}

function createEnemy() {
  const enemy = document.createElement('div')
  enemy.classList.add('enemy')
  const { x, y } = getRandomLocation()
  enemy.style.top = `${y}px`
  enemy.style.left = `${x}px`
  enemy.innerHTML = `<img src="${selectEnemy.src}" alt="${selectEnemy.alt}"/>`

  enemy.addEventListener('click', catchEnemy)

  gameContainer.appendChild(enemy)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100

  return { x, y }
}

function catchEnemy() {
  console.log(123);
}

