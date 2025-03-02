// Fetch data from the API
const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

async function fetchTeams() {
    const response = await fetch('https://api.balldontlie.io/v1/teams', {
        headers: {
            'Authorization': apiKey
        }
    });
    const data = await response.json();
    const teamsList = document.getElementById('teams-list');
    data.data.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('card');
        teamCard.innerHTML = `
            <h3>${team.full_name}</h3>
            <p>${team.city} - ${team.abbreviation}</p>
        `;
        teamsList.appendChild(teamCard);
    });
}

async function fetchPlayers() {
    const response = await fetch('https://api.balldontlie.io/v1/players?per_page=10', {
        headers: {
            'Authorization': apiKey
        }
    });
    const data = await response.json();
    const playersList = document.getElementById('players-list');
    data.data.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('card');
        playerCard.innerHTML = `
            <h3>${player.first_name} ${player.last_name}</h3>
            <p>Position: ${player.position}</p>
            <p>Team: ${player.team.full_name}</p>
        `;
        playersList.appendChild(playerCard);
    });
}

async function fetchGames() {
    const response = await fetch('https://api.balldontlie.io/v1/games', {
        headers: {
            'Authorization': apiKey
        }
    });
    const data = await response.json();
    const gamesList = document.getElementById('games-list');
    data.data.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('card');
        gameCard.innerHTML = `
            <h3>${game.home_team.full_name} vs ${game.visitor_team.full_name}</h3>
            <p>${game.date}</p>
            <p>Score: ${game.home_team_score} - ${game.visitor_team_score}</p>
        `;
        gamesList.appendChild(gameCard);
    });
}
function searchFunction() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let content = document.querySelector('.content');

    // Nếu có nội dung cần tìm kiếm trong page, hiển thị hoặc ẩn chúng
    if (filter) {
        content.style.display = 'none';  // Ẩn nội dung nếu không tìm thấy kết quả
    } else {
        content.style.display = 'block'; // Hiển thị lại nội dung
    }
}

function searchFunction() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let sections = document.querySelectorAll('.section');

    // Duyệt qua các phần và ẩn/hiển thị chúng dựa trên từ khóa tìm kiếm
    sections.forEach(function(section) {
        let title = section.querySelector('h2').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
}



// Initialize fetch requests
fetchTeams();
fetchPlayers();
fetchGames();


