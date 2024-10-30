export interface Carta{
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
};

interface InfoCarta {
  idFoto: number;
  imagen: string;
};
  
const infoCartas: InfoCarta[] = [
  {idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"},
  {idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"},
  {idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"},
  {idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png"},
  {idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png"},
  {idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"}];
  
const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});
  
function crearColeccionDeCartasInicial(infoCartas: InfoCarta[]): Carta[]{
  let coleccion : Carta[] = [];
  let duplicado : Carta[] = [];
  infoCartas.forEach((infocarta) => coleccion.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen)));
  infoCartas.forEach((infocarta) => duplicado.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen)));
  return duplicado.concat(...coleccion);
};
  
export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
  
type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";
  
export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
  numeroIntentos: number;
  parejasEncontradas: number;
};
  
const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
  numeroIntentos: 0,
  parejasEncontradas: 0,
});
  
export let tablero: Tablero = crearTableroInicial();

export function ponerTodoFalse(cartas: Carta[]): void{
  cartas.map(function(carta){
    carta.encontrada=false;
    carta.estaVuelta=false;
  });
}

