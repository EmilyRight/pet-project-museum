const permanent = document.querySelector('.permanent');
const temporary = document.querySelector('.temporary');
const combined = document.querySelector('.combined');
const basic = document.querySelector('.basic-amount');
const senior = document.querySelector('.senior-amount');
const total = document.querySelector('.total_sum');
const ticketsContainer = document.querySelector('.buy_tickets');

const ticketButtons = document.querySelectorAll('.tickets-button');


let price = 0;
let sum = 0;


for(let i = 0; i < ticketButtons.length; i++) {
    ticketButtons[i].addEventListener('click', countSum)
}


permanent.addEventListener('click', countSum)

temporary.addEventListener('click', countSum)

combined.addEventListener('click', countSum)

function countSum () {
  if(permanent.checked) {
    price = 20;
  }
  if(temporary.checked) {
    price = 25;
  };
  if(combined.checked) {
    price = 40;
  };
  let sum = (basic.value * price) + (senior.value * price / 2);

  total.innerHTML = ``;
  total.innerHTML = `${sum}`;
}

const obj = {
  
  basic: basic.value,
  senior: senior.value,
  sum: sum,
}

localStorage.setItem('obj', obj);