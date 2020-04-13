import avatar from './assets/1.jpg';

const funcAddImage = function addImage() {
  const img = document.createElement('img');
  img.setAttribute('src', avatar);
  document.body.appendChild(img);
};

export default funcAddImage;
