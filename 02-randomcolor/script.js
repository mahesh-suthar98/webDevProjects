var btn = document.querySelector('button');
var box = document.querySelector('#box');

btn.addEventListener("click", function(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
