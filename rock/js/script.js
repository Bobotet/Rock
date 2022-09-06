"use strict"

const concertDate = new Date(2023, 7, 30, 2, 0);
const video_bg = document.querySelector('.video');
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerExit = document.querySelector('.burger-exit');
const burgerLink = document.querySelectorAll('.burger-list-link');

burgerLink.forEach(link => {
    link.addEventListener('click', () => {
        console.log(1)
        burgerMenu.style['display'] = 'none';
        document.querySelector('.header__container').style['display'] = 'block';
        document.querySelector('main').style['display'] = 'block';
        document.querySelector('footer').style['display'] = 'block';
    })
})
burger.addEventListener('click', () => {
    burgerMenu.style['display'] = 'block';
    document.querySelector('.header__container').style['display'] = 'none';
    document.querySelector('main').style['display'] = 'none';
    document.querySelector('footer').style['display'] = 'none';
})
burgerExit.addEventListener('click', () => {
    burgerMenu.style['display'] = 'none';
    document.querySelector('.header__container').style['display'] = 'block';
    document.querySelector('main').style['display'] = 'block';
    document.querySelector('footer').style['display'] = 'block';
})

video_bg.addEventListener('click', () => {console.log(1)})

function concertTime(){
    let days = 0;
    let hours = 0;
    let mins = 0;
    let secs = 0;
    let now = new Date();
    let duration = concertDate - now;
    while(duration >= 86400000){
        days++;
        duration -= 86400000;
    }
    while(duration >= 3600000){
        hours++;
        duration -= 3600000;
    }
    while(duration >= 60000){
        mins++;
        duration -= 60000;
    }
    secs = Math.ceil(duration/1000)


    document.querySelector('.timer__days-value').innerHTML = days + ':';
    document.querySelector('.timer__hours-value').innerHTML = hours + ':';
    document.querySelector('.timer__mins-value').innerHTML = mins + ':';
    document.querySelector('.timer__sec-value').innerHTML = secs;

    setTimeout(concertTime, 1000);
}
concertTime()


const video = document.querySelector('.video__item');
