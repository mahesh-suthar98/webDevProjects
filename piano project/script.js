let m28 = new Audio("./28.mp3")
let m32 = new Audio("./32.mp3")
let m35 = new Audio("./35.mp3")
let m36 = new Audio("./36.mp3")
let m37 = new Audio("./37.mp3")
let m38 = new Audio("./38.mp3")
let m39 = new Audio("./39.mp3")
let m40 = new Audio("./40.mp3")
let m41 = new Audio("./41.mp3")
let m42 = new Audio("./42.mp3")
let m43 = new Audio("./43.mp3")
let m44 = new Audio("./44.mp3")
let m45 = new Audio("./45.mp3")


let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let button4 = document.querySelector('#button4')
let button5 = document.querySelector('#button5')
let button6 = document.querySelector('#button6')
let button7 = document.querySelector('#button7')
let button8 = document.querySelector('#button8')
let button9 = document.querySelector('#button9')
let button10 = document.querySelector('#button10')
let button11 = document.querySelector('#button11')
let button12 = document.querySelector('#button12')
let button13 = document.querySelector('#button13')
let pibody = document.querySelector('#pibody')
let body = document.querySelector("body")


body.addEventListener("keydown" , (event)=>{
    const keypressed = event.key.toUpperCase();
    if (keypressed === "J"){m28.currentTime = 0; m28.play()}
    else if (keypressed === "K"){m32.currentTime = 0; m32.play()}
    else if (keypressed === "L"){m35.currentTime = 0; m35.play()}
    else if (keypressed === "A"){m36.currentTime = 0; m36.play()}
    else if (keypressed === "S"){m37.currentTime = 0; m37.play()}
    else if (keypressed === "D"){m38.currentTime = 0; m38.play()}
    else if (keypressed === "F"){m39.currentTime = 0; m39.play()}
    else if (keypressed === "G"){m40.currentTime = 0; m40.play()}
    else if (keypressed === "H"){m41.currentTime = 0; m41.play()}
    else if (keypressed === "Z"){m42.currentTime = 0; m42.play()}
    else if (keypressed === "X"){m43.currentTime = 0; m43.play()}
    else if (keypressed === "C"){m44.currentTime = 0; m44.play()}
    else if (keypressed === "V"){m45.currentTime = 0; m45.play()}
    
})


button1.addEventListener('click', function(){
    m28.play();
    m28.currentTime = 0;
})

button2.addEventListener('click', function(){
    m32.play();
    m32.currentTime = 0;
})

button3.addEventListener('click', function(){
    m35.play();
    m35.currentTime = 0;
})
button4.addEventListener('click', function(){
    m36.play();
    m36.currentTime = 0;
})
button5.addEventListener('click', function(){
    m37.play();
    m37.currentTime = 0;
})
button6.addEventListener('click', function(){
    m38.play();
    m38.currentTime = 0;
})
button7.addEventListener('click', function(){
    m39.play();
    m39.currentTime = 0;
})
button8.addEventListener('click', function(){
    m40.play();
    m40.currentTime = 0;
})
button9.addEventListener('click', function(){
    m41.play();
    m41.currentTime = 0;
})
button10.addEventListener('click', function(){
    m42.play();
    m42.currentTime = 0;
})
button11.addEventListener('click', function(){
    m43.play();
    m43.currentTime = 0;
})
button12.addEventListener('click', function(){
    m44.play();
    m44.currentTime = 0;
})
button13.addEventListener('click', function(){
    m45.play();
    m45.currentTime = 0;
})