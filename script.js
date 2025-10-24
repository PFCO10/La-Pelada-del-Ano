fetch('data/pruebas.json')
  .then(res => res.json())
  .then(pruebas => {
    const lista = document.getElementById('lista-pruebas');
    pruebas.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.nombre} — ${p.estado}`;
      if(p.estado === 'confirmada') li.style.color = 'green';
      if(p.estado === 'pendiente') li.style.color = 'orange';
      if(p.estado === 'menos pendiente') li.style.color = 'blue';
      if(p.estado === 'rechazada') li.style.color = 'red';
      lista.appendChild(li);
    });
  });
