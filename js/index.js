import  calculate  from "./calculate.js"
import copyToclipboard from "./copyToclipboard.js"
import { handleButtonpress,handleButtonClear, handleTyper } from "./keyHandler.js"
import themeSwitcher from "./themeSwitcher.js" 

document.querySelectorAll('.charKey').forEach(function(charkeyBtn){
  charkeyBtn.addEventListener('click',handleButtonpress)
})
document.getElementById('clear').addEventListener('click',handleButtonClear)
document.getElementById('input').addEventListener('keydown',handleTyper)
document.getElementById('equal').addEventListener('click',calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToclipboard)
document.getElementById('themeSwitcher').addEventListener('click',themeSwitcher)