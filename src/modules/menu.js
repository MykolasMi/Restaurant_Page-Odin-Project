const buildMenu = () => {
    removePrevious();
    const bodyContainer = document.querySelector('.bodyContainer');

    const menuBody = document.createElement('div');
    menuBody.textContent = 'MENU';
    bodyContainer.appendChild(menuBody);
}

const removePrevious = () => {
    const bodyContainer = document.querySelector('.bodyContainer');
    bodyContainer.textContent = '';
}

export { buildMenu };