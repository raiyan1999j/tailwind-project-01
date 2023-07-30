let alpha = document.getElementById('menu');
let bravo = document.getElementById('menuList');
let charlie= bravo.childNodes[1].childNodes;

alpha.addEventListener('click',()=>{
    console.dir(bravo.childNodes[1].childNodes);
    alpha.classList.toggle('text-white');
    alpha.parentNode.classList.toggle('text-white')
    bravo.classList.toggle('translate-y-[-100%]');
    bravo.classList.toggle('translate-y-[0%]');
})

function listItem(){
    bravo.classList.toggle('translate-y-[0%]');
    bravo.classList.toggle('translate-y-[-100%]');
    alpha.classList.remove('text-white');
    alpha.parentNode.classList.remove('text-white');
}