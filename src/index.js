import '../styles/style.css'
import header from './parts/header.htm'
import objective from './parts/objective.htm'
const $app = document.getElementById('app')


$app.innerHTML += header

const start = 1367350200000
const end = new Date().getTime()
const exp = Math.round((end - start) / 31536000000)
$app.innerHTML += objective.replace('{{experience}}', exp)

document.dispatchEvent(new Event('prerender-ready'))