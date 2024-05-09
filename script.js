const inputBox = document.getElementById("input-box")
const listCont = document.getElementById("list-con")

let button = document.querySelector(".btn")

// console.log(inputBox.value);


button.addEventListener("click",function(){
   if(inputBox.value === ''){
    alert("You must be write Something!")
   }
   else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listCont.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    
   }
   inputBox.value = ''
   saveData();
})

listCont.addEventListener("click",function(dets){
    if(dets.target.tagName === "LI"){
        dets.target.classList.toggle("checked")
        saveData();
    }
    else if(dets.target.tagName === "SPAN"){
        dets.target.parentElement.remove()
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listCont.innerHTML)
}

function showData(){
    listCont.innerHTML = localStorage.getItem("data")
}

showData();