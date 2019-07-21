import '../styles/style.scss'
import me from './me.js'

const $app = document.getElementById('app')

$app.innerHTML += require('./parts/header.htm')
$app.innerHTML += require('./parts/objective.htm')
$app.innerHTML += require('./parts/skills.htm')
$app.innerHTML += require('./parts/work-exprience.htm')

$app.innerHTML = $app.innerHTML.replace('{{experience}}', me.experience())

document.dispatchEvent(new Event('prerender-ready'))