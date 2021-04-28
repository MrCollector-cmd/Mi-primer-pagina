const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
const TW = document.querySelector('.sosial-media')

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spreed")
    TW.style.opacity = '0'
})
   

window.addEventListener('click', e=>{
    if(menu.classList.contains('spreed') 
        && e.target != menu && e.target != hamburguer){

        menu.classList.toggle('spreed')

        TW.style.opacity = '1'

    }

})