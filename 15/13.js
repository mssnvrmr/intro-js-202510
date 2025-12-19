const clientes = ["Ana", "Carlos", "VIP", "Sofia", "Juan"];

const atenderClientes = (personas) => {
  let clientesNormales = personas;

  if (personas.includes("VIP")) {
    personas.filter(cliente => cliente === "VIP").forEach(cliente => console.log(`Atención preferencial a cliente: ${cliente}`));
    clientesNormales = personas.filter(cliente => cliente !== "VIP");
  }

  clientesNormales.forEach(cliente => console.log(`Atención a cliente: ${cliente}`));
  console.log(`Se atendieron un total de ${personas.length+1} clientes`);
}

atenderClientes(clientes);