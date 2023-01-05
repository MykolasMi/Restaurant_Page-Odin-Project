import { buildPage } from './modules/loadhtml';
import { buildHome } from './modules/home';
import { buildMenu } from './modules/menu';
import { buildAboutUs } from './modules/about';

let activeAbout = false;
let activeMenu = false;
let activeHome = true; 
buildPage();
buildHome();

const navHome = document.querySelector('.navHome')
navHome.addEventListener('click', function(e) {
    e.preventDefault();
    if (activeHome == true) {
        return
    } else {
    buildHome();
    activeAbout = false;
    activeMenu = false;
    }
})

const navMenu = document.querySelector('.navMenu')
navMenu.addEventListener('click', function(e) {
    e.preventDefault();
    if (activeMenu == true) {
        return
    } else {
    buildMenu();
    activeAbout = false;
    activeHome = false;
    }
})

const navAbout = document.querySelector('.navAbout')
navAbout.addEventListener('click', function(e) {
    e.preventDefault();
    if (activeAbout == true) {
        return
    } else {
    buildAboutUs();
    activeHome = false;
    activeMenu = false;
    }
})