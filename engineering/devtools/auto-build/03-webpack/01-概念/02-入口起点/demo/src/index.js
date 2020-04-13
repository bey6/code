import _ from 'lodash';
import { dirname } from 'path';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.json(['Hello', 'webpack'], ' ');

  return element;
}
console.log(dirname);
document.body.appendChild(component());
