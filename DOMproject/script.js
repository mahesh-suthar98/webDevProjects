function openCards() {
    var allElems = document.querySelectorAll('.elem')
    var fullElemPage = document.querySelectorAll('.fullElem')
    var fullElemPageBackBtn =  document.querySelectorAll('.fullElem .back')


    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPage[elem.id].style.display = 'block'        
        })

    })

    fullElemPageBackBtn.forEach(function(elem,idx) {

        elem.addEventListener('click',function () {
            fullElemPage[elem.id].style.display = 'none'

        })

        //shortCut key=backspace
        document.body.addEventListener('keydown',function(key){
            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
             return; 
            }

            if(key.code=="Backspace"){
                fullElemPage[elem.id].style.display = 'none'
            }

        })
    })
}

openCards()

let form = document.querySelector('.addTask form')
let taskName = document.querySelector('.addTask form input')
let taskDetails = document.querySelector('.addTask form textarea')
let checkBox = document.querySelector('.addTask form #checkBox')
let addTaskBtn = document.querySelector('form button')

function toDoList() {

var taskList = [];

if(localStorage.getItem('taskList')){
  taskList = JSON.parse(localStorage.getItem('taskList'))
}
else{
  console.log('Tasklist is empty');
  }


function renderTask() {
    let allTask = document.querySelector('.toDoContainer .allTask')

    let sum = ""

    taskList.forEach(function (elem,idx) {
      sum +=   `<div class="taskAndDtlsCont" id="${idx}">
                  <div class="task">
                    <h5>${elem.task}<span class="${elem.imp}">Imp</span></h5>
                    <button id="${idx}">Mark as completed</button>
                  </div>
                  <div class="details">
                    <p>${elem.details}<p/>
                  </div>
                </div>`
})


  allTask.innerHTML=sum
  localStorage.setItem('taskList',JSON.stringify(taskList))

  document.querySelectorAll('.allTask .taskAndDtlsCont .task button').forEach(function (btn,idx) {
  btn.addEventListener('click',function(){
  taskList.splice(btn.id, 1)
  renderTask()
})
})
}
renderTask()


form.addEventListener('submit',function(e){
  e.preventDefault()
  if(taskName.value.trim()==''||taskDetails.value.trim()==''){
    e.preventDefault()
    alert("Sabhi fields bharo, Khali task Add nahi kar sakte!")
  }
  
  else{ taskList.unshift({
    task:taskName.value,
          details:taskDetails.value,
          imp:checkBox.checked
        })    

    renderTask()
    taskName.value=''
    taskDetails.value=''
    checkBox.checked=false
    
    //modern method for getting form data in JS:
    // let frmData= new FormData(e.target)
    // const data = Object.fromEntries(frmData.entries());
    // console.log(data);
  }
})

let h5 = document.querySelectorAll('.allTask .taskAndDtlsCont .task h5')
let details = document.querySelectorAll('.allTask .taskAndDtlsCont .details')
h5.forEach(function (elem,idx) {
  let dFlag = 0;
  elem.addEventListener('click',function(){
    
  let isAlreadyOpen = window.getComputedStyle(details[idx]).display === "block";

    // Pehle saare details ko hide kardo
    details.forEach(d => d.style.display = "none");
    // Agar wo pehle se open nahi tha, toh ab open kardo
    if (!isAlreadyOpen) {
      details[idx].style.display = "block";
    }
 
  // if(dFlag==0){
  // details[idx].style.display="block"
  // dFlag=1
  // }
  // else{
  //   details[idx].style.display="none"
  //   dFlag=0
  // }
  
  })
  
})
}
toDoList()