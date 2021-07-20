function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var dt = window.document.querySelector('div#dt')
var cp = window.document.querySelector('header#cump')
var data = new Date()
var hora = data.getHours()
var nomeDia = ["domingo","segunda","terça","quarta","quinta","sexta","sabado"]
var nomeMes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]


msg.innerHTML =  "Agora são "  + data.getHours() + ":" + data.getMinutes()
dt.innerHTML = "Hoje é " + nomeDia[data.getDay()] + ", " + data.getDate() + " de " + nomeMes[data.getMonth()] + " de " + data.getFullYear() 


if(hora >= 0 && hora <12){
    img.src = 'img/manha.jpg'
    
    document.body.style.background = '#ACBBB8'
}else if(hora >=12 && hora <18 ){
    img.src = 'img/tarde.jpg'
    cp.innerHTML = "<h1>Boa Tarde</h1>"
    document.body.style.background = '#9F6645'
}else{
    img.src = 'img/noite.jpg'
    cp.innerHTML = "<h1>Boa noite</h1>"
    document.body.style.background = '#6E5078'
}}

