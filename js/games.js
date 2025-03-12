const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

async function fetchGames() {
    const response = await fetch('https://api.balldontlie.io/v1/games', {
        headers: { 'Authorization': apiKey }
    });
    const data = await response.json();
    const gamesList = document.getElementById('games-list');
    data.data.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${game.home_team.full_name} vs ${game.visitor_team.full_name}</h3><p>${game.date}</p><p>Score: ${game.home_team_score} - ${game.visitor_team_score}</p>`;
        gamesList.appendChild(card);
    });
}

fetchGames();
