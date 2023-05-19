const button = document.querySelector('button')
const popup =  document.querySelector('.Wpop-up')
const closePopup = document.querySelector('.pop-up-close')



const Cadastro = [{Nome:"maisson",Senha:"123456"},{Nome:"marcelo",Senha:"123456"},{Nome:"valdecir",Senha:"123456"},{Nome:"eder",Senha:"123456"},{Nome:"alessandro",Senha:"123456"}]


button.addEventListener('click' ,() => {
    popup.style.display = 'flex'
}
)

closePopup.addEventListener('click',() => {
    popup.style.display = 'none'
})



function entrar(){
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
// const Cadastro = [{Nome:"maisson",Senha:"123456"},{Nome:"marcelo",Senha:"123456"},{Nome:"valdecir",Senha:"123456"},{Nome:"eder",Senha:"123456"},{Nome:"alessandro",Senha:"123456"}]

let userValid = {
    usuario :'',
    senha : ''
}
Cadastro.forEach((item)=>{
    if(usuario.value == item.Nome && senha.value == item.Senha){
        userValid = {
            usuario : item.Nome,
            senha : item.Senha
        }
    }
})
if(usuario.value == "" || senha.value == ""){
    alert('Por favor preencha todos os campos');
}
else if(usuario.value == userValid.usuario && senha.value == userValid.senha){
    window.location.href= '/PAGINAS_SECUNDARIAS/formulario.html'
}
else{
    alert('Usuario ou senha incorreta')
}

}