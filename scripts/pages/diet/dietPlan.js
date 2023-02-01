import diet from '../../events.js';
import localStorage from '../../localStorage.js';
import menu from '../../menu.js';
import macro from './macros.js';


const tables = document.querySelector(`.tables`);
let weight = document.querySelector('#weight');

weight.value = 0

const tableName = 'diet'
const macros = ['C:', 'P:', 'G:'];
const placeholder = "Alimento?";
const alert = 'Digite nome da refeição!'

localStorage.load(tables, tableName)
localStorage.loadWeigh(weight);

diet.events(tableName, macros, placeholder, alert)
diet.captureClicks(tableName);
diet.captureDialog(tableName);
diet.weightInfo();
macro.allMacros();
menu.menuBar();