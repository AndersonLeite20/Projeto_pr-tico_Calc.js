import calculate from "./calculate.js"

const input = document.getElementById('input')
export function handleButtonpress(ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
}
export function handleButtonClear(){
  input.value = ''
  input.focus()
}
export function handleTyper(ev){
  ev.preventDefault()
    
  const allowedKeys = ['(',')','/','7,','8','9',' * ','4','5','6',' - ','1','2','3',' + ','0','.',' % ']
    if(allowedKeys.includes(ev.key)){
      input.value += ev.key
      return
    }
    if(ev.key === 'Backspace'){
      input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
      calculate()
    }
}