import '../styles/style.css'
import md from './test.md'
console.log(md)
console.log('hi :D')

document.body.innerHTML += md

document.dispatchEvent(new Event('prerender-ready'))