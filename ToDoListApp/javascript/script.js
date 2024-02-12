const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//here i am doing the task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something..!");
    }
    //creating an Li with the inputtext balue and few css in the span
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save all the data's in the localstorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//to show the list when ever it is been loaded

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();