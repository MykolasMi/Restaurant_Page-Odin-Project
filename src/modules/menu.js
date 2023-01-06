const buildMenu = () => {
    removePrevious();
    const bodyContainer = document.querySelector('.bodyContainer');

    const menuBody = document.createElement('div');
    menuBody.textContent = 'MENU';
    bodyContainer.appendChild(menuBody);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    bodyContainer.appendChild(menuContainer);

    const card1 = document.createElement('div');
    card1.classList.add('card');
    menuContainer.appendChild(card1);

    const card1Pic = document.createElement('img');
    card1Pic.src = '../src/spaghettiPic.jpg';
    card1.appendChild(card1Pic);

    const card1Title = document.createElement('div');
    card1Title.textContent = 'Spaghetti pizdoni'
    card1.appendChild(card1Title);

    const card1Desc = document.createElement('div');
    card1Desc.textContent = 'cia pyzda seni walgai ir krch typrsta burnoj'
    card1.appendChild(card1Desc);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    menuContainer.appendChild(card2);

    const card2Pic = document.createElement('img');
    card2Pic.src = '../src/spaghettiPic.jpg';
    card2.appendChild(card2Pic);

    const card2Title = document.createElement('div');
    card2Title.textContent = 'Spaghetti pizdonii'
    card2.appendChild(card2Title);

    const card2Desc = document.createElement('div');
    card2Desc.textContent = 'cia pyzda seni walgai ir krch typrsta burnoj'
    card2.appendChild(card2Desc);

    //createMenu();
}

const removePrevious = () => {
    const bodyContainer = document.querySelector('.bodyContainer');
    bodyContainer.textContent = '';
}

/*
const createMenu = () => {
    for (let i=0; i<6; i++) {
        const card[i] = document.createElement('div');
        menuContainer.appendChild(card[i]);

        const card[i]Img = document.createElement('img');
        card[i].appendChild(card[i]Img);

        const card[i]Title = document.createElement('div');
        card[i].appendChild(card[i]Title);

        const card[i]Desc = document.createElement('div');
        card[i].appendChild(card[i]Desc);
    }
}*/

export { buildMenu };