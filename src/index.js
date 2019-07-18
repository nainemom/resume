import '../styles/style.scss'

const $app = document.getElementById('app')

const header = require('./parts/header.htm')
$app.innerHTML += header

const objective = require('./parts/objective.htm')
const start = 1367350200000
const end = new Date().getTime()
const exp = Math.round((end - start) / 31536000000)
$app.innerHTML += objective.replace('{{experience}}', exp)

const skills = require('./parts/skills.htm')
$app.innerHTML += skills

const workExprience = require('./parts/work-exprience.htm')
$app.innerHTML += workExprience

document.dispatchEvent(new Event('prerender-ready'))