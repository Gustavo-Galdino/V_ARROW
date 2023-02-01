import create from './components/createContainer.js';
import dialog from './components/dialog.js';
import macros from './pages/diet/macros.js';
import localStorage from './localStorage.js';
import rename from './components/rename.js'

function events(tableName, infos, placeholder, msg) {
    const input = document.querySelector(`.input`);
    const btn = document.querySelector(`.btn`);
    const tables = document.querySelector(`.tables`);

    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            e.target.value !== '' ? tables.appendChild(create.createContainer(tableName, e.target.value, infos, placeholder)) : alert(msg);

            e.target.value = '';
            localStorage.save(tables, tableName);
            
        }
    })

    btn.addEventListener('click', (e) => {
        e.target.previousElementSibling.value !== '' ? tables.appendChild(create.createContainer(tableName, e.target.previousElementSibling.value, infos, placeholder)) : alert(msg);

        e.target.previousElementSibling.value = '';
        localStorage.save(tables, tableName);
    })

    rename.rename(tables, tableName);

    tables.addEventListener('click', (e) => {
        if (e.target.className === "btn__dialog" || e.target.className === "deleteBtn" || e.target.className === "deleteBtn__Ul") {
            if(e.target.parentNode.className === 'diet__listDialog' || e.target.parentNode.className === 'diet__list' || e.target.parentNode.className === 'diet__container') {
                macros.allMacros();
            }
            localStorage.save(tables, tableName);
        }
    })
}

function weightInfo() {
    const weight = document.querySelector('#weight');

    weight.addEventListener('blur', (e) => {
        macros.allMacros();
        localStorage.saveWeight(weight);
    });
}

function captureClicks(tableName) {
    const btnDeleteUl = document.querySelectorAll('.deleteBtn__Ul');

    btnDeleteUl.forEach(btnDelete => {
        btnDelete.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });
    });

    const btnDeleteLi = document.querySelectorAll('.deleteBtn');

    btnDeleteLi.forEach(btnDelete => {
        btnDelete.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });
    });

    const btnAdd = document.querySelectorAll('.addBtn');

    btnAdd.forEach(add => {
        add.addEventListener('click', (e) => {
            const dialog = e.target.previousElementSibling.querySelector(`.${tableName}__listDialog`);

            dialog.showModal();
        });
    });

}

function captureDialog(tableName) {
    const btnDialog = document.querySelectorAll('.btn__dialog')

    if (btnDialog !== null) {
        btnDialog.forEach((e) => {
            const divLi = e.parentNode.parentNode;

            dialog.eventConfirm(e, divLi, tableName, 'Alimento?')
        })
    }
}
export default {
    events,
    captureClicks,
    captureDialog,
    weightInfo
}