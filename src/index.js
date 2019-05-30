import '../styles/style.css'

console.log('hi :D')

setTimeout(() => {
  document.dispatchEvent(new Event('prerender-ready'))
}, 4000)