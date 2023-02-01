function createList(tableName, info, title) {
    const li = document.createElement('li');
    li.classList.add(`${tableName}__list`);

    const divLiName = document.createElement('div');
    divLiName.classList.add(`${tableName}__list-name`);
    divLiName.innerHTML = `<p class="name">${title}</p>`;

    const divInfos = document.createElement('div');
    divInfos.classList.add(`${tableName}__list-infos`);

    info.forEach(i => {
        const p = document.createElement('p');
        const divValue = document.createElement('div');
        divValue.innerHTML = `<p class="${i.previousSibling.nodeValue}">${i.value}</p>`
        p.innerText = `${i.previousSibling.nodeValue}`;
        divInfos.appendChild(p);
        divInfos.appendChild(divValue);

        return divInfos;
    });

    li.appendChild(divLiName);
    li.appendChild(divInfos);
    li.appendChild(btnDelete('deleteBtn'));

    return li;
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
    createList,
}