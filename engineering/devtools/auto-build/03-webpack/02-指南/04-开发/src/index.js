import funcPrint from './print';

window.onload = () => {
  const h1 = document.createElement('h1');

  h1.textContent = `hello world.
  你好世界!
  `;
  document.body.appendChild(h1);
};

console.log('index log.');
funcPrint();
