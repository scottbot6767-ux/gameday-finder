// GameDay Finder — Mock Data & Logic

// Current search mode
let searchMode = 'city';

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
  document.getElementById('team').value = '';
  document.getElementById('results').classList.add('hidden');
  document.getElementById('mapSection').classList.add('hidden');
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

// ========== TEAM MODE ==========

// Team to city mapping
const TEAM_CITIES = {
  // NFL
  '49ers': 'San Francisco', 'Bears': 'Chicago', 'Bengals': 'Cincinnati', 'Bills': 'Buffalo',
  'Broncos': 'Denver', 'Browns': 'Cleveland', 'Buccaneers': 'Tampa Bay', 'Cardinals': 'Phoenix',
  'Chargers': 'Los Angeles', 'Chiefs': 'Kansas City', 'Colts': 'Indianapolis', 'Commanders': 'Washington',
  'Cowboys': 'Dallas', 'Dolphins': 'Miami', 'Eagles': 'Philadelphia', 'Falcons': 'Atlanta',
  'Giants': 'New York', 'Jaguars': 'Jacksonville', 'Jets': 'New York', 'Lions': 'Detroit',
  'Packers': 'Green Bay', 'Panthers': 'Charlotte', 'Patriots': 'Boston', 'Raiders': 'Las Vegas',
  'Rams': 'Los Angeles', 'Ravens': 'Baltimore', 'Saints': 'New Orleans', 'Seahawks': 'Seattle',
  'Steelers': 'Pittsburgh', 'Texans': 'Houston', 'Titans': 'Nashville', 'Vikings': 'Minneapolis',
  // MLB
  'Angels': 'Los Angeles', 'Astros': 'Houston', 'Athletics': 'Oakland', 'Blue Jays': 'Toronto',
  'Braves': 'Atlanta', 'Brewers': 'Milwaukee', 'Cubs': 'Chicago', 'Diamondbacks': 'Phoenix',
  'Dodgers': 'Los Angeles', 'Guardians': 'Cleveland', 'Mariners': 'Seattle', 'Marlins': 'Miami',
  'Mets': 'New York', 'Nationals': 'Washington', 'Orioles': 'Baltimore', 'Padres': 'San Diego',
  'Phillies': 'Philadelphia', 'Pirates': 'Pittsburgh', 'Rangers': 'Dallas', 'Rays': 'Tampa Bay',
  'Red Sox': 'Boston', 'Reds': 'Cincinnati', 'Rockies': 'Denver', 'Royals': 'Kansas City',
  'Tigers': 'Detroit', 'Twins': 'Minneapolis', 'White Sox': 'Chicago', 'Yankees': 'New York',
  // NBA
  '76ers': 'Philadelphia', 'Bucks': 'Milwaukee', 'Bulls': 'Chicago', 'Cavaliers': 'Cleveland',
  'Celtics': 'Boston', 'Clippers': 'Los Angeles', 'Grizzlies': 'Memphis', 'Hawks': 'Atlanta',
  'Heat': 'Miami', 'Hornets': 'Charlotte', 'Jazz': 'Salt Lake City', 'Kings': 'Sacramento',
  'Knicks': 'New York', 'Lakers': 'Los Angeles', 'Magic': 'Orlando', 'Mavericks': 'Dallas',
  'Nets': 'New York', 'Nuggets': 'Denver', 'Pacers': 'Indianapolis', 'Pelicans': 'New Orleans',
  'Pistons': 'Detroit', 'Raptors': 'Toronto', 'Rockets': 'Houston', 'Spurs': 'San Antonio',
  'Suns': 'Phoenix', 'Thunder': 'Oklahoma City', 'Timberwolves': 'Minneapolis',
  'Trail Blazers': 'Portland', 'Warriors': 'San Francisco', 'Wizards': 'Washington',
  // NHL
  'Avalanche': 'Denver', 'Blackhawks': 'Chicago', 'Blue Jackets': 'Columbus', 'Blues': 'St. Louis',
  'Bruins': 'Boston', 'Canadiens': 'Montreal', 'Canucks': 'Vancouver', 'Capitals': 'Washington',
  'Coyotes': 'Phoenix', 'Devils': 'Newark', 'Ducks': 'Los Angeles', 'Flames': 'Calgary',
  'Flyers': 'Philadelphia', 'Golden Knights': 'Las Vegas', 'Hurricanes': 'Raleigh',
  'Islanders': 'New York', 'Jets': 'Winnipeg', 'Kings': 'Los Angeles', 'Kraken': 'Seattle',
  'Lightning': 'Tampa Bay', 'Maple Leafs': 'Toronto', 'Oilers': 'Edmonton', 'Panthers': 'Miami',
  'Penguins': 'Pittsburgh', 'Predators': 'Nashville', 'Rangers': 'New York', 'Red Wings': 'Detroit',
  'Sabres': 'Buffalo', 'Senators': 'Ottawa', 'Sharks': 'San Francisco', 'Stars': 'Dallas', 'Wild': 'Minneapolis',
};

// Cities by league (only cities with teams in that league)
const CITIES_BY_LEAGUE = {
  NFL: [
    'San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Boston', 'Dallas', 'Miami', 'Seattle',
    'Denver', 'Phoenix', 'Philadelphia', 'Atlanta', 'Houston', 'Detroit', 'Minneapolis',
    'Cleveland', 'Cincinnati', 'Buffalo', 'Tampa Bay', 'Kansas City', 'Indianapolis', 'Washington',
    'Jacksonville', 'Green Bay', 'Charlotte', 'Las Vegas', 'Baltimore', 'New Orleans', 'Pittsburgh',
    'Nashville'
  ],
  MLB: [
    'San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Boston', 'Dallas', 'Miami', 'Seattle',
    'Denver', 'Phoenix', 'Philadelphia', 'Atlanta', 'Houston', 'Detroit', 'Minneapolis',
    'Cleveland', 'Cincinnati', 'Tampa Bay', 'Kansas City', 'Washington', 'Baltimore', 'Pittsburgh',
    'Oakland', 'Toronto', 'Milwaukee', 'San Diego', 'St. Louis'
  ],
  NBA: [
    'San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Boston', 'Dallas', 'Miami',
    'Denver', 'Phoenix', 'Philadelphia', 'Atlanta', 'Houston', 'Detroit', 'Minneapolis',
    'Cleveland', 'Indianapolis', 'Washington', 'Charlotte', 'New Orleans',
    'Toronto', 'Milwaukee', 'Sacramento', 'Memphis', 'Salt Lake City', 'Orlando', 'San Antonio',
    'Oklahoma City', 'Portland'
  ],
  NHL: [
    'San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Boston', 'Dallas', 'Miami', 'Seattle',
    'Denver', 'Phoenix', 'Philadelphia', 'Detroit', 'Minneapolis', 'Pittsburgh',
    'Tampa Bay', 'Washington', 'Las Vegas', 'Nashville', 'St. Louis', 'Columbus',
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Winnipeg', 'Edmonton', 'Ottawa', 'Raleigh', 'Buffalo'
  ]
};

// Generate road games for a team
function generateRoadGames(league, teamName) {
  const homeCity = TEAM_CITIES[teamName];
  const games = [];
  
  // Get opponent cities FOR THIS LEAGUE ONLY (exclude home city)
  const leagueCities = CITIES_BY_LEAGUE[league] || [];
  const opponentCities = leagueCities.filter(c => c !== homeCity);
  
  // Generate season schedule based on league
  let seasonStart, seasonEnd, gamesCount;
  
  if (league === 'NFL') {
    seasonStart = new Date('2026-09-07');
    seasonEnd = new Date('2027-01-05');
    gamesCount = 8; // 8 away games
  } else if (league === 'MLB') {
    seasonStart = new Date('2026-03-28');
    seasonEnd = new Date('2026-09-30');
    gamesCount = 81; // 81 away games, but we'll show ~20 series
  } else if (league === 'NBA') {
    seasonStart = new Date('2026-10-20');
    seasonEnd = new Date('2027-04-15');
    gamesCount = 41; // 41 away games, show ~15
  } else if (league === 'NHL') {
    seasonStart = new Date('2026-10-10');
    seasonEnd = new Date('2027-04-10');
    gamesCount = 41; // 41 away games, show ~15
  }
  
  // Limit displayed games
  const displayCount = league === 'NFL' ? 8 : Math.min(gamesCount, 20);
  
  // Generate games spread across the season
  const seasonLength = seasonEnd - seasonStart;
  
  // Build list of opponent teams in this league with their cities
  const opponentTeams = [];
  for (const [team, city] of Object.entries(TEAM_CITIES)) {
    // Check if this team is in the same league and not the user's team
    if (opponentCities.includes(city) && team !== teamName) {
      // Verify team is in correct league by checking if it's in our data
      const isInLeague = (
        (league === 'NFL' && ['49ers','Bears','Bengals','Bills','Broncos','Browns','Buccaneers','Cardinals','Chargers','Chiefs','Colts','Commanders','Cowboys','Dolphins','Eagles','Falcons','Giants','Jaguars','Jets','Lions','Packers','Panthers','Patriots','Raiders','Rams','Ravens','Saints','Seahawks','Steelers','Texans','Titans','Vikings'].includes(team)) ||
        (league === 'MLB' && ['Angels','Astros','Athletics','Blue Jays','Braves','Brewers','Cardinals','Cubs','Diamondbacks','Dodgers','Giants','Guardians','Mariners','Marlins','Mets','Nationals','Orioles','Padres','Phillies','Pirates','Rangers','Rays','Red Sox','Reds','Rockies','Royals','Tigers','Twins','White Sox','Yankees'].includes(team)) ||
        (league === 'NBA' && ['76ers','Bucks','Bulls','Cavaliers','Celtics','Clippers','Grizzlies','Hawks','Heat','Hornets','Jazz','Kings','Knicks','Lakers','Magic','Mavericks','Nets','Nuggets','Pacers','Pelicans','Pistons','Raptors','Rockets','Spurs','Suns','Thunder','Timberwolves','Trail Blazers','Warriors','Wizards'].includes(team)) ||
        (league === 'NHL' && ['Avalanche','Blackhawks','Blue Jackets','Blues','Bruins','Canadiens','Canucks','Capitals','Coyotes','Devils','Ducks','Flames','Flyers','Golden Knights','Hurricanes','Islanders','Jets','Kings','Kraken','Lightning','Maple Leafs','Oilers','Panthers','Penguins','Predators','Rangers','Red Wings','Sabres','Senators','Sharks','Stars','Wild'].includes(team))
      );
      if (isInLeague) {
        opponentTeams.push({ team, city });
      }
    }
  }
  
  for (let i = 0; i < displayCount; i++) {
    const randomOffset = Math.random() * seasonLength;
    const gameDate = new Date(seasonStart.getTime() + randomOffset);
    
    // Pick a random opponent team
    const opponent = opponentTeams[Math.floor(Math.random() * opponentTeams.length)];
    if (!opponent) continue;
    
    const times = GAME_TIMES[league];
    const time = times[Math.floor(Math.random() * times.length)];
    
    games.push({
      homeTeam: opponent.team,
      awayTeam: teamName,
      league: league,
      venue: getVenueForCity(opponent.city, league),
      city: opponent.city,
      date: gameDate,
      time: time,
    });
  }
  
  // Sort by date
  games.sort((a, b) => a.date - b.date);
  
  return games;
}

// Get venue name for a city
function getVenueForCity(city, league) {
  const venues = {
    'San Francisco': { NFL: "Levi's Stadium", MLB: 'Oracle Park', NBA: 'Chase Center', NHL: 'SAP Center' },
    'New York': { NFL: 'MetLife Stadium', MLB: 'Yankee Stadium', NBA: 'Madison Square Garden', NHL: 'Madison Square Garden' },
    'Los Angeles': { NFL: 'SoFi Stadium', MLB: 'Dodger Stadium', NBA: "Crypto.com Arena", NHL: "Crypto.com Arena" },
    'Chicago': { NFL: 'Soldier Field', MLB: 'Wrigley Field', NBA: 'United Center', NHL: 'United Center' },
    'Boston': { NFL: 'Gillette Stadium', MLB: 'Fenway Park', NBA: 'TD Garden', NHL: 'TD Garden' },
    'Dallas': { NFL: 'AT&T Stadium', MLB: 'Globe Life Field', NBA: 'American Airlines Center', NHL: 'American Airlines Center' },
    'Miami': { NFL: 'Hard Rock Stadium', MLB: 'LoanDepot Park', NBA: 'Kaseya Center', NHL: 'Amerant Bank Arena' },
    'Seattle': { NFL: 'Lumen Field', MLB: 'T-Mobile Park', NHL: 'Climate Pledge Arena' },
    'Denver': { NFL: 'Empower Field', MLB: 'Coors Field', NBA: 'Ball Arena', NHL: 'Ball Arena' },
    'Phoenix': { NFL: 'State Farm Stadium', MLB: 'Chase Field', NBA: 'Footprint Center', NHL: 'Mullett Arena' },
    'Philadelphia': { NFL: 'Lincoln Financial Field', MLB: 'Citizens Bank Park', NBA: 'Wells Fargo Center', NHL: 'Wells Fargo Center' },
    'Atlanta': { NFL: 'Mercedes-Benz Stadium', MLB: 'Truist Park', NBA: 'State Farm Arena' },
    'Houston': { NFL: 'NRG Stadium', MLB: 'Minute Maid Park', NBA: 'Toyota Center' },
    'Detroit': { NFL: 'Ford Field', MLB: 'Comerica Park', NBA: 'Little Caesars Arena', NHL: 'Little Caesars Arena' },
    'Minneapolis': { NFL: 'U.S. Bank Stadium', MLB: 'Target Field', NBA: 'Target Center', NHL: 'Xcel Energy Center' },
  };
  
  return venues[city]?.[league] || `${city} Arena`;
}

// Render road game card (slightly different from regular game card)
function renderRoadGameCard(game) {
  return `
    <div class="game-card road-game">
      <div class="game-card-header">
        <span class="league-badge ${game.league.toLowerCase()}">${game.league}</span>
        <span class="game-date">${formatDate(game.date)}</span>
      </div>
      <div class="game-card-body">
        <div class="road-game-city">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="currentColor" stroke-width="1.2"/>
            <path d="M8 14C8 14 13 10 13 6.5C13 3.46243 10.7614 1 8 1C5.23858 1 3 3.46243 3 6.5C3 10 8 14 8 14Z" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          <span class="city-name">${game.city}</span>
        </div>
        <div class="game-matchup">
          <div class="team">
            <div class="team-name">${game.awayTeam}</div>
            <div class="team-location">Your Team</div>
          </div>
          <div class="vs">@</div>
          <div class="team">
            <div class="team-name">${game.homeTeam}</div>
            <div class="team-location">Home</div>
          </div>
        </div>
        <div class="game-meta">
          <div class="game-venue">
            <span>${game.venue}</span>
          </div>
          <div class="game-time">${game.time}</div>
        </div>
      </div>
    </div>
  `;
}

// Toggle search mode
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const mode = this.dataset.mode;
    searchMode = mode;
    
    // Update active button
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Show/hide forms
    document.getElementById('searchForm').classList.toggle('hidden', mode === 'team');
    document.getElementById('teamSearchForm').classList.toggle('hidden', mode === 'city');
    
    // Hide results
    document.getElementById('results').classList.add('hidden');
  });
});

// City to State mapping
const CITY_TO_STATE = {
  'San Francisco': 'CA', 'Oakland': 'CA', 'Los Angeles': 'CA', 'San Diego': 'CA', 'Sacramento': 'CA',
  'New York': 'NY', 'Buffalo': 'NY',
  'Chicago': 'IL',
  'Boston': 'MA',
  'Dallas': 'TX', 'Houston': 'TX', 'San Antonio': 'TX',
  'Miami': 'FL', 'Tampa Bay': 'FL', 'Jacksonville': 'FL', 'Orlando': 'FL',
  'Seattle': 'WA', 'Portland': 'OR',
  'Denver': 'CO',
  'Phoenix': 'AZ',
  'Philadelphia': 'PA', 'Pittsburgh': 'PA',
  'Atlanta': 'GA',
  'Detroit': 'MI',
  'Minneapolis': 'MN',
  'Cleveland': 'OH', 'Cincinnati': 'OH', 'Columbus': 'OH',
  'Indianapolis': 'IN',
  'Kansas City': 'MO', 'St. Louis': 'MO',
  'Baltimore': 'MD', 'Washington': 'DC',
  'Charlotte': 'NC', 'Raleigh': 'NC',
  'Nashville': 'TN', 'Memphis': 'TN',
  'New Orleans': 'LA',
  'Las Vegas': 'NV',
  'Green Bay': 'WI', 'Milwaukee': 'WI',
  'Salt Lake City': 'UT',
  'Oklahoma City': 'OK',
  'Newark': 'NJ',
  'Toronto': 'CANADA', 'Montreal': 'CANADA', 'Vancouver': 'CANADA', 
  'Calgary': 'CANADA', 'Edmonton': 'CANADA', 'Ottawa': 'CANADA', 'Winnipeg': 'CANADA'
};

// State names
const STATE_NAMES = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
  'DC': 'Washington D.C.'
};

// Render the map
function renderMap(games, teamName, homeCity) {
  const mapContainer = document.getElementById('usMap');
  mapContainer.innerHTML = US_MAP_SVG;
  
  // Get home state
  const homeState = CITY_TO_STATE[homeCity];
  
  // Group games by state
  const gamesByState = {};
  games.forEach(game => {
    const state = CITY_TO_STATE[game.city];
    if (state && state !== 'CANADA') {
      if (!gamesByState[state]) {
        gamesByState[state] = [];
      }
      gamesByState[state].push(game);
    }
  });
  
  // Highlight states
  const paths = mapContainer.querySelectorAll('path');
  paths.forEach(path => {
    const stateId = path.id;
    
    if (stateId === homeState) {
      path.classList.add('home');
    } else if (gamesByState[stateId]) {
      path.classList.add('active');
    }
    
    // Add hover events
    path.addEventListener('mouseenter', (e) => showTooltip(e, stateId, gamesByState[stateId], homeState));
    path.addEventListener('mouseleave', hideTooltip);
    path.addEventListener('mousemove', moveTooltip);
  });
  
  // Update team name display
  document.querySelector('.team-name-display').textContent = teamName;
}

// Tooltip functions
function showTooltip(e, stateId, games, homeState) {
  const tooltip = document.getElementById('mapTooltip');
  const stateName = STATE_NAMES[stateId] || stateId;
  
  let content = `<div class="tooltip-state">${stateName}</div>`;
  
  if (stateId === homeState) {
    content += `<div class="tooltip-games"><div class="tooltip-game">Home State</div></div>`;
  } else if (games && games.length > 0) {
    content += '<div class="tooltip-games">';
    games.forEach(game => {
      content += `
        <div class="tooltip-game">
          <span class="tooltip-opponent">@ ${game.homeTeam}</span>
          <span class="tooltip-date">${formatDate(game.date)}</span>
        </div>
      `;
    });
    content += '</div>';
  } else {
    content += `<div class="tooltip-games"><div class="tooltip-game">No games scheduled</div></div>`;
  }
  
  tooltip.innerHTML = content;
  tooltip.classList.remove('hidden');
  moveTooltip(e);
}

function moveTooltip(e) {
  const tooltip = document.getElementById('mapTooltip');
  const container = document.querySelector('.map-container');
  const rect = container.getBoundingClientRect();
  
  let x = e.clientX - rect.left + 15;
  let y = e.clientY - rect.top + 15;
  
  // Keep tooltip in bounds
  if (x + 200 > rect.width) x = e.clientX - rect.left - 200;
  if (y + 150 > rect.height) y = e.clientY - rect.top - 150;
  
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() {
  document.getElementById('mapTooltip').classList.add('hidden');
}

// Handle team search form submission
document.getElementById('teamSearchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const teamValue = document.getElementById('team').value;
  if (!teamValue) {
    alert('Please select a team');
    return;
  }
  
  const [league, teamName] = teamValue.split(':');
  const homeCity = TEAM_CITIES[teamName];
  
  // Generate road games
  const games = generateRoadGames(league, teamName);
  
  // Show map section
  const mapSection = document.getElementById('mapSection');
  mapSection.classList.remove('hidden');
  
  // Render the map
  renderMap(games, teamName, homeCity);
  
  // Show results section
  const resultsSection = document.getElementById('results');
  const resultsGrid = document.getElementById('resultsGrid');
  const noResults = document.getElementById('noResults');
  
  resultsSection.classList.remove('hidden');
  
  // Update header
  document.querySelector('.city-name').textContent = teamName;
  document.querySelector('.date-range').textContent = '2026-27 Road Schedule';
  
  if (games.length > 0) {
    resultsGrid.innerHTML = games.map(renderRoadGameCard).join('');
    resultsGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
  } else {
    resultsGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
  }
  
  // Scroll to map
  mapSection.scrollIntoView({ behavior: 'smooth' });
});
