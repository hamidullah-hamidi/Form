const input = document.querySelectorAll('form input');
const btn = document.querySelector('button');

console.log(btn, input);

function submit(e) {
  e.preventDefault();

  input.forEach((inp) => {
    if (inp.value.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'Can not be empty!';
      p.style.color = 'red';
      inp.style.borderColor = 'red';
      inp.insertAdjacentElement('afterend', p);
    }
  });
}

btn.addEventListener('click', submit);
