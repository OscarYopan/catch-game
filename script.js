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

function createEnemy() {
  
}

function startGame() {
  
}

