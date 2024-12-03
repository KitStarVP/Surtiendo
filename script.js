document.addEventListener('DOMContentLoaded', () => {
    const stations = [
        { name: 'Estación 1', abierta: true, surtido: true, fila: 'Poca' },
        { name: 'Estación 2', abierta: true, surtido: false, fila: 'N/A' },
        { name: 'Estación 3', abierta: true, surtido: true, fila: 'Mucha' },
        // Añade más estaciones aquí
    ];

    const stationList = document.getElementById('station-list');

    stations.forEach(station => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${station.name}</strong>
            <span>Abierta: ${station.abierta ? 'Sí' : 'No'}</span>
            <span>Surtido: ${station.surtido ? 'Sí' : 'No'}</span>
            <span>Fila: ${station.fila}</span>
        `;
        stationList.appendChild(listItem);
    });
});
