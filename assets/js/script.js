
/*Espera que el documento este completamente cargado */
document.addEventListener('DOMContentLoaded', () => {
    //Ejercicio 1
    let image = document.getElementById('interactive-image');

    image.addEventListener('click', () => {
        if (image.classList.contains('border-red')) {
            image.classList.remove('border-red');
        } else {
            image.classList.add('border-red');
        }
    });
});

//Ejercicio 2
let calculateButton = document.getElementById('calculate-btn');
if(calculateButton){
    calculateButton.addEventListener('click', () => {
        let sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
        let sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
        let sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

        let totalStickers = sticker1 + sticker2 + sticker3;
        let resultParagraph = document.getElementById('result');

        if(totalStickers <= 10) {
            resultParagraph.textContent = 'Llevas ' + totalStickers + " stickers.";
        }else{
            resultParagraph.textContent = 'Llevas demasiados stickers.';
        }
    });
}

//Ejercicio 3
let verificateButton = document.getElementById('submit-btn');
if(verificateButton){
    verificateButton.addEventListener('click', () => {
        let digit1 = document.getElementById('digit1').value;
        let digit2 = document.getElementById('digit2').value;
        let digit3 = document.getElementById('digit3').value;
        let password = digit1 + digit2 + digit3;
        let resultParagraph = document.getElementById('password-result');
        console.log(digit1, digit2, digit3, password);

        if(digit1 === '9' && digit2 === '1' && digit3 === '1'){
            resultParagraph.textContent = 'Password 1 Correcto.';
        }else if(digit1 === '7' && digit2 === '1' && digit3 === '4'){
            resultParagraph.textContent = 'Password 2 Correcto';
        }else{
            resultParagraph.textContent = 'Password Incorrecto.';
        }
    });
}


/* Codigo para posterior */
/*Espera que el documento este completamente cargado */
//document.addEventListener('DOMContentLoaded', function(){
/*Obtiene una referencia al a imagen por su id */
//  let image = document.getElementById('interactive-image');
/*escucha el evento click, alterna la clase border-red en la imagen al hacer click */
// image.addEventListener('click', function(){
//    image.classList.toggle('border-red');
//});
//});