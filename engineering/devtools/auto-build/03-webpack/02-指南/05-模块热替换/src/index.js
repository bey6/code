import funcPrint from './print';
import './styles.css';
window.onload = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'HMR';
  document.body.appendChild(h1);

  let divElement = funcPrint();
  document.body.appendChild(divElement);

  if (module.hot) {
    module.hot.accept('./print.js', () => {
      document.body.removeChild(divElement);
      divElement = funcPrint();
      document.body.appendChild(divElement);
    });
  }
};
