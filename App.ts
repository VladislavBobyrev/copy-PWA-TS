// const style = document.querySelector('head').appendChild(document.createElement('link'))
//   style.rel="stylesheet"
//   style.href = '/style.css'

window.addEventListener('load',
  () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => { console.log('SW registered!', reg); })
        .catch(err => console.log('SW registration FAIL:', err));
    }
  });


const init = () => {
  const inputColor = document.querySelector('input[type=color]')
  inputColor.addEventListener('input', searchColorInput)

  const inputCopu = document.querySelector('input[type=text]')
  inputCopu.addEventListener('click', clipValue)
}
init()

function searchColorInput() {
  const inputColor = document.querySelector('input[type=color]')
  updateCopuInput(inputColor.value)
  return inputColor.value
}

function updateCopuInput(value = '#ff000f') {
  const inputCopu = document.querySelector('input[type=text]')
  inputCopu.value = value

  const main = document.getElementById('main')
  main.style.background = value

}

function clipValue() {
  const inputCopu = document.querySelector('input[type=text]').value
  navigator.clipboard.writeText(inputCopu)
    .then(() => {
      // Получилось!
      alert(`Copu colors ${inputCopu}`)
    })
}