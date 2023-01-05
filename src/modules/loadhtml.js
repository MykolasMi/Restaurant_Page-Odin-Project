const content = document.querySelector('#content');

const buildPage = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const headerText = document.createElement('div');
    headerText.textContent = 'Spaghetti Factory';
    header.appendChild(headerText);

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');
    header.appendChild(navBar);

    const navHome = document.createElement('div');
    navHome.classList.add('navHome')
    navBar.appendChild(navHome);
    navHome.textContent = 'Home';

    const navMenu = document.createElement('div');
    navMenu.classList.add('navMenu')
    navBar.appendChild(navMenu);
    navMenu.textContent = 'Menu';

    const navAbout = document.createElement('div');
    navAbout.classList.add('navAbout')
    navBar.appendChild(navAbout);
    navAbout.textContent = 'About us';


    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('bodyContainer');
    content.appendChild(bodyContainer);

    
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    const initials = document.createElement('div');
    initials.textContent = 'Spaghetti Factory | Since 2077'
    footer.appendChild(initials);

    const addressBox = document.createElement('div');
    addressBox.classList.add('address');
    footer.appendChild(addressBox);

    const ad1 = document.createElement('div');
    ad1.textContent = '936 Kiehn Route';
    addressBox.appendChild(ad1)
    const ad2 = document.createElement('div');
    ad2.textContent = 'West Ned';
    addressBox.appendChild(ad2)
    const ad3 = document.createElement('div');
    ad3.textContent = 'Tennessee';
    addressBox.appendChild(ad3)
    const ad4 = document.createElement('div');
    ad4.textContent = '11230';
    addressBox.appendChild(ad4)

}

export { buildPage };