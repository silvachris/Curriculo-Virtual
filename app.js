//funções são blocos de código nomeados que podem ser reutilizados
//exemplo: function abracadabra() { print("shazan") }
//ao chamar a função abracadabra() ela executará o bloco de código print("shazan")
// function soma(a, b) { return a + b } //função que recebe dois parâmetros e retorna a soma deles
// função switch light mode
function toggleMode(){
    const html  = document.documentElement
    //if(html.classList.contains('light')){
      //  html.classList.remove('light')
    //}else{
      //  html.classList.add('light')
    //}
//ou podemos usar resumidamente a função toggle
    html.classList.toggle('light')
    const img = document.querySelector('img')
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
}else {
    img.setAttribute('src', './assets/avatar.png') }   
}