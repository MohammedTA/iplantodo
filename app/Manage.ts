console.log("App running!");

import * as jf from "./core/index";

var tasks = [
    new jf.Task("John Wick"),
    new jf.Task("django"),
    new jf.Task("Mr Bean"),
    new jf.Task("Captin America")];

function render() {
    var list = "<ul>";
    for (let task of tasks) {
        list += `<li>${task.name}</li>`;
    }
    list += "</ul>";
    var el = document.getElementById("list");
    if(typeof el !== 'undefined' && el !== null) {
        el.innerHTML = list;
    }
}

render();
var submit = document.getElementById('addTask');
    if(typeof submit !== 'undefined' && submit !== null) {
            submit.addEventListener('click', () => {
                var taskName = (<HTMLInputElement>document.getElementById("txtTask")).value;
                tasks.push(new jf.Task(taskName));
                render();
            });
    }

export default jf;