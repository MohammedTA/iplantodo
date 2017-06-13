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

    let task = new jf.TestData<jf.Task>();

    task.mainValue = new jf.Task("planning for new sprint");

    console.log("main task: "+task.mainValue.name);

    task.urgentTasks = function(task1, task2) { 
            return task1.name +", "+ task2.name
          };

      console.log("urgent tasks: "+task.urgentTasks(task.mainValue,new jf.Task("code review and test")));    


export default jf;