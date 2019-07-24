import '../styles/style.scss'

global.utils = require('./utils.js').default
global.templates = require('./templates.js').default
global.me = require('./me.js').default

const $app = document.getElementById('app')

$app.innerHTML += require('./parts/header.htm')
$app.innerHTML += require('./parts/objective.htm')
$app.innerHTML += require('./parts/skills.htm')
$app.innerHTML += require('./parts/work-exprience.htm')
$app.innerHTML += require('./parts/opensource-projects.htm')

$app.innerHTML = utils.applyEvals($app.innerHTML)

setTimeout(() => {
  document.dispatchEvent(new Event('prerender-ready'))
})
