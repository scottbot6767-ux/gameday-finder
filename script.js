// GameDay Finder — Mock Data & Logic

// Team data by city
const TEAMS = {
  'San Francisco': [
    { name: 'Giants', league: 'MLB', venue: 'Oracle Park', location: 'San Francisco' },
    { name: '49ers', league: 'NFL', venue: "Levi's Stadium", location: 'Santa Clara' },
    { name: 'Warriors', league: 'NBA', venue: 'Chase Center', location: 'San Francisco' },
  ],
  'New York': [
    { name: 'Yankees', league: 'MLB', venue: 'Yankee Stadium', location: 'Bronx' },
    { name: 'Mets', league: 'MLB', venue: 'Citi Field', location: 'Queens' },
    { name: 'Giants', league: 'NFL', venue: 'MetLife Stadium', location: 'East Rutherford' },
    { name: 'Jets', league: 'NFL', venue: 'MetLife Stadium', location: 'East Rutherford' },
    { name: 'Knicks', league: 'NBA', venue: 'Madison Square Garden', location: 'Manhattan' },
    { name: 'Nets', league: 'NBA', venue: 'Barclays Center', location: 'Brooklyn' },
    { name: 'Rangers', league: 'NHL', venue: 'Madison Square Garden', location: 'Manhattan' },
    { name: 'Islanders', league: 'NHL', venue: 'UBS Arena', location: 'Elmont' },
  ],
  'Los Angeles': [
    { name: 'Dodgers', league: 'MLB', venue: 'Dodger Stadium', location: 'Los Angeles' },
    { name: 'Angels', league: 'MLB', venue: 'Angel Stadium', location: 'Anaheim' },
    { name: 'Rams', league: 'NFL', venue: 'SoFi Stadium', location: 'Inglewood' },
    { name: 'Chargers', league: 'NFL', venue: 'SoFi Stadium', location: 'Inglewood' },
    { name: 'Lakers', league: 'NBA', venue: 'Crypto.com Arena', location: 'Los Angeles' },
    { name: 'Clippers', league: 'NBA', venue: 'Intuit Dome', location: 'Inglewood' },
    { name: 'Kings', league: 'NHL', venue: 'Crypto.com Arena', location: 'Los Angeles' },
    { name: 'Ducks', league: 'NHL', venue: 'Honda Center', location: 'Anaheim' },
  ],
  'Chicago': [
    { name: 'Cubs', league: 'MLB', venue: 'Wrigley Field', location: 'Chicago' },
    { name: 'White Sox', league: 'MLB', venue: 'Guaranteed Rate Field', location: 'Chicago' },
    { name: 'Bears', league: 'NFL', venue: 'Soldier Field', location: 'Chicago' },
    { name: 'Bulls', league: 'NBA', venue: 'United Center', location: 'Chicago' },
    { name: 'Blackhawks', league: 'NHL', venue: 'United Center', location: 'Chicago' },
  ],
  'Boston': [
    { name: 'Red Sox', league: 'MLB', venue: 'Fenway Park', location: 'Boston' },
    { name: 'Patriots', league: 'NFL', venue: 'Gillette Stadium', location: 'Foxborough' },
    { name: 'Celtics', league: 'NBA', venue: 'TD Garden', location: 'Boston' },
    { name: 'Bruins', league: 'NHL', venue: 'TD Garden', location: 'Boston' },
  ],
  'Dallas': [
    { name: 'Rangers', league: 'MLB', venue: 'Globe Life Field', location: 'Arlington' },
    { name: 'Cowboys', league: 'NFL', venue: 'AT&T Stadium', location: 'Arlington' },
    { name: 'Mavericks', league: 'NBA', venue: 'American Airlines Center', location: 'Dallas' },
    { name: 'Stars', league: 'NHL', venue: 'American Airlines Center', location: 'Dallas' },
  ],
  'Miami': [
    { name: 'Marlins', league: 'MLB', venue: 'LoanDepot Park', location: 'Miami' },
    { name: 'Dolphins', league: 'NFL', venue: 'Hard Rock Stadium', location: 'Miami Gardens' },
    { name: 'Heat', league: 'NBA', venue: 'Kaseya Center', location: 'Miami' },
    { name: 'Panthers', league: 'NHL', venue: 'Amerant Bank Arena', location: 'Sunrise' },
  ],
  'Seattle': [
    { name: 'Mariners', league: 'MLB', venue: 'T-Mobile Park', location: 'Seattle' },
    { name: 'Seahawks', league: 'NFL', venue: 'Lumen Field', location: 'Seattle' },
    { name: 'Kraken', league: 'NHL', venue: 'Climate Pledge Arena', location: 'Seattle' },
  ],
  'Denver': [
    { name: 'Rockies', league: 'MLB', venue: 'Coors Field', location: 'Denver' },
    { name: 'Broncos', league: 'NFL', venue: 'Empower Field', location: 'Denver' },
    { name: 'Nuggets', league: 'NBA', venue: 'Ball Arena', location: 'Denver' },
    { name: 'Avalanche', league: 'NHL', venue: 'Ball Arena', location: 'Denver' },
  ],
  'Phoenix': [
    { name: 'Diamondbacks', league: 'MLB', venue: 'Chase Field', location: 'Phoenix' },
    { name: 'Cardinals', league: 'NFL', venue: 'State Farm Stadium', location: 'Glendale' },
    { name: 'Suns', league: 'NBA', venue: 'Footprint Center', location: 'Phoenix' },
    { name: 'Coyotes', league: 'NHL', venue: 'Mullett Arena', location: 'Tempe' },
  ],
  'Philadelphia': [
    { name: 'Phillies', league: 'MLB', venue: 'Citizens Bank Park', location: 'Philadelphia' },
    { name: 'Eagles', league: 'NFL', venue: 'Lincoln Financial Field', location: 'Philadelphia' },
    { name: '76ers', league: 'NBA', venue: 'Wells Fargo Center', location: 'Philadelphia' },
    { name: 'Flyers', league: 'NHL', venue: 'Wells Fargo Center', location: 'Philadelphia' },
  ],
  'Atlanta': [
    { name: 'Braves', league: 'MLB', venue: 'Truist Park', location: 'Atlanta' },
    { name: 'Falcons', league: 'NFL', venue: 'Mercedes-Benz Stadium', location: 'Atlanta' },
    { name: 'Hawks', league: 'NBA', venue: 'State Farm Arena', location: 'Atlanta' },
  ],
  'Houston': [
    { name: 'Astros', league: 'MLB', venue: 'Minute Maid Park', location: 'Houston' },
    { name: 'Texans', league: 'NFL', venue: 'NRG Stadium', location: 'Houston' },
    { name: 'Rockets', league: 'NBA', venue: 'Toyota Center', location: 'Houston' },
  ],
  'Detroit': [
    { name: 'Tigers', league: 'MLB', venue: 'Comerica Park', location: 'Detroit' },
    { name: 'Lions', league: 'NFL', venue: 'Ford Field', location: 'Detroit' },
    { name: 'Pistons', league: 'NBA', venue: 'Little Caesars Arena', location: 'Detroit' },
    { name: 'Red Wings', league: 'NHL', venue: 'Little Caesars Arena', location: 'Detroit' },
  ],
  'Minneapolis': [
    { name: 'Twins', league: 'MLB', venue: 'Target Field', location: 'Minneapolis' },
    { name: 'Vikings', league: 'NFL', venue: 'U.S. Bank Stadium', location: 'Minneapolis' },
    { name: 'Timberwolves', league: 'NBA', venue: 'Target Center', location: 'Minneapolis' },
    { name: 'Wild', league: 'NHL', venue: 'Xcel Energy Center', location: 'St. Paul' },
  ],
};

// Opponent teams by league
const OPPONENTS = {
  NFL: ['Patriots', 'Chiefs', 'Bills', 'Ravens', 'Bengals', 'Dolphins', 'Cowboys', 'Eagles', 'Packers', 'Lions'],
  MLB: ['Yankees', 'Red Sox', 'Dodgers', 'Cubs', 'Cardinals', 'Braves', 'Astros', 'Phillies', 'Mets', 'Giants'],
  NBA: ['Lakers', 'Celtics', 'Warriors', 'Bucks', 'Heat', 'Suns', 'Nuggets', 'Mavericks', '76ers', 'Knicks'],
  NHL: ['Bruins', 'Rangers', 'Maple Leafs', 'Lightning', 'Avalanche', 'Oilers', 'Panthers', 'Stars', 'Kings', 'Penguins'],
};

// Game times by league
const GAME_TIMES = {
  NFL: ['1:00 PM', '4:25 PM', '8:20 PM'],
  MLB: ['1:05 PM', '4:10 PM', '7:10 PM', '7:15 PM'],
  NBA: ['7:00 PM', '7:30 PM', '8:00 PM', '10:00 PM'],
  NHL: ['7:00 PM', '7:30 PM', '8:00 PM', '10:00 PM'],
};

// Generate games for a date range
function generateGames(city, startDate, endDate) {
  const teams = TEAMS[city];
  if (!teams) return [];
  
  const games = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Iterate through each day
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const currentDate = new Date(d);
    const month = currentDate.getMonth(); // 0-11
    const dayOfWeek = currentDate.getDay(); // 0=Sun, 6=Sat
    
    teams.forEach(team => {
      let hasGame = false;
      
      // League-specific scheduling logic
      if (team.league === 'MLB' && month >= 2 && month <= 9) {
        // MLB: March-October, ~50% chance per day
        hasGame = Math.random() > 0.5;
      } else if (team.league === 'NFL' && (month >= 8 || month <= 1)) {
        // NFL: September-February, Sunday/Monday/Thursday
        hasGame = (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 4) && Math.random() > 0.7;
      } else if (team.league === 'NBA' && (month >= 9 || month <= 5)) {
        // NBA: October-June, ~40% chance
        hasGame = Math.random() > 0.6;
      } else if (team.league === 'NHL' && (month >= 9 || month <= 5)) {
        // NHL: October-June, ~40% chance
        hasGame = Math.random() > 0.6;
      }
      
      if (hasGame) {
        const opponents = OPPONENTS[team.league].filter(o => o !== team.name);
        const opponent = opponents[Math.floor(Math.random() * opponents.length)];
        const times = GAME_TIMES[team.league];
        const time = times[Math.floor(Math.random() * times.length)];
        
        games.push({
          homeTeam: team.name,
          awayTeam: opponent,
          league: team.league,
          venue: team.venue,
          location: team.location,
          date: new Date(currentDate),
          time: time,
        });
      }
    });
  }
  
  // Sort by date
  games.sort((a, b) => a.date - b.date);
  
  return games;
}

// Format date for display
function formatDate(date) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Format date range
function formatDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${startStr} - ${endStr}`;
}

// Render game card
function renderGameCard(game) {
  return `
    <div class="game-card">
      <div class="game-card-header">
        <span class="league-badge ${game.league.toLowerCase()}">${game.league}</span>
        <span class="game-date">${formatDate(game.date)}</span>
      </div>
      <div class="game-card-body">
        <div class="game-matchup">
          <div class="team">
            <div class="team-name">${game.awayTeam}</div>
            <div class="team-location">Away</div>
          </div>
          <div class="vs">@</div>
          <div class="team">
            <div class="team-name">${game.homeTeam}</div>
            <div class="team-location">Home</div>
          </div>
        </div>
        <div class="game-meta">
          <div class="game-venue">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 7.5C8.10457 7.5 9 6.60457 9 5.5C9 4.39543 8.10457 3.5 7 3.5C5.89543 3.5 5 4.39543 5 5.5C5 6.60457 5.89543 7.5 7 7.5Z" stroke="currentColor" stroke-width="1.2"/>
              <path d="M7 13C7 13 12 9 12 5.5C12 2.73858 9.76142 0.5 7 0.5C4.23858 0.5 2 2.73858 2 5.5C2 9 7 13 7 13Z" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            <span>${game.venue}</span>
          </div>
          <div class="game-time">${game.time}</div>
        </div>
      </div>
    </div>
  `;
}

// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const city = document.getElementById('city').value.trim();
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  
  if (!city || !startDate || !endDate) {
    alert('Please fill in all fields');
    return;
  }
  
  // Normalize city name
  const normalizedCity = Object.keys(TEAMS).find(
    c => c.toLowerCase() === city.toLowerCase()
  );
  
  if (!normalizedCity) {
    alert(`Sorry, we don't have team data for "${city}" yet. Try: San Francisco, New York, Los Angeles, Chicago, Boston, Dallas, Miami, Seattle, Denver, Phoenix, Philadelphia, Atlanta, Houston, Detroit, or Minneapolis.`);
    return;
  }
  
  // Generate games
  const games = generateGames(normalizedCity, startDate, endDate);
  
  // Show results section
  const resultsSection = document.getElementById('results');
  const resultsGrid = document.getElementById('resultsGrid');
  const noResults = document.getElementById('noResults');
  
  resultsSection.classList.remove('hidden');
  
  // Update header
  document.querySelector('.city-name').textContent = normalizedCity;
  document.querySelector('.date-range').textContent = formatDateRange(startDate, endDate);
  
  if (games.length > 0) {
    resultsGrid.innerHTML = games.map(renderGameCard).join('');
    resultsGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
  } else {
    resultsGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
  }
  
  // Scroll to results
  resultsSection.scrollIntoView({ behavior: 'smooth' });
});

// Clear search
function clearSearch() {
  document.getElementById('city').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('results').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set default dates (today + 7 days)
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const formatForInput = (date) => date.toISOString().split('T')[0];
  
  document.getElementById('startDate').value = formatForInput(today);
  document.getElementById('endDate').value = formatForInput(nextWeek);
});
