function allMacros() {
    const allMacrosList = document.querySelector('.macro__total');
    const carbo = document.getElementsByClassName('C:');
    const protein = document.getElementsByClassName('P:');
    const fat = document.getElementsByClassName('G:');

    let carboTotal = 0;
    let proteinTotal = 0;
    let fatTotal = 0;


    for (let i = 0; i < carbo.length; i++) {
        carboTotal += parseInt(carbo[i].textContent)
    }

    for (let i = 0; i < protein.length; i++) {
        proteinTotal += parseInt(protein[i].textContent)
    }

    for (let i = 0; i < fat.length; i++) {
        fatTotal += parseInt(fat[i].textContent)
    }

    const allMacros = [
        `Total`,
        `C: ${carboTotal}`,
        `P: ${proteinTotal}`,
        `G: ${fatTotal}`
    ];

    allMacrosList.innerHTML = '';
    allMacros.forEach((e) => {
        const p = document.createElement('p');
        p.classList.add('macro__item');
        p.innerText = e;

        allMacrosList.appendChild(p);
    });

    macrosKg(carboTotal, proteinTotal, fatTotal);
    goal(carboTotal, proteinTotal, fatTotal);
}

function macrosKg(cTotal, pTotal, fTotal) {
    const macrosList = document.querySelector('.macros__container-items');

    let weight = document.querySelector('#weight');

    let valueWeight = 0;

    valueWeight = parseInt(weight.value)

    let carbo = (cTotal / valueWeight).toFixed(1);
    let protein = (pTotal / valueWeight).toFixed(1);
    let fat = (fTotal / valueWeight).toFixed(1);

    const macros = [
        `Quantidade em quilos`,
        `Carboidratos(g/kg): ${carbo}`,
        `Proteina(g/kg): ${protein}`,
        `Gordura(g/kg): ${fat}`
    ];

    macrosList.innerHTML = '';
    macros.forEach((e) => {
        const p = document.createElement('p');
        p.classList.add('macro__item');
        p.innerText = e;

        macrosList.appendChild(p);
    });
}

function goal(c, p, f) {
    const goalKg = document.querySelector('.subtitle');

    let total = (c * 4) + (p * 4) + (f * 9);

    goalKg.innerText = `Meta Diaria: ${total} kcal`;
}

export default {
    allMacros,
}