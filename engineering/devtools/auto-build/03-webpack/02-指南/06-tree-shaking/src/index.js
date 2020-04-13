import { cube } from './math';

function component() {
  let element = document.createElement('pre');
  element.innerHTML = ['使用 cube: 函数', `5 cubed 结果是： ${cube(5)}`].join(
    '\n\n'
  );
  return element;
}

document.body.appendChild(component());
