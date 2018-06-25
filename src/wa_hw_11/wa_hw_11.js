import './wa_hw_11.scss';
import './js/_base.js';
import { accordion } from './js/accordion';

const accordions  = document.querySelectorAll(".accordion");

for(let i = 0; i < accordions.length; i++){
    accordion(accordions[i]);
}


