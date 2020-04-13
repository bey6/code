export default function() {
  const div = document.createElement('span');
  div.id = Symbol('div#id').toString();
  div.textContent = `hi, Liming:
  bwm build your dream.`;
  return div;
}
