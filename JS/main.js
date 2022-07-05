function clicou(){
    document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar</b>"

    //console.log(document.getElementById("agradecer"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://venge.io/#E1AB57");
    // window.location.href = "https://venge.io/#E1AB57";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto")
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma (n1, n2){
    return n1 + n2;
}
*/

/*
function validaidade(idade){ 
    if(idade >= 18){
        var validar = true;
    }else
    {
        var validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaidade(idade))

*/

//alert(soma(5, 10));


// Meus primeiros comandos em js

/*
var nome = "John Lucas";
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos" );
// alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase());
console.log(frase.toLocaleLowerCase());
// alert(frase.replace("Japão", "Brasil"));
var n1 = 5;
var n2 = 3;
console.log(n1 * n2);
// console.log(n1 * naoexiste);
*/

//var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[1]);


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var idade = prompt("Qual sua idade? ")
if (idade >= 18){
    alert("maior de idade")
}
else{
    alert("menor de idade")
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());

var lista = ["Alemanha", "Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");
console.log(lista);
*/