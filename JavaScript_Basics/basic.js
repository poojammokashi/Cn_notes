// code Structure of JS
console.log("123");

const buttonElement = document.querySelector('button');

const textElement = document.querySelector('#text');

buttonElement.addEventListener('click', ()=>{
    textElement.textContent = 'Button is Pressed';

    setTimeout(()=>{
        textElement.textContent = '';
    },5000)
})

for(var i=1; i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

for(let i=1; i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}