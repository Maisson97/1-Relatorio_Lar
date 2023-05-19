const menu = document.querySelector('.menuSuspenso')
const menuS = document.querySelector('.menuSuspenso2')
const menu1 = document.querySelector('#menu1')
const menu2 = document.querySelector('#menu2')
const x = document.querySelector('#x')
const x2 = document.querySelector('#x2')

function sair(){
    window.location.href = '/index.html'
}

menu1.addEventListener('mouseover',() =>{
    menu.style.display='block';
    menuS.style.display='none'
})
menu2.addEventListener('mouseover',() =>{
    menu.style.display='none';
    menuS.style.display='block'
})

x.addEventListener('click',() => {
    menu.style.display = 'none'
})
x2.addEventListener('click',() => {
    menuS.style.display = 'none'
})



const vapor = document.querySelector('#vapor')
const torridas = document.querySelector('#torridas')
const cavaco = document.querySelector('#cavaco')
const contador = document.querySelector('#contador1')
const cargas = document.querySelector('#cargas')

vapor.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=vapor'
})

torridas.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=torridas'
})

cavaco.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cavaco'
})

contador.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=contador'
})

cargas.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cargas'
})



const vapor2 = document.querySelector('#vapor2')
const cavaco2 = document.querySelector('#cavaco2')
const tunel = document.querySelector('#tunel')

vapor2.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=vapor2'
})

cavaco2.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cavaco2'
})

tunel.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=tunel'
})