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
    return pacientes.filter((paciente : Pacientes) => paciente.especialidad==="Pediatra");
};

function obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes: Pacientes[]): Pacientes[]{
    return pacientes.filter((paciente : Pacientes) => paciente.especialidad==="Pediatra" && paciente.edad<10);
};

function activarProtocoloUrgencia(pacientes: Pacientes[]): boolean{
    return pacientes.some((paciente: Pacientes) => paciente.frecuenciaCardiaca>100 && paciente.temperatura>39);
};

function reasignaPacientesAMedicoFamilia(pacientes: Pacientes[]): Pacientes[]{
  return pacientes.map((paciente)=> {
    if(paciente.especialidad==="Pediatra")
        return ({...paciente, especialidad: "Medico de familia"});
    else
    return ({...paciente});
  });
};

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some((paciente:Pacientes) => paciente.especialidad==="Pediatra");
};

function cuentaPacientesPorEspecialidad(pacientes: Pacientes[]): NumeroPacientesPorEspecialidad {
  const pacientesCardio = pacientes.filter((paciente: Pacientes) => paciente.especialidad==="Cardiólogo").length; 
  const pacientesFamilia = pacientes.filter((paciente: Pacientes) => paciente.especialidad==="Medico de familia").length; 
  const pacientesPedia = pacientes.filter((paciente: Pacientes) => paciente.especialidad==="Pediatra").length; 
  const numeroPacientesEspecialidad: NumeroPacientesPorEspecialidad = {cardiologia: pacientesCardio, medicoDeFamilia: pacientesFamilia, pediatria: pacientesPedia};
  return numeroPacientesEspecialidad;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
console.log(activarProtocoloUrgencia(pacientes));
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(hayPacientesDePediatria(pacientes));
console.log(cuentaPacientesPorEspecialidad(pacientes));   

