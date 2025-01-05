import _ from 'lodash';
import img from '#images/image.png';
import dataJSON from '../public/data.json';
import { printMe } from './print.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const myIcon = new Image();
  myIcon.src = img;
  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
console.log(dataJSON);
