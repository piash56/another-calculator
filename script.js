let display = document.getElementById('inputBox');
let keys = document.querySelectorAll('.key');

let keysInt = [...keys];
let digits = '';

keysInt.forEach(keyBtn => {
  keyBtn.addEventListener('click',(e) => {

    if(e.target.innerHTML == 'DEL'){
      digits = digits.slice(0, -1);
      display.value = digits;
    } else if(e.target.innerHTML == 'AC'){
      digits = '';
      display.value = digits;
    }else if(e.target.innerHTML == '='){
      digits = eval(digits);
      display.value = digits;
    }else{
      digits += e.target.innerHTML;
      display.value = digits;
    }
  })
})