import {Carta, Tablero, cartas} from "./modelo";

const barajarCartas = (cartas : Carta[]): Carta[] => {
    return cartas.sort(() => Math.random() - 0.5);
};
  
  /*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    return !tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta && tablero.estadoPartida!=="DosCartasLevantadas" && tablero.estadoPartida!=="PartidaNoIniciada";
};
  
export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    if(sePuedeVoltearLaCarta(tablero, indice) && tablero.estadoPartida==="CeroCartasLevantadas"){
        tablero.cartas[indice].estaVuelta=true;
        tablero.estadoPartida="UnaCartaLevantada";
        tablero.indiceCartaVolteadaA=indice;
        tablero.numeroIntentos++;
    }else{
      if(tablero.estadoPartida==="UnaCartaLevantada"){
        tablero.cartas[indice].estaVuelta=true;
        tablero.estadoPartida="DosCartasLevantadas";
        tablero.indiceCartaVolteadaB=indice;
        tablero.numeroIntentos++;
      }
    }
};
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    return tablero.cartas[indiceA].idFoto===tablero.cartas[indiceB].idFoto;
};
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada=true;
    tablero.cartas[indiceB].encontrada=true;
    tablero.estadoPartida="CeroCartasLevantadas";
    tablero.parejasEncontradas++;
    if(esPartidaCompleta(tablero))
        tablero.estadoPartida="PartidaCompleta";
};
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].estaVuelta=false;
    tablero.cartas[indiceB].estaVuelta=false;
    tablero.estadoPartida="CeroCartasLevantadas";
};
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero) : boolean => {
  return tablero.cartas.every((carta: Carta) => carta.encontrada);
};
  
  /*
  Iniciar partida
  */
export const iniciaPartida = (tablero: Tablero): void => {
  tablero.cartas=cartas;
  barajarCartas(tablero.cartas);  
  tablero.estadoPartida="CeroCartasLevantadas";
  tablero.numeroIntentos=0;
  tablero.parejasEncontradas=0;
};

export const dosCartasLevantadas = (tablero: Tablero): boolean =>{
  return tablero.estadoPartida==="DosCartasLevantadas";
}

export const esPartidaNoIniciada = (tablero: Tablero): boolean => {
  return tablero.estadoPartida==="PartidaNoIniciada";
};

export const cartaVolteada =(tablero: Tablero, id: number): boolean => {
  return tablero.cartas[id].estaVuelta===true;
}

