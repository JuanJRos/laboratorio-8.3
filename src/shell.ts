import {accionarCarta, mostrarIntentos, mostrarParejasEncontradas, escribirMensaje, voltearCarta} from "./ui";
import {iniciaPartida} from "./motor";
import {ponerTodoFalse, tablero} from "./modelo";

for(let indice = 0; indice<=tablero.cartas.length; indice++){
  document.addEventListener("click", () => {});
  const div = document.getElementById(indice.toString());
  if(div!==null && div!==undefined && div instanceof HTMLDivElement)
    div.addEventListener("click", () => {
      accionarCarta(div);
    });
};

const botonNuevo = document.getElementById("boton-nuevo");
if(botonNuevo!==null && botonNuevo!==undefined && botonNuevo instanceof HTMLButtonElement){
    botonNuevo.addEventListener("click", () => {iniciaPartida(tablero);
        for(let indice = 0; indice<=tablero.cartas.length; indice++){
            const div = document.getElementById(indice.toString());
            if(div!==null && div!==undefined && div instanceof HTMLDivElement)
                voltearCarta(div);
          };
          ponerTodoFalse(tablero.cartas)
          mostrarIntentos(tablero);
          mostrarParejasEncontradas(tablero);
          escribirMensaje("")});      
};
