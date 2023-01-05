const buildAboutUs = () => {
    removePrevious();
    const bodyContainer = document.querySelector('.bodyContainer');

    const aboutBody = document.createElement('div');
    aboutBody.textContent = 'ABOUT US'
    bodyContainer.appendChild(aboutBody);
}

const removePrevious = () => {
    const bodyContainer = document.querySelector('.bodyContainer');
    bodyContainer.textContent = '';
}

export { buildAboutUs };