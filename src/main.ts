import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

function obtenPacientesAsignadosAPediatria(pacientes: Pacientes[]): Pacientes[]{
    let listaPediatria: Pacientes[] = [];
    for(let i = 0; i<pacientes.length; i++){
        if(pacientes[i].especialidad==="Pediatra")
            listaPediatria.push(pacientes[i]); 
    }
    return listaPediatria;
};

function obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes: Pacientes[]): Pacientes[]{
    let listaMenoresDiez: Pacientes[] = [];
    for(let i = 0; i<pacientes.length; i++){
        if(pacientes[i].edad<10)
            listaMenoresDiez.push(pacientes[i]); 
    }
    return listaMenoresDiez;
};

function activarProtocoloUrgencia(pacientes: Pacientes[]): boolean{
    let activarProctolo = false;
    let i = 0;
    while(i<pacientes.length && !activarProctolo){
        if(pacientes[i].frecuenciaCardiaca>100 && pacientes[i].temperatura>39)
            activarProctolo = true;
        i++;
    }
    return activarProctolo;
};

function reasignaPacientesAMedicoFamilia(pacientes: Pacientes[]): Pacientes[]{
    let listaReasignados: Pacientes[] = [];
    for(let i = 0; i<pacientes.length; i++){
        listaReasignados[i] = {...pacientes[i]};
        if(listaReasignados[i].especialidad==="Pediatra"){
            listaReasignados[i].especialidad="Medico de familia";
        }
    }
    return listaReasignados;
};

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let puedeIrse = true;
    let i = 0;
    while(i<pacientes.length && puedeIrse){
        if(pacientes[i].especialidad==="Pediatra")
            puedeIrse = false;
        i++;
    }
    return puedeIrse;
};

function cuentaPacientesPorEspecialidad(pacientes: Pacientes[]): NumeroPacientesPorEspecialidad {
  let pacientesCardiologia = 0;
  let pacienteMedicoFamilia = 0;
  let pacientesPediatria = 0;
  for(let i = 0; i<pacientes.length;i++){
    switch(pacientes[i].especialidad){
      case "Cardiólogo":
        pacientesCardiologia+=1;
        break;
      case "Medico de familia":
        pacienteMedicoFamilia+=1;
        break;
      case "Pediatra":
        pacientesPediatria+=1;
        break;
    }
  }
  const numeroPacientesEspecialidad: NumeroPacientesPorEspecialidad = {cardiologia: pacientesCardiologia, medicoDeFamilia: pacienteMedicoFamilia, pediatria: pacientesPediatria};
  return numeroPacientesEspecialidad;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(activarProtocoloUrgencia(pacientes));
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(hayPacientesDePediatria(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientes));   

