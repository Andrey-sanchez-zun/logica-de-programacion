alert('Hola Mundo');

//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert (`Acertaste, el Número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número Secreto es menor');
        } else {
            alert('El número Secreto es mayor');
        }
        //Incrementamos el contador cuando no acierte
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;

        //palabraVeces = 'veces';
        if (intentos > maximoIntentos) {
        alert(`Llegaste al número máximo de ${maximoIntentos} intenos`);
        break;
        }
        //La condición no se cumplió
        //alert('Lo siento no acertaste el número');
    }
}
