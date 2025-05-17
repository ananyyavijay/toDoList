const inputBox= document.getElementById("input-box");
const lists= document.getElementById("list");

function addtask(){
    if(inputBox.value===''){
        alert("please enter a task the add it to your list");
    } else{
        let li = document.createElement("li");  //create <li> tag
        let icon = document.createElement("i"); //crete icon
        icon.className = "fa-regular fa-circle-check";
        icon.style.cursor = "pointer";
        icon.addEventListener("click", function(){
            li.remove();   //remove li when icon is clicked
        });
        let addtask = document.createTextNode(" " + inputBox.value)  //add task

        // add icon and task to <li>
        li.appendChild(icon);
        li.appendChild(addtask);
        list.appendChild(li)     // Add the <li> to the list

        inputBox.value = '';
        saveData();
    }
}
function saveData() {
    localStorage.setItem("data", lists.innerHTML);
}

function showTask() {
    lists.innerHTML = localStorage.getItem("data") || "";

    const icons = lists.querySelectorAll("i.fa-circle-check");
    icons.forEach(icon => {
        icon.style.cursor = "pointer";
        icon.addEventListener("click", function() {
            this.parentElement.remove();
            saveData();
        });
    });
}

showTask();