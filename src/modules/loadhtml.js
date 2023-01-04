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
    navBar.appendChild(navHome);
    navHome.textContent = 'Home';

    const navMenu = document.createElement('div');
    navBar.appendChild(navMenu);
    navMenu.textContent = 'Menu';

    const navAbout = document.createElement('div');
    navBar.appendChild(navAbout);
    navAbout.textContent = 'About us';


    const body = document.createElement('div');
    body.classList.add('body')
    content.appendChild(body);

    const mainImg = document.createElement('img');
    mainImg.classList.add('bodyBg');
    mainImg.src = "../src/pexels-gary-barnes.jpg"
    body.appendChild(mainImg);

    const invText = document.createElement('div');
    invText.classList.add('invitationText');
    body.appendChild(invText);

    const headText = document.createElement('div');
    headText.textContent = 'Taste is our passion';
    invText.appendChild(headText);

    const headUndrText = document.createElement('div');
    headUndrText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit pellentesque. A lacus vestibulum sed arcu non odio euismod. Nisl condimentum id venenatis a. Tempor nec feugiat nisl pretium fusce id velit ut. Imperdiet proin fermentum leo vel orci porta non pulvinar. Vitae semper quis lectus nulla at volutpat diam. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Massa enim nec dui nunc mattis enim. Dolor morbi non arcu risus. Lectus sit amet est placerat in egestas erat imperdiet. Proin libero nunc consequat interdum varius sit. Purus in mollis nunc sed id semper risus in. Quis viverra nibh cras pulvinar mattis nunc sed. Placerat vestibulum lectus mauris ultrices eros in. Consectetur purus ut faucibus pulvinar elementum integer enim.';
    invText.appendChild(headUndrText);

    const credits = document.createElement('div');
    credits.textContent = 'Photo by Gary Barnes';
    body.appendChild(credits);


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
//SUTVARKYTI CSS
export { buildPage };