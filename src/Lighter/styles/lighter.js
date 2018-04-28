import './lighter_form.scss';

const ON_OFF = 'active';
const LIGHTER = 'lighter';
const LIGHTERS = 'lighters';
const LIGHTER_FORM = 'lighter_form';
const BTN_FORM = 'btn_form';

class Lighter {
    constructor(Element) {
        this.Element = Element;
    }

    render() {
        let lighters = document.createElement('div');
        lighters.className = LIGHTERS;
        document.querySelector('.form_blank').appendChild(lighters);

        let lighter_form = document.createElement('div');
        lighter_form.className = LIGHTER_FORM;
        lighters.appendChild(lighter_form);

        let lighter = document.createElement('div');
        lighter.className = LIGHTER;
        lighter_form.appendChild(lighter);

        let btn_form = document.createElement('button');
        btn_form.className = BTN_FORM;
        btn_form.innerHTML = 'On\Off';
        lighter_form.appendChild(btn_form);


        btn_form.addEventListener('click', () => {
            lighter.classList.toggle(`${ON_OFF}`)
        })
    };

    init() {
        for (let i = 0; i < 3; i++) {
            this.render();
        }
    }


}

const Tourch = new Lighter(document.querySelectorAll(`.${LIGHTER}`));

export {Tourch};