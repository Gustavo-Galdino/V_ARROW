function rename(target, tableName) {
    //Event keyup
    target.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            if (e.target.className === `${tableName}__title`){
                e.target.value !== '' ? e.target.parentNode.innerHTML = `<p class="${tableName}__title">${e.target.value}</p>`: e.target.parentNode.innerHTML = `<p class="${tableName}__title">${e.target.placeholder}</p>`;
            }
        }
    })

    // Event Blur
    target.addEventListener('blur', (e) => {
        if (e.target.tagName === 'INPUT') {
            if (e.target.className === `${tableName}__title`){
                e.target.value !== '' ? e.target.parentNode.innerHTML = `<p class="${tableName}__title">${e.target.value}</p>` : e.target.parentNode.innerHTML = `<p class="${tableName}__title">${e.target.placeholder}</p>`;
            }
        }
    }, true)

    //Event Click
    target.addEventListener('click', (e) => {
        if (e.target.className === `${tableName}__title` && e.target.tagName === 'P') {
            e.target.parentNode.innerHTML = `<input class="${tableName}__title" type="text" placeholder="${e.target.innerText}">`
        }
    })
}

export default {
    rename,
}