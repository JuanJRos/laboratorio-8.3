import {tablero, Tablero} from "./modelo";
import {cartaVolteada, dosCartasLevantadas, esPartidaCompleta, esPartidaNoIniciada, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, voltearLaCarta} from "./motor";

export function escribirMensaje(mensaje: string): void{
  const contenido = document.getElementById("mensaje"); 
  if(contenido && contenido instanceof HTMLParagraphElement)
    contenido.innerHTML = mensaje;
};

function mostrarCarta(carta: HTMLDivElement, tablero: Tablero, id: number): void {
    carta.innerHTML = `<img src="${tablero.cartas[id].imagen}">`;
    carta.style.backgroundColor = "#6750be";
};
  
function obtenerDiv(id: number): HTMLDivElement{
    const div = document.getElementById(id.toString()); 
    if(div && div instanceof HTMLDivElement)
      return div;
    else
      return new HTMLDivElement;
};
  
function voltearDosCartas(carta1: HTMLDivElement, carta2: HTMLDivElement): void{
    carta1.innerHTML = `<img src="" alt ="">`;
    carta1.style.backgroundColor="#646cff";
    carta2.innerHTML = `<img src="" alt ="">`;
    carta2.style.backgroundColor="#646cff";
  };

export function voltearCarta(carta: HTMLDivElement): void{
    carta.innerHTML = `<img src="" alt ="">`;
    carta.style.backgroundColor="#646cff";
  };

export const mostrarIntentos = (tablero: Tablero): void => {
  const intentos = document.getElementById("intentos"); 
    if(intentos && intentos instanceof HTMLParagraphElement)
      intentos.innerHTML = `Número de intentos: ${tablero.numeroIntentos.toString()}`;
}

export const mostrarParejasEncontradas = (tablero: Tablero): void => {
  const parejas = document.getElementById("parejas"); 
    if(parejas && parejas instanceof HTMLParagraphElement)
      parejas.innerHTML = `${tablero.parejasEncontradas.toString()} de 6 parejas`;
}

export function accionarCarta(div: HTMLDivElement): void{
  if(sePuedeVoltearLaCarta(tablero, parseInt(div.id))){
      voltearLaCarta(tablero, parseInt(div.id));
      mostrarCarta(div, tablero, parseInt(div.id));
      mostrarIntentos(tablero);
      if(dosCartasLevantadas(tablero)){
        if(tablero.indiceCartaVolteadaA!==undefined && tablero.indiceCartaVolteadaB!==undefined){  
          if(sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero)){
            parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
            mostrarParejasEncontradas(tablero);
          }else{
            setTimeout(() => {
              if(tablero.indiceCartaVolteadaA!==undefined && tablero.indiceCartaVolteadaB!==undefined){
                voltearDosCartas(obtenerDiv(tablero.indiceCartaVolteadaA), obtenerDiv(tablero.indiceCartaVolteadaB))
                parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);}}, 800);
          }
        }
      }
    }else{
      if(esPartidaNoIniciada(tablero)){
        escribirMensaje("Partida no Iniciada, haz click en Empezar Partida");
      }else{
        if(esPartidaCompleta(tablero)){
          escribirMensaje("Has completado todas las parejas, Enhorabuena!!")
        }else{
          if(cartaVolteada(tablero, parseInt(div.id))){
              escribirMensaje("La carta esta volteada, selecciona otra");
              setTimeout(() => {escribirMensaje("");}, 800);
          }
        }
        }
    };   
};



