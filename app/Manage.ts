console.log("App running!");

import * as jf from "./core/index";
import { TaskStatus } from "./core/TaskStatus";

var tasks = [
    new jf.Task("John Wick",TaskStatus["1"]),
    new jf.Task("django",TaskStatus["2"]),
    new jf.Task("Mr Bean",TaskStatus["1"]),
    new jf.Task("Captin America",TaskStatus["3"])];

function render() {
    var list = "<ul>";
    for (let task of tasks) {
        list += `<li>${task.name} status: ${task.status}</li>`;
    }
    list += "</ul>";
    var el = document.getElementById("list");
    if(typeof el !== 'undefined' && el !== null) {
        el.innerHTML = list;
    }
}
function render2() {
            let options = "<select id='select2'>";
                for (var member in TaskStatus) {
                var isValueProperty = parseInt(member, 10) >= 0
                if (isValueProperty) {
                    options += `<option value=${member}>${TaskStatus[member]}</option>`;
                    }
                }
                options += "</select>";
    var el = document.getElementById("select");
    if(typeof el !== 'undefined' && el !== null) {
        el.innerHTML = options;
    }
}

render();
render2();
var submit = document.getElementById('addTask');
    if(typeof submit !== 'undefined' && submit !== null) {
            submit.addEventListener('click', () => {
                var taskName = (<HTMLInputElement>document.getElementById("txtTask")).value;
                var e = (<HTMLSelectElement>document.getElementById("select2"));
                var status = e.options[e.selectedIndex].value;
                tasks.push(new jf.Task(taskName,TaskStatus[status]));
                render();
            });
    }

    let task = new jf.Extention<jf.Task>();

    task.mainValue = new jf.Task("planning for new sprint",TaskStatus.Finished);

    console.log("main value: "+task.mainValue.name);

    task.urgentTasks = function(task1, task2) { 
            return task1.name +", "+ task2.name
          };

      console.log("urgent tasks: "+task.urgentTasks(task.mainValue,
      new jf.Task("code review and test",TaskStatus.Finished)));    


export default jf;