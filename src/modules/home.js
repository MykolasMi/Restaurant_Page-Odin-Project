const buildHome = () => {
    removePrevious();

    const bodyContainer = document.querySelector('.bodyContainer');

    const body = document.createElement('div');
    body.classList.add('body');
    bodyContainer.appendChild(body);

    const mainImg = document.createElement('img');
    mainImg.classList.add('bodyBg');
    mainImg.src = "../src/pexels-gary-barnes.jpg";
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
}

const removePrevious = () => {
    const bodyContainer = document.querySelector('.bodyContainer');
    bodyContainer.textContent = '';
}

export { buildHome }