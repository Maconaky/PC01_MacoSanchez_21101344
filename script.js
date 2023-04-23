const container = document.querySelector('.profesionales');

const profesionales = [
  {
    correo: "juan@webdeveloper.com",
    nombre: "Juan Perez",
    foto: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    correo: "ana@webdeveloper.com",
    nombre: "Ana Garcia",
    foto: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    correo: "carlos@webdeveloper.com",
    nombre: "Carlos Ramirez",
    foto: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    correo: "maria@webdeveloper.com",
    nombre: "Maria Hernandez",
    foto: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    correo: "jose@webdeveloper.com",
    nombre: "Jose Martinez",
    foto: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    correo: "laura@webdeveloper.com",
    nombre: "Laura Diaz",
    foto: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

profesionales.forEach(profesional => {
  const card = document.createElement('div');
  card.classList.add('profesional');

  const foto = document.createElement('img');
  foto.src = profesional.foto;
  foto.alt = `Foto de ${profesional.nombre}`;
  card.appendChild(foto);

  const nombre = document.createElement('h3');
  nombre.textContent = profesional.nombre;
  card.appendChild(nombre);

  const correo = document.createElement('p');
  correo.textContent = profesional.correo;
  card.appendChild(correo);

  const boton = document.createElement('a');
  boton.href = 'https://github.com/';
  boton.target = '_blank';
  boton.classList.add('boton');
  boton.textContent = 'GitHub';
  card.appendChild(boton);

  container.appendChild(card);
});