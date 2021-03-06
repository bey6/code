import _ from 'lodash';

import printMe from './print';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  let btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
