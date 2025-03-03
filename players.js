const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

async function fetchPlayers() {
    const response = await fetch('https://api.balldontlie.io/v1/players?per_page=100', {
        headers: { 'Authorization': apiKey }
    });
    const data = await response.json();
    const playersList = document.getElementById('players-list');
    data.data.forEach(player => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${player.first_name} ${player.last_name}</h3><p>Position: ${player.position}</p><p>Team: ${player.team.full_name}</p>`;
        playersList.appendChild(card);
    });
}

fetchPlayers();
