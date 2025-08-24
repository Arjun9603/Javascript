
//!st method-long code


// const buttons=document.querySelectorAll('.button')
// // console.log(buttons);
// const body=document.querySelector('body')

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//          if (e.target.id === 'Gradient') {
//             // Use the gradient for white
//             body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
//          }
//         else if(e.target.id==='blue'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='yellow'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='green'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='red'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='magenta'){
//             body.style.backgroundColor=e.target.id
//         }else{
//             body.style.backgroundColor='white'
//         }
        
        
//     })
    
// })



//Other method- short code

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'Gradient') {
            // Use the gradient for white
            body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
        } 
        else if(e.target.id==='G2'){
            body.style.background="linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)";
        }
        else {
            // For other buttons, use their id as color
            body.style.backgroundColor = e.target.id;
        }
    });
});
