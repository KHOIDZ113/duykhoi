const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

async function fetchTeams() {
    const response = await fetch('https://api.balldontlie.io/v1/teams', {
        headers: { 'Authorization': apiKey }
    });
    const data = await response.json();
    const teamsList = document.getElementById('teams-list');
    data.data.forEach(team => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${team.full_name}</h3><p>${team.city} - ${team.abbreviation}</p>`;
        teamsList.appendChild(card);
    });
}

fetchTeams();
