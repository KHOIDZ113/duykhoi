const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';
const teamsContainer = document.getElementById('teams-container');
const playersContainer = document.getElementById('players-container');
const teamsSection = document.getElementById('teams-section');
const playersSection = document.getElementById('players-section');
const showTeamsBtn = document.getElementById('show-teams');
const showPlayersBtn = document.getElementById('show-players');
const searchTeamInput = document.getElementById('search-team');
const searchPlayerInput = document.getElementById('search-player');

// Lấy danh sách đội bóng
let teamsList = [];
function fetchTeams() {
    fetch('https://api.balldontlie.io/v1/teams', {
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            teamsList = data.data;
            displayTeams(teamsList);  // Hiển thị danh sách đội ban đầu
        })
        .catch(error => console.error('Error fetching teams:', error));
}

// Lấy danh sách cầu thủ
let playersList = [];
function fetchPlayers() {
    fetch('https://api.balldontlie.io/v1/players', {
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            playersList = data.data;
            displayPlayers(playersList);  // Hiển thị danh sách cầu thủ ban đầu
        })
        .catch(error => console.error('Error fetching players:', error));
}

// Hiển thị đội bóng
function displayTeams(teams) {
    teamsContainer.innerHTML = '';  // Clear previous content
    teams.forEach(team => {
        const teamElement = document.createElement('div');
        teamElement.classList.add('team');
        teamElement.innerHTML = `
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_of_the_NBA.png" alt="${team.full_name}">
            <h3>${team.full_name}</h3>
            <p>${team.city}</p>
        `;
        teamsContainer.appendChild(teamElement);
    });
}

// Hiển thị cầu thủ
function displayPlayers(players) {
    playersContainer.innerHTML = '';  // Clear previous content
    players.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.classList.add('player');
        playerElement.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${player.first_name} ${player.last_name}">
            <h3>${player.first_name} ${player.last_name}</h3>
            <p>${player.team.full_name}</p>
        `;
        playersContainer.appendChild(playerElement);
    });
}

// Lọc đội bóng theo tên
searchTeamInput.addEventListener('input', function() {
    const query = searchTeamInput.value.toLowerCase();
    const filteredTeams = teamsList.filter(team => team.full_name.toLowerCase().includes(query));
    displayTeams(filteredTeams);
});

// Lọc cầu thủ theo tên
searchPlayerInput.addEventListener('input', function() {
    const query = searchPlayerInput.value.toLowerCase();
    const filteredPlayers = playersList.filter(player => {
        const playerName = `${player.first_name} ${player.last_name}`.toLowerCase();
        return playerName.includes(query);
    });
    displayPlayers(filteredPlayers);
});

// Chuyển đổi giữa đội bóng và cầu thủ
showTeamsBtn.addEventListener('click', () => {
    teamsSection.style.display = 'block';
    playersSection.style.display = 'none';
    fetchTeams();
    showTeamsBtn.classList.add('active');
    showPlayersBtn.classList.remove('active');
});

showPlayersBtn.addEventListener('click', () => {
    playersSection.style.display = 'block';
    teamsSection.style.display = 'none';
    fetchPlayers();
    showPlayersBtn.classList.add('active');
    showTeamsBtn.classList.remove('active');
});

// Mặc định hiển thị đội bóng khi trang được tải
window.onload = () => {
    fetchTeams();
    teamsSection.style.display = 'block';
    playersSection.style.display = 'none';
    showTeamsBtn.classList.add('active');
};
const teamCard = document.createElement('div');
teamCard.className = 'card';
teamCard.innerHTML = `<h3>${team.full_name}</h3><p>City: ${team.city}</p>`;
document.getElementById('teams-container').appendChild(teamCard);

