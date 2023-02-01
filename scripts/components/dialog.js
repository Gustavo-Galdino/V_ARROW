import createList from './createList.js'

function dialog(tableName, info, placeholder, liDiv) {
    const dialog = document.createElement('dialog');
    dialog.classList.add(`${tableName}__listDialog`);

    const divDialogName = document.createElement('div');
    divDialogName.classList.add(`${tableName}__list-nameDialog`);
    divDialogName.innerHTML = `<input class="name" type="text" placeholder="${placeholder}">`;

    const divInfos = document.createElement('div');
    divInfos.classList.add(`${tableName}__list-infosDialog`);

    info.map(i => {
        const p = document.createElement('p');
        p.innerHTML = `${i}<input class="infos" type="number" placeholder="0">`;
        divInfos.appendChild(p);

        return divInfos;
    });

    const btnOK = document.createElement('button');
    btnOK.classList.add('btn__dialog');
    btnOK.innerText = 'OK';
    
    eventConfirm(btnOK, liDiv, tableName, placeholder);

    dialog.appendChild(divDialogName);
    dialog.appendChild(divInfos);
    dialog.appendChild(btnOK);

    return dialog;
}

function eventConfirm(btn, liDiv, tableName, placeholder) {
    btn.addEventListener('click', (e) => {
        const dialog = e.target.parentNode;
        const title = dialog.querySelector('.name');
        const values = dialog.querySelectorAll('.infos');

        liDiv.appendChild(createList.createList(tableName, values, title.value));

        dialog.close();
        
        title.parentNode.innerHTML = `<input class="name" type="text" placeholder="${placeholder}">`;

        values.forEach(element => {  
            element.value = '0';
        });

    })
}

export default {
    dialog,
    eventConfirm
}