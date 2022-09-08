
const main = document.querySelector('.main-logo');

const openModal = () => {
    const modal = document.querySelector('.modal-container').classList;  
    modal.add('active');
    window.onclick = function(event) {
        const modal = document.querySelector('.modal-container').classList;  
        if (event.target.className.indexOf('modal-container') !== -1) {
            modal.remove('active');
        }
    }
}
