require('./main.css');

import 'bootstrap/dist/css/bootstrap.css';
const name = 'Scotch.io';

//setTimeout(() => alert(`Hello there from ${name}`), 300);

function person(fn, ln, sp) {
    this.firstName = fn;
    this.lastName = ln;
    this.sport = sp;
};

var persons = [
    new person = ("mort", "karst", "hockey"),
    new person = ("oc", "oc2", "oc"),
    new person = ("pic", "pic2", "pic3")
];


const table = makeTable(persons);
document.getElementById('table').innerHTML = table;

