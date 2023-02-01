function menuBar() {
    const menuBox = document.querySelector('.fa-solid');

    menuBox.addEventListener('click', (e) => {
        const menu = e.target.parentNode.parentNode.querySelector('.menu__container');
        
        menu.classList.toggle('active')
    })
}


export default {
    menuBar,
}