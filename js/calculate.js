export default function calculate() {
  const resultInput = document.getElementById('result')
  resultInput.innerText = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}