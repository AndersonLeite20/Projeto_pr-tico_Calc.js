export default function(ev){
  const button = ev.currentTarget
  console.log(button)
  if(button.innerText === 'copy'){
    button.innerText = 'copied'
    button.classList.add('success')
    window.navigator.clipboard.writeText(document.getElementById('result').value)
  }else{
    button.innerText = 'copy'
    button.classList.remove('success')
  }
}