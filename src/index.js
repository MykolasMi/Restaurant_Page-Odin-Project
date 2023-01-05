import { buildPage } from './modules/loadhtml';
import { buildHome } from './modules/home';
import { buildMenu } from './modules/menu';
import { buildAboutUs } from './modules/about';

/*initialRun();

function initialRun () {*/
    let activeAbout = false;
    let activeMenu = false;
    let activeHome = false; 
    buildPage();

const navHome = document.querySelector('.navHome')
navHome.addEventListener('click', function(e) {
    e.preventDefault();
    if (activeHome == true) {
        console.log('already active');
        return
    } else {
    buildHome();
    activeAbout = false;
    activeMenu = false;
    }
    console.log('navHome');
})

const navMenu = document.querySelector('.navMenu')
navMenu.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(activeMenu);
    if (activeMenu == true) {
        console.log('already active');
        return
    } else {
    buildMenu();
    activeAbout = false;
    activeHome = false;
    }
    console.log('navMenu');
})

const navAbout = document.querySelector('.navAbout')
navAbout.addEventListener('click', function(e) {
    e.preventDefault();
    if (activeAbout == true) {
        console.log('already active');
        return
    } else {
    buildAboutUs();
    activeHome = false;
    activeMenu = false;
    }
    console.log('navAbout')
})

/*function checkActive (navOption) {
    activeAbout = false;
    activeMenu = false;
    activeHome = false;

    navOption = true;
    console.log(navOption);
    console.log('check');
}*/
// Kazkodel visus leidzia buti true, nekinta paspaudus. reik ziureti true false statementus