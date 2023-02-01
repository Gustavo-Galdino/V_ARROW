import events from "../../events.js";
import localStorage from "../../localStorage.js";
import menu from "../../menu.js";

const tables = document.querySelector(`.tables`);

const tableName = 'training';
const info = ['Series:', '/'];
const placeholder = 'Exercicio?';
const alert = 'Digite nome do treino!';

localStorage.load(tables, tableName);

events.events(tableName, info, placeholder, alert);
events.captureClicks(tableName);
events.captureDialog(tableName);
menu.menuBar();
