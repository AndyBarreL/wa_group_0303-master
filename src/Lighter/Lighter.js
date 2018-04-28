import './styles/lighter_form.scss'
import {Tourch} from './styles/lighter';

let ADD = document.querySelector('.btn_add');
let lighter_lst = document.querySelectorAll('.lighters');
let lighters = document.querySelectorAll('.lighter');
let lighter_on = document.querySelector('.btn_on');

Tourch.init();

ADD.addEventListener('click', () => {
    Tourch.render();
});
