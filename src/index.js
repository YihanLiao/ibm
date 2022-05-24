import './index.scss'

const quoteValue = 30.123;

setTimeout(() => {
  document.querySelector('#info .quote').innerHTML = `報價時間：${new Date().toLocaleString()}`;
  document.getElementById('quoteValue').innerHTML = quoteValue;
}, 1000)

const usDollarInput = document.getElementById('us-dollar-input');
usDollarInput.addEventListener('input', (e) => {
  document.getElementById('new-taiwan-dollar-input').value = e.target.value * quoteValue;
})

window.radioSelect = function (target) {
  let radioitems = document.getElementsByClassName('radio-item');
  Object.entries(radioitems).forEach(([index, dom]) => {
    console.dir(dom)
    dom.classList.remove('selected');
  });
  target.parentElement.classList.add('selected');
}

window.modalOpen = function () {
  window.document.body.style.overflow = 'hidden';
  document.getElementById('modal').style.display = 'flex';
}

window.modalClose = function () {
  window.document.body.style.overflow = 'auto';
  document.getElementById('modal').style.display = 'none';
}