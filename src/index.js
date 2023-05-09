class Cl_comensal {
  constructor(nombre = null, tipo = 1) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.cntRecibido = 0;
  }
}

class Cl_comedor {
  constructor(cntEmpanadas = 0, cntFrutas = 0) {
    this.cntEmpanadas = cntEmpanadas;
    this.cntFrutas = cntFrutas;
  }
  procesarComensal(c) {
    if (c.tipo === 1 && (this.cntEmpanadas < 3 || this.cntFrutas < 2)) return 0;
    if (c.tipo === 2 && (this.cntEmpanadas < 2 || this.cntFrutas < 1)) return 0;
    if (c.tipo === 1) {
      this.cntEmpanadas -= 3;
      this.cntFrutas -= 2;
      return 5; // Se entregaron 5 productos
    } else {
      this.cntEmpanadas -= 2;
      this.cntFrutas -= 1;
      return 3; // Se entregaron 3 productos
    }
  }
}

let comensal1 = new Cl_comensal("Juan", 1);
let comensal2 = new Cl_comensal("Luis", 1);
let comensal3 = new Cl_comensal("Carl", 1);
let comensal4 = new Cl_comensal("José", 2);
let comensal5 = new Cl_comensal("Marc", 2);

let salida = document.getElementById("app");
salida.innerHTML = "Resultados:";
let cntEmpanadas = 10,
  cntFrutas = 5,
  comedor = new Cl_comedor(cntEmpanadas, cntFrutas);
salida.innerHTML += `<p>Cant empanadas inicial: ${cntEmpanadas}`;
salida.innerHTML += `<p>Cant frutas inicial: ${cntFrutas}`;

comensal1.recibido = comedor.procesarComensal(comensal1);
salida.innerHTML += `<br>${comensal1.nombre}...${comensal1.tipo}...${
  comensal1.recibido ? "SI" : "NO"
}...${comedor.cntEmpanadas}...${comedor.cntFrutas}...${comensal1.recibido}`;

comensal2.recibido = comedor.procesarComensal(comensal2);
salida.innerHTML += `<br>${comensal2.nombre}...${comensal2.tipo}...${
  comensal2.recibido ? "SI" : "NO"
}...${comedor.cntEmpanadas}...${comedor.cntFrutas}...${comensal2.recibido}`;

comensal3.recibido = comedor.procesarComensal(comensal3);
salida.innerHTML += `<br>${comensal3.nombre}...${comensal3.tipo}...${
  comensal3.recibido ? "SI" : "NO"
}...${comedor.cntEmpanadas}...${comedor.cntFrutas}...${comensal3.recibido}`;

comensal4.recibido = comedor.procesarComensal(comensal4);
salida.innerHTML += `<br>${comensal4.nombre}...${comensal4.tipo}...${
  comensal4.recibido ? "SI" : "NO"
}...${comedor.cntEmpanadas}...${comedor.cntFrutas}...${comensal4.recibido}`;

comensal5.recibido = comedor.procesarComensal(comensal5);
salida.innerHTML += `<br>${comensal5.nombre}...${comensal5.tipo}...${
  comensal5.recibido ? "SI" : "NO"
}...${comedor.cntEmpanadas}...${comedor.cntFrutas}...${comensal5.recibido}`;
