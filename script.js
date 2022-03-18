const generateBtn = document.getElementById('generate-button');
const password1 = document.querySelector('.pass-1');
const password2 = document.querySelector('.pass-2');
const password3 = document.querySelector('.pass-3');
const password4 = document.querySelector('.pass-4');
const passwords = document.querySelectorAll('.password');
generateBtn.addEventListener('click',()=>{
    passwords.innerHTML=`<p></p>`;
    password2.innerText=getRandomPass();
    password3.innerText=getRandomPass();
    password4.innerText=getRandomPass();
    password1.innerText = getRandomPass();
})
function getRandomPass(){
    let randomPass = '';
    for(let i = 0;i<15;i++){
        randomPass += String.fromCharCode(randomNum());
    }
    return randomPass;
}
function randomNum() { 
    let random = Math.floor(Math.random() * (122 - 60 + 1) + 57);
    if(random == 96){
        random = 40;
    }
    if(random == 92){
        random = 41;
    }
    return random
  }