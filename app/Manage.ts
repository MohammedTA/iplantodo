console.log("App running!");

import * as jf from "./core/index";

var persons = [new jf.Person("Nik"),
    new jf.Person("John Wick"),
    new jf.Person("django"),
    new jf.Person("Mr Bean"),
    new jf.Person("Captin America")];

function render() {
    var list = "<ul>";
    for (let person of persons) {
        list += `<li>${person.name}</li>`;
    }
    list += "</ul>";
    document.getElementById("list").innerHTML = list;
}

render();

var submit = document.getElementById('addPerson');
submit.addEventListener('click', () => {
    var personName = (<HTMLInputElement>document.getElementById("txtPerson")).value;
    persons.push(new jf.Person(personName));
    render();
});


export default jf;