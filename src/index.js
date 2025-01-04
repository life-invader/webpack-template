import _ from 'lodash';
import img from './image.png';
import dataJSON from './data.json';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const myIcon = new Image();
  myIcon.src = img;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
console.log(dataJSON);
