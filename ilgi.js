const apiKey = '4e5315abce9149fab74aa2cf4fe5be95';
const leagueSelect = document.querySelector('#leagueSelect');
const container = document.querySelector('.container');
let leagueId = leagueSelect.value;

leagueSelect.addEventListener('change', (event) => {
    leagueId = event.target.value;
    container.innerHTML = '';
    getFootballData(apiKey, leagueId);
});

function createTable(data) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-bordered');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Draws</th>
                <th>Lost</th>
                <th>Goal Difference</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
  
    const tableBody = table.querySelector('tbody');
  
    data.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.position}</td>
            <td>${team.team.name}</td>
            <td>${team.playedGames}</td>
            <td>${team.won}</td>
            <td>${team.draw}</td>
            <td>${team.lost}</td>
            <td>${team.goalDifference}</td>
            <td>${team.points}</td>
        `;
        tableBody.appendChild(row);
    });
  
    return table;
}

function displayFootballData(data) {
    container.innerHTML = '';
    const table = createTable(data);
    container.appendChild(table);
}

function getFootballData(apiKey, leagueId) {
    const apiUrl = `https://api.football-data.org/v4/competitions/${leagueId}/standings`;

    fetch(apiUrl, {
        headers: {
            'X-Auth-Token': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const standings = data.standings[0].table;
            displayFootballData(standings);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

getFootballData(apiKey, leagueId);
