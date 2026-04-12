// let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// let p = document.querySelector('p')
// let text = p.innerHTML

// // para.addEventListener('mouseenter', randomText)

// let iteration = 0;

// function randomText() {
//     const str = text.split('').map((char, index)=>{
//         if (index < iteration){
//             return char
//         }
//         return character.split('')[Math.floor(Math.random()*53)]
//     }).join('')
    
//     text.innerText = str

//     iteration += 0.2
// }

// setInterval(randomText, 30)





// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let p = document.querySelector("p");
// let originalText = p.innerText;

// let iteration = 0;

// p.addEventListener("mouseenter", () => {
//   iteration = 0;
// });

// function randomText() {
//   const str = originalText
//     .split("")
//     .map((char, index) => {
//       if (index < iteration) {
//         return char;
//       }
//       return characters[Math.floor(Math.random() * characters.length)];
//     })
//     .join("");

//   p.innerText = str;

//   iteration += 0.3;

//   if (iteration > originalText.length) {
//     iteration = 0;
//   }
// }

// setInterval(randomText, 30);




let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let p = document.querySelector("p");
let originalText = p.innerText;

let iteration = 0;
let intervalId = null;   // 👈 important flag

p.addEventListener("mouseenter", () => {

  // agar pehle se chal raha hai to dobara mat chalao
  if (intervalId !== null) return;

  iteration = 0;

  intervalId = setInterval(() => {

    const str = originalText
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    p.innerText = str;

    iteration += 0.3;

    // ✅ animation complete → stop
    if (iteration >= originalText.length) {
      clearInterval(intervalId);
      intervalId = null;
      p.innerText = originalText;
    }

  }, 30);

});
