class Departamento {
  // constructor que reciba el nombre del dpto
  //metodo getName q devuelve nombre del dpto
  nombre: string;
  constructor(Dpto) {
    this.nombre = Dpto;
  }
  getName() {
    return this.nombre;
  }
}

class Piso {
  //constructor reciba "nombre del piso ej: 1er piso" y guardarlo
  //en una propiedad nombre para poder usarla dsp.
  //metodos pushDepartamento y getDepartamentos para agregar dptos
  // y obtener el listado
  nombre: string;
  dptos: Departamento[];
  constructor(nombre) {
    this.nombre = nombre;
    this.dptos = [];
  }
  pushDepartamento(depto: Departamento) {
    this.dptos.push(depto);
  }
  getDepartamentos(): Departamento[] {
    return this.dptos;
  }
}

class Edificio {
  // constructor q reciba un array de Piso y guardarlo
  //metodo addDepartamentoToPiso q reciba el dto y lo ubique en el piso
  //getDepartamentosByPiso q devuelva todos los dtos de ese piso
  pisos: Piso[];
  constructor(pisoss: Piso[]) {
    this.pisos = pisoss;
  }
  addDepartamentoToPiso(namepiso: string, dto: Departamento) {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == namepiso);
    return pisoEncontrado.pushDepartamento(dto);
  }

  getDepartamentoByPiso(namepiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == namepiso);
    return pisoEncontrado.getDepartamentos();
  }
}
// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentoByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentoByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();