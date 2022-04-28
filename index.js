//Codifique una función para conocer la edad de una mascota canina según edad animal.
//  La función recibirá un argumento, la edad de la mascota y calculará la edad basada en la tasa de conversión 
//  que 1 año humano equivale a 7 años caninos.
//  La función retornará el mensaje: “Su mascota tiene N años en edad canina


function edadCanina(){    
            edadPerro= prompt("Escribe cuantos años tiene tu perro y te digo cuantos años  caninos tiene");
            resultado= edadPerro*7;
            document.write (`Tu mascota tiene: ${resultado} de edad canina`);
        }
        //llamamos a la función edadCanina
        edadCanina(); 