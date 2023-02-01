function save(table, pageName) {
    const html = table.innerHTML;
    localStorage.setItem(`${pageName}_tablesHTML`, html)
}

function load(table, pageName) {
    const tablesHTML = localStorage.getItem(`${pageName}_tablesHTML`);
    table.innerHTML = tablesHTML;
}

function saveWeight(target) {
    const html = target.value;
    localStorage.setItem('weight', html);
}

function loadWeigh(target) {
    const weight = localStorage.getItem('weight');
    target.value = weight;
}

export default {
    save,
    load,
    saveWeight,
    loadWeigh
}