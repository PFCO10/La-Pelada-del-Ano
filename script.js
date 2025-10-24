fetch('data/pruebas.json')
  .then(res => res.json())
  .then(pruebas => {
    const lista = document.getElementById('lista-pruebas');
    pruebas.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.id}. ${p.nombre}`;
      if(p.estado === 'confirmada') li.classList.add('confirmada');
      if(p.estado === 'pendiente') li.classList.add('pendiente');
      if(p.estado === 'menos pendiente') li.classList.add('menos-pendiente');
      if(p.estado === 'rechazada') li.classList.add('rechazada');
      lista.appendChild(li);
    });
  });
