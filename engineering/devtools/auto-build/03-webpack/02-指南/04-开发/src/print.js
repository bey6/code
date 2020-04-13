export default function printMe() {
  const div = document.createElement('div');
  div.textContent = `HELLO WORLD, PORT:3000`;
  document.body.appendChild(div);
  const style = document.createElement('style');
  style.textContent = `
  div {
    color: #fff;
    line-height: 220px;
    width: 100%;
    background-color: #369;
    border-radius: 3px;
    font-size: 44px;
    font-weight: 700;
  }
  `;
  document.body.appendChild(style);
  console.error('print error.');
}
