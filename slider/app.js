let activeSlideNumber = 1;

let = arrowLeft = document.querySelector('.arrow-left'); //powiazanie class przypisujemy . 
let = arrowRight = document.querySelector('.arrow-right');

let = dot1 = document.querySelector('#dot1'); //powiazanie id przypisujemy # a nie . 
let = dot2 = document.querySelector('#dot2');
let = dot3 = document.querySelector('#dot3');
let = dot4 = document.querySelector('#dot4');

let = slide1 = document.querySelector('#slide1');
let = slide2 = document.querySelector('#slide2');
let = slide3 = document.querySelector('#slide3');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+ slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if(activeSlideNumber === 4){
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);

};

let showPreviousSlide = () => {
    if(activeSlideNumber === 1){
        activeSlideNumber = 4;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

let showSlide1 = () => {
    activeSlideNumber = 1;
    showSlide(1);
};

let showSlide2 = () => {
    activeSlideNumber = 2;
    showSlide(2);
};

let showSlide3 = () => {
    activeSlideNumber = 3;
    showSlide(3);
};

let showSlide4 = () => {
    activeSlideNumber = 4;
    showSlide(4);
};


dot1.addEventListener('click', showSlide1);
dot2.addEventListener('click', showSlide2); //addeventlistener sluzy do nasluchiwania interakcji z elementem jezeli dojdzie do click wlaczy sie funkcja (nie moze byc zapisana w '')
dot3.addEventListener('click', showSlide3);
dot4.addEventListener('click', showSlide4);

arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);




