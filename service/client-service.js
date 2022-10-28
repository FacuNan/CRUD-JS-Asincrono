

const listaClientes = () =>
 fetch('http://localhost:3000/Perfil').then((respuesta) => respuesta.json());
 

 const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarClientes = (id)=>{
return fetch(`http://localhost:3000/perfil/${id}`,{
  method:"DELETE",
})

}

const detallesCliente = (id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};


export const clientService ={
  listaClientes,
  crearCliente,
  eliminarClientes,
  detallesCliente,
  actualizarCliente

}
