import '../styles/style.scss'
import me from './me.js'

const $app = document.getElementById('app')

const header = require('./parts/header.htm')
$app.innerHTML += header

const objective = require('./parts/objective.htm')
$app.innerHTML += objective.replace('{{experience}}', me.experience())

const skills = require('./parts/skills.htm')
$app.innerHTML += skills

const workExprience = require('./parts/work-exprience.htm')
$app.innerHTML += workExprience

document.dispatchEvent(new Event('prerender-ready'))