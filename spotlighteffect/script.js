addEventListener('mousemove', (e)=>{
    //css me root variable ko change karna
    document.body.style.setProperty("--x", e.clientX + 'px')
    document.body.style.setProperty("--y", e.clientY + 'px')
})