let inputBox= document.getElementById("input-box")
let listCont= document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ""){
        alert("you must write something!")
    }
    else{
        let li= document.createElement("li")
        let taskValue= inputBox.value
        li.innerHTML= taskValue
        let span= document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)

        listCont.appendChild(li)
        inputBox.value= ""
        saveData()
    }
}

listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listCont.innerHTML)
}

function showTask(){
    listCont.innerHTML= localStorage.getItem("data")
}
showTask()