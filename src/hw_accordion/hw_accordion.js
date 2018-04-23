import './hw_accordion.scss';

function accordion(accordion) {
    const title = accordion.querySelector('.banner');
    const header = accordion.querySelector('.header');
    const content = accordion.querySelector('.content');
    const btn_close = accordion.querySelector('.close');
    const nav_open = accordion.querySelector('.nav-icon1');
    let isOpened = accordion.classList.contains('selected');
    function opened() {
        title.classList.add('selected');
    }

    function closed() {
        title.classList.remove('selected');
    }

    function toggle() {
        if (isOpened) {
            closed();
        } else {
            opened();
        }
    }

    header.addEventListener('click', () => {
        isOpened = false;
        toggle();
        nav_open.classList.add('open');

        if (title.hasClass('selected').length){
            closed()
        }
    });
    btn_close.addEventListener('click', () => {
        isOpened = true;
        toggle();
        nav_open.classList.remove('open');
    });


}


accordion(document.querySelector('#acord_id'));
accordion(document.querySelector('#acord_id1'));
accordion(document.querySelector('#acord_id2'));
accordion(document.querySelector('#acord_id3'));
accordion(document.querySelector('#acord_id4'));

