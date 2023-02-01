import dialog from './dialog.js';

function createContainer(tableName, value, infos, placeholder) {
    const article = document.createElement('article');
    article.classList.add(`${tableName}__container`);

    const ul = document.createElement('ul');
    ul.classList.add(`${tableName}__ul`);

    const divUlName = document.createElement('div');
    divUlName.classList.add('div__ul-name')
    divUlName.innerHTML = `<p class="${tableName}__title">${value}</p>`;


    const divLi = document.createElement('div');
    divLi.classList.add(`${tableName}__container-list`);
    
    const addBtnLi = document.createElement('button');
    addBtnLi.classList.add('addBtn');
    addBtnLi.innerText = '+';

    divLi.appendChild(dialog.dialog(tableName, infos, placeholder, divLi));

    addBtnLi.addEventListener('click', (e) => {
        const dialog = e.target.previousElementSibling.querySelector(`.${tableName}__listDialog`);

        dialog.showModal();
    })

    const divBtn = document.createElement('div');

    divBtn.appendChild(addBtnLi);
    divBtn.appendChild(btnDelete('deleteBtn__Ul'))
    ul.appendChild(divUlName);
    ul.appendChild(divLi);
    article.appendChild(ul);
    article.appendChild(addBtnLi);
    article.appendChild(btnDelete('deleteBtn__Ul'));
    
    return article;
}

function btnDelete(className) {
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'X';
    btnDelete.classList.add(className);

    btnDelete.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })

    return btnDelete
}

export default {
    createContainer,
}