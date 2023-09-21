const input_el = document.getElementById("input-box");
const list_el = document.getElementById("list-container");

const date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

const date_el = document.getElementById("date");
const month = date.getMonth()+1;
date_el.innerHTML = `Today's Date : ${date.getDate()} / ${month} / ${date.getFullYear()} (${days[date.getDay()]})`;

input_el.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        addTask();
    }
})

function addTask(){
    if(input_el.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_el.value;
        list_el.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_el.value = "";
    saveData();
}

list_el.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",list_el.innerHTML);
}

function showTask(){
    list_el.innerHTML = localStorage.getItem("data");
}
showTask();