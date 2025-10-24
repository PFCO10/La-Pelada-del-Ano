let pruebas = [];

fetch('data/pruebas.json')
  .then(res => res.json())
  .then(data => {
    pruebas = data;
    mostrarPruebas();
  });

// Mostrar pruebas según filtros
function mostrarPruebas() {
    const lista = document.getElementById('lista-pruebas');
    lista.innerHTML = '';
    const estado = document.getElementById('estadoFiltro').value;
    const categoria = document.getElementById('categoriaFiltro').value;

    pruebas.forEach((p, index) => {
        if((estado === 'todos' || p.estado === estado) && 
           (categoria === 'todos' || p.categoria === categoria)) {
            const li = document.createElement('li');
            li.textContent = `${p.id}. ${p.nombre} [${p.categoria}] — ${p.estado} — Puntos: ${p.puntos}`;
            li.classList.add(p.estado.replace(' ', '-'));

            // Animación con retraso para efecto secuencial
            li.style.animationDelay = `${index * 0.1}s`;

            lista.appendChild(li);
        }
    });
}

// Filtros
document.getElementById('estadoFiltro').addEventListener('change', mostrarPruebas);
document.getElementById('categoriaFiltro').addEventListener('change', mostrarPruebas);

// Medallero (ejemplo estático)
const participantes = [
    {nombre: 'TontoPolla', puntos: 15},
    {nombre: 'Bombardino', puntos: 12},
    {nombre: 'Darío', puntos: 18}
];

function mostrarMedallero() {
    const tbody = document.querySelector('#tabla-puntos tbody');
    tbody.innerHTML = '';
    participantes.sort((a,b)=> b.puntos - a.puntos); // orden descendente
    participantes.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.nombre}</td><td class="puntos">${p.puntos}</td>`;
        tbody.appendChild(tr);

        // Animación de conteo de puntos
        let count = 0;
        const interval = setInterval(() => {
            if(count >= p.puntos) clearInterval(interval);
            else {
                count++;
                tr.querySelector('.puntos').textContent = count;
            }
        }, 50);
    });
}

mostrarMedallero();
