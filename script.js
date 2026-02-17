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

// US Map SVG paths (simplified)
const US_MAP_SVG = `<svg viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg">
  <path id="WA" d="M118.5,42.2l2.5,6.4l3.3,1.8l0.5,2.4l2.8,0.5l1.4,2.1l2.2-0.2l0.4-1.6l2.5,0.4l-0.8,4.6l0.8,3l1.8,2.3l0.7,3.1l1.8,2.5l-0.1,2l1.5,3.2l1.7,0.7l0,3.9l-4.7,0.5l-5.9-0.1l-6.9,0.1l-9.9-0.6l-8.9-0.6l-8.2-0.5l-9.3-1.1l-10-1.3l1.9-8.8l2.5-9.7l-2.9-1.8l0.6-3.4l3.2-0.4l1.4-3.4l3-0.5l1.6-2.9l-0.7-2.7l3.5-0.1l3.9,1.7l3.5,2.1l3.2,0.6l2.5,0.9l2.5-0.2l1.4-1.3l3.2-1.7l0.4-2.7l1.9-0.9l2.7,1.8z"/>
  <path id="OR" d="M118.5,42.2l-2.7-1.8l-1.9,0.9l-0.4,2.7l-3.2,1.7l-1.4,1.3l-2.5,0.2l-2.5-0.9l-3.2-0.6l-3.5-2.1l-3.9-1.7l-3.5,0.1l-0.7-2.3l-2.7-0.9l-0.1-5.3l-3.1-3.3l0.3-3l-1.5-0.4l-0.7-2.5l1.9-3l0.1-3.2l-1.3-1.5l0.6-5l10.9,2.4l10.5,2.1l10.4,1.9l-2.6,10.9l-1.4,9.2l2.6,1.5l2.9,3z"/>
  <path id="CA" d="M118.5,42.2l2.9,3l2.6,1.5l-1.4,9.2l-2.6,10.9l-0.5,2.5l2.9,4.2l1.1,4l3.2,5.7l0.2,0l-0.4,3.7l-1.2,2.9l1.3,3l0.4,4.6l1.3,2.4l-0.3,7.7l-0.8,2l0.7,3.1l2.2,3.2l1.4,3.9l2.9,4.5l0.7,4.4l-0.7,3.2l-1.6,2.7l-0.5,4.7l1.1,2.2l-0.6,2.7l-1.7,2.9l-0.2,3.3l-6.6-1l-5.3-0.7l-6.1-1.3l-6.1-1.3l-3.4,0.5l-4.1-2.7l-3.6-1.2l-2.6-1.5l-0.5-2.5l1.9-2.5l-0.2-2.1l-2.8-3.6l-0.9-3.7l0.6-3l-0.9-2.6l0.3-3.1l-1.5-3.2l-1.2-5l-1.2-3l-3.9-5l-2.3-6.9l-1.9-5.7l-0.1-2.9l1.9-0.2l0.9-3.5l-0.3-2.5l2-3.3l1.3-4.6l-1.3-2.3l-0.9-3.1l1.1-0.3l1.8-3.3l-0.2-2l1.9-3.9l2.2-3.6l-0.4-1.9l1-4l10.9,2.4l10.5,2.1l10.4,1.9z"/>
  <path id="NV" d="M140.8,165.7l-1.7,2.9l0.6,2.7l-1.1,2.2l0.5,4.7l1.6,2.7l0.7,3.2l-0.7,4.4l-2.9,4.5l-1.4,3.9l-2.2,3.2l-0.7,3.1l0.8,2l0.3,7.7l-1.3,2.4l-0.4,4.6l-18.9-3.5l-14-2.7l4.6-25.9l6.5-35l3.5,0.5l6.1,1.3l6.1,1.3l5.3,0.7l6.6,1z"/>
  <path id="ID" d="M172.8,39.4l-0.5,3.1l1.6,3.7l-1.7,2.9l2.4,3.9l0.6,1.7l-0.4,5.1l1.7,2.7l0.9,2l0.1,2.7l0.9,0.6l-0.2,4l-3.2,4.5l-1.9,0.1l-0.7,2.8l0.2,3.4l0.7,0.9l-0.5,2.3l-2.6,0.9l-2.4,3l0.1,1.4l-2.8,3.7l-0.2,2.5l0.9,1.4l-0.9,2.4l-4.4,4.6l-0.5,2.7l2.2,2.9l-8.9-0.5l-10.9-1l-3.4-0.4l1-8.6l4.6-25.9l1.2-7.4l-2.2-3.2l-0.9-1.4l0.9-4.7l-1.5-2.3l0.9-3.3l-0.7-4l1.6-3.3l-0.9-4.1l1.5-1l0.1-0.9l10,1.3l9.3,1.1l8.2,0.5z"/>
  <path id="MT" d="M247.3,35.7l-0.6,7.2l0.5,4l1.2,4.7l-0.5,3.5l0.5,3.3l1.9,3.6l1.1,4.5l-1.2,3.2l0.2,2.1l-10.9-0.6l-13.1-1l-12.5-1l-12.9-1.5l-11.3-1.5l-10.4-1.6l0.5-2.7l4.4-4.6l0.9-2.4l-0.9-1.4l0.2-2.5l2.8-3.7l-0.1-1.4l2.4-3l2.6-0.9l0.5-2.3l-0.7-0.9l-0.2-3.4l0.7-2.8l1.9-0.1l3.2-4.5l0.2-4l-0.9-0.6l-0.1-2.7l-0.9-2l-1.7-2.7l0.4-5.1l-0.6-1.7l-2.4-3.9l1.7-2.9l-1.6-3.7l0.5-3.1l9.3,1.1l10,1.3l10.2,1.1l9.3,0.9l10.9,0.8l10,0.5z"/>
  <path id="WY" d="M247.3,35.7l0.7,8.9l1.3,15.3l1,10.5l0.7,10.4l-12.9-0.6l-14.6-1l-13.7-1.3l-12.2-1.3l-12.4-1.6l1-8.6l4.6-25.9l1.2-7.4l10.9,1l13.1,1l12.5,1l12.9,1.5l11.3,1.5z"/>
  <path id="UT" d="M172.8,156.2l-3.5-0.5l-6.5,35l-18.3-3.4l5.1-27l3.4-19l8.4,1.1l11.4,1.2z"/>
  <path id="CO" d="M252.9,142.7l-0.8,12.9l-1.4,16.6l-14.5-0.8l-16.2-1.3l-13.7-1.3l-13.5-1.6l-12.8-1.8l1.3-7.6l3.6-23.9l8.4,1.1l11.4,1.2l12.4,1.6l12.2,1.3l13.7,1.3l14.6,1l-4.7,1.3z"/>
  <path id="AZ" d="M140.8,165.7l-0.2,3.3l-1.7,2.9l-0.6,2.7l1.1,2.2l-0.5,4.7l-1.6,2.7l-0.7,3.2l0.7,4.4l2.9,4.5l1.4,3.9l2.2,3.2l0.7,3.1l-0.8,2l-0.3,7.7l1.3,2.4l0.4,4.6l1.3,3l-1.2,2.9l0.4,3.7l-12.5-1.6l-10.7-7.7l-6.5-4.5l-8.3-5.7l-7.1-12.1l2.8-0.3l1.9-3.9l1.1-2.9l0.6-4.4l-1.1-1.9l-2.3-0.4l-0.9-1.3l1-1.9l-0.6-1.7l1.4-2.5l-0.1-2.7l-1.3-0.5l0.9-3.5l1.3-1.6l-0.7-1l18.9,3.5l14,2.7l3.5,0.5z"/>
  <path id="NM" d="M192.8,224.5l-1.6,11.7l-3.1,23l-1.6-0.2l-0.7,4.2l-20.5-2.5l-15.9-2l-7.9-1.2l3-22.5l-0.4-3.7l1.2-2.9l-1.3-3l-0.4-4.6l-1.3-2.4l0.3-7.7l0.8-2l-0.7-3.1l-2.2-3.2l-1.4-3.9l-2.9-4.5l-0.7-4.4l1.6-2.7l0.5-4.7l-1.1-2.2l0.6-2.7l1.7-2.9l0.2-3.3l18.3,3.4l13.5,1.6l13.7,1.3l16.2,1.3l-0.8,12.9l-1.4,16.6l-0.8,10.5l-3,0.1z"/>
  <path id="TX" d="M252.9,283.5l4.9,0.3l3.7,0.6l0.7,0.8l3.5-2.3l2.9-0.4l2.3,0.6l3.5,2.9l3.1,0.5l0.2-1.9l2.8-0.5l3.9,0.5l3.7,0.7l5.4,3.5l1.1,0.1l2.9,2l2.2,0.2l1.2,1.9l2.7,2.7l5,1.6l3.5,0.7l4.1,1.7l3.6,3.3l1.9,0.4l1.1,1.7l3.1,0.5l1.7,1.9l-0.3,7.5l0,4.2l0.9,5.2l0.4,4.4l1.2,2.7l-0.9,4.3l-3.2,3.7l1.2,2l-1.5,5.3l-0.9,5.1l0.6,4.2l-0.2,2.5l-2.9,1.9l-4.7,4.5l-0.8,2.8l1.2,3.3l-2.2,0.7l-4.1,1.6l-4.9,2.4l-2.9,0.9l-5.7,3.9l-2,0.6l-0.4,2l-5.3,2.4l-5.1,0.9l-1.9,1.7l-0.7,2.9l-4.2,0.2l-5.2,0.7l-1.9,0.6l-1,1.5l-3.7-1l-3.9-3.3l-1.5-4l-3.1-1.1l0.1-1.9l-5.2-12.4l-1.2-2.6l-0.5-4l-2.9-5.9l0.3-1.9l-1.5-4.9l-2.9-1.4l0.2-2.9l-2.5-3.9l-6.1-2.7l-5.3-1l-1.7-1.6l-2.6,0.9l-4-0.4l-4.9-3.9l-3.7-3l-6.2-6.5l-1.7-0.4l-2.7-2.8l-2-4.3l-2.3-0.3l-0.7-5.9l-3-5.8l0.1-2.9l-3.6-6l-0.8-5.1l-2.8-2.9l1.3-6.9l0.7-4.2l1.6,0.2l3.1-23l1.6-11.7l3-0.1l0.8-10.5l14.5,0.8l28.2,1.7l12.2,0.5z"/>
  <path id="OK" d="M296.9,200.9l-0.7,11.9l0.6,0.6l-0.1,12.2l3.7,0l9.1,0.1l7.7-0.2l0.4,9.5l11.2,0.3l10.7,0l4.9-0.1l0.2,1.7l-1.1,2.1l1.6,2.6l1.2,1.7l1.1,0.7l-0.3,1.2l2.3,1.6l-1,1.6l2.7,1.9l1.9,0.9l0.1,2.9l2.7,0.4l1.7,1.6l2.9-2.9l1.7,1.3l2.1-1.3l0.4,1.9l3.9,0.4l1.9,1l2.7-2.3l2.1,0.7l2.1,1.2l0.7-2.5l3.1,1.2l1.6-1.6l0.2-2.5l2.7,1.4l1.1,2.3l2.5-0.6l1.5-1.9l2.9,0.9l1.8,1.3l3.5-0.8l1.7-2.3l1.3,0.7l-0.7,0.8l3.5-2.3l-4.9-0.3l-12.2-0.5l-28.2-1.7l-1.3,6.9l2.8,2.9l0.8,5.1l3.6,6l-0.1,2.9l3,5.8l0.7,5.9l2.3,0.3l2,4.3l2.7,2.8l1.7,0.4l6.2,6.5l3.7,3l4.9,3.9l4,0.4l2.6-0.9l1.7,1.6l5.3,1l6.1,2.7l-0.9,3.2l-10-0.2l-10.1-0.2l-6.3-0.1l-5.9,0l-3.4,0l-23.9-0.4l-23.6-0.9l-1.5-1.8l-3.2-0.1l-0.9-1.7l-5.3-2.9l-1.9-2.2l0.3-2l-3.5-3.1l-0.7-1.6l-0.9-5.5l-1.9-1.5l-2.5-3.1l-0.9-2.9l-2.7-1.9l-1-3l-3.4-1.5l-3.4-3.2l0.3-2.7l-3.6-0.8l-0.2-2.7l-4.2-0.4l-2.4-2.8l-4.3-1.9l-2.3-4.7l0.1-12.2l-0.6-0.6l0.7-11.9l18.2,0.7l19.4,0.4z"/>
  <path id="KS" d="M296.9,200.9l19.4,0.4l18.2,0.7l17.7,0.2l18.6-0.2l2.1,1.3l-1.7-1.3l-2.9,2.9l-1.7-1.6l-2.7-0.4l-0.1-2.9l-1.9-0.9l-2.7-1.9l1-1.6l-2.3-1.6l0.3-1.2l-1.1-0.7l-1.2-1.7l-1.6-2.6l1.1-2.1l-0.2-1.7l-4.9,0.1l-10.7,0l-11.2-0.3l-0.4-9.5l-7.7,0.2l-9.1-0.1l-3.7,0l-0.2,11.9l-14.4-0.3z"/>
  <path id="NE" d="M296.9,200.9l-0.2-11.9l0.2-11.9l-17.5-0.4l-10.4-0.6l-11.2-0.9l-4.9,0l-1.9,2.9l-2.5,1.6l-0.2-3.4l-2.1-5.1l-1.9-3.5l-1.1-4.6l13.4,0.5l15.7,0.4l16.4,0.2l16,0l2.7,2.6l2.7,1.1l-0.5,2.5l2.1,4.1l3,2.9l3.4,2l-0.2,2.1l1.9,3.3l-0.5,3.5l0,3.7l0.2,8.2l-18.6,0.2l-17.7-0.2z"/>
  <path id="SD" d="M247.3,122l-0.7-10.4l-1-10.5l14,0.3l17.5,0.2l14.7-0.1l15.7-0.5l0.2,2.7l2.1,1.6l2.7,0.5l3,2.1l4.2,0.6l1.7-1.5l4,0.1l1,1.1l0.4,4.9l2.4,1l1.5,0.2l1.2,1.5l0,3l3.5,2.4l-0.1,3.4l-0.6,3.6l-0.8,5.9l-2.9,1.9l-2.2,2.7l0.2,2.5l-0.3,2.3l-16-0.2l-16.4-0.4l-15.7-0.6l-13.4-0.7l1.1,4.6l1.9,3.5l2.1,5.1l0.2,3.4l2.5-1.6l1.9-2.9l4.9,0l-0.2-11.7l-14.6-0.6l-12.9-0.8l-11.9-1z"/>
  <path id="ND" d="M291,101.4l-0.2-2.7l-15.7,0.5l-14.7,0.1l-17.5-0.2l-14-0.3l-1.3-15.3l-0.7-8.9l10.4,1.6l11.3,1.5l12.9,1.5l12.5,1l13.1,1l10.9,0.6l0.5,5.9l-0.4,6.5l0.9,4.5l0.5,4.7z"/>
  <path id="MN" d="M336.8,100.9l-0.4-4.9l-1-1.1l-4-0.1l-1.7,1.5l-4.2-0.6l-3-2.1l-2.7-0.5l-2.1-1.6l-0.2-2.7l-0.5-4.7l-0.9-4.5l0.4-6.5l-0.5-5.9l-0.2-2.1l1.2-3.2l-1.1-4.5l-1.9-3.6l-0.5-3.3l0.5-3.5l-1.2-4.7l-0.5-4l0.6-7.2l10.8,0.2l9.7-0.1l0.3,2.2l3.3,3l0.2,2.7l0.2,3l6.6,0l0.2-2.1l3.5,0l0.1,1.5l5.7,0l0.2,2.5l5.6,3.9l1.3,0.2l1.3,6l4.7,5l0.1,3.9l0.2,2.3l-2.5,3l-3.7,6l-0.9,5.3l-0.7,2.8l-3.1,3.5l-0.3,3.1l1.3,3.7l3.8,2.9l-0.5,2l-4.1,0.6l-3.9,0.5l-2.5,4.3l-0.2,4.7l-0.4,2.3l-2.5,0.2l-1.2-1.5l-1.5-0.2l-2.4-1z"/>
  <path id="IA" d="M336.8,100.9l1,1.1l0.4,4.9l-0.4,2.3l0.2,4.7l2.5,4.3l3.9,0.5l4.1,0.6l0.5,2l-3.8,2.9l-1.3,3.7l0.3,3.1l3.1,3.5l0.7,2.8l0.9,5.3l3.7,6l2.5,3l-0.2,2.3l-0.1,3.9l0.7,1.3l-1.5,3.1l-2.7,0.2l-2.9,1.2l-8-0.1l-9.9-0.1l-9.9,0l-9.2-0.1l-1.3-3l-0.3-3.7l-2.3-2.2l-0.7-2.9l1-3.1l0.7-4l-2.1-3.1l-0.7-3l0.5-2.5l-2.7-1.1l-2.7-2.6l-16,0l0.3-2.3l-0.2-2.5l2.2-2.7l2.9-1.9l0.8-5.9l0.6-3.6l0.1-3.4l-3.5-2.4l0-3l11.2,0.9l10.4,0.6l17.5,0.4z"/>
  <path id="MO" d="M357,165.5l-1.5,3.1l-2.7,0.2l-2.9,1.2l-8-0.1l-9.9-0.1l-9.9,0l-9.2-0.1l-19.4-0.4l-18.2-0.7l14.4,0.3l0-3.7l0.5-3.5l-1.9-3.3l0.2-2.1l-3.4-2l-3-2.9l-2.1-4.1l0.5-2.5l8,0.1l9.9,0.1l9.9,0l9.2,0.1l1.3,3l0.3,3.7l2.3,2.2l0.7,2.9l-1,3.1l-0.7,4l2.1,3.1l0.7,3z"/>
  <path id="WI" d="M337.1,53.5l4.7,5l0.1,3.9l0.2,2.3l-2.5,3l-3.7,6l-0.9,5.3l-0.7,2.8l-3.1,3.5l-0.3,3.1l1.3,3.7l3.8,2.9l-0.5,2l-4.1,0.6l-3.9,0.5l-2.5,4.3l-0.2,4.7l2.5,0.2l-0.7,1.3l1.5,3.1l0.7,1.3l-0.1,3.9l-1.3,3l0.2,3.7l-0.1,0l-8.5-0.1l-1.7-1.7l-2.4-2.7l-0.9-4.2l-2.4-0.1l-1.8-1l-0.2-1l0.6-2.6l-1.4-1.7l0.9-4l1.2-4.7l-0.5-3.9l0.6-2.9l-0.9-1.3l0.1-3.5l1.2-2.5l-0.8-0.9l0.7-4.9l2.5-5.9l1.9-3.6l-0.2-1.3l0.6-0.7l-1.7-4.9l1.2-0.9l5.3,2.7l7.4,2l2.9,0.5l1.7-0.4l5.6,1.9z"/>
  <path id="IL" d="M357,165.5l0.7,1.3l-0.1,3.9l-1.3,3l0.2,3.7l-0.1,0l-0.5,2.5l2.1,3l0.5,3.5l2.5,6l1.6,4.7l-0.8,4.5l-2.6,2.9l-0.4,2.6l0.7,4l2.7,4.1l4.9,3.3l0.1,2.3l-0.8,1.7l0.5,2.9l-0.9,3.2l0.9,1.7l0.5,0.9l-0.9,1l-3.1-1l-2.6-2.4l-0.8-0.1l-3.3,1.7l-3.5-0.8l-2-3.4l-2.7-1.2l-2.7,0.4l-1.5,1.9l-2.9,0.5l-1.9-1.1l-2.3-5.9l-0.4-5.7l-1.9-3.2l0.1-2.2l1.9-2.3l-0.1-4.6l-1.5-2.7l0.7-1l-2.7-5l0.8-1.4l-0.7-2.3l0.5-3l-0.2-4.7l-1.9-3.3l-0.9-3.4l2.9-1.2l2.7-0.2l1.5-3.1z"/>
  <path id="MI" d="M336.5,126.4l2.5,0.2l0.4-2.3l0.2-4.7l2.5-4.3l3.9-0.5l4.1-0.6l0.5-2l0.1,0l0.2-3.7l1.3-3l0.1-3.9l0.7,1.3l1.5,3.1l2.5,0.2l-0.7,1.3l0.1-3.9l-1.5-3.1l-0.7-1.3l-2.5-0.2l0.4-2.3l0.2-4.7l2.5-4.3l3.9-0.5l4.1-0.6l0.5-2l-3.8-2.9l-1.3-3.7l0.3-3.1l3.1-3.5l0.7-2.8l0.9-5.3l3.7-6l2.5-3l-0.2-2.3l-0.1-3.9l2.3-0.2l2.9,1l4.2,0.9l3.7,1.3l2.9,4.2l3.1,2.5l-0.7,2.1l1.5,1.3l2-3l4.7,2l0.2,0.5l-3,2.5l-1.4,0.9l-3,4.7l2.9,0.9l4.1-3.4l2.5-0.9l1.9,2.1l2.8,1.7l-1.2,1.5l-3.3,1.5l-4.1,1.5l-1.5,1.7l-3.2,5.4l-4.9,1.7l-0.9,1l-3.1,0.5l-0.7,3.2l2.8,4l0.9,3.7l-0.4,3.8l0.8,2.7l-0.4,4.7l-1.2,1.9l0.9,1.7l0.1,2.5l-1,2.5l0.1,3.3l-0.9,7.1l-2.9,0.6l-0.9-1.3l-2-0.3l-1.7,1.3l-3,0.2l-0.2,0l-0.3-3l-2.5-4.4l-1.9-1.2l-3.5,0.1l-0.9-0.7l-8.4-1.9l-6-2.1l-5-0.9l0.3-1.4l-3.5-1.3l-5.9-0.3z"/>
  <path id="IN" d="M383.2,166.9l-0.4,3l-2.9,2.7l-0.5,3l-3.4,2.9l-1.5,2.3l-0.6,1.7l1,3.5l3.6,3.5l2.9,1.5l0.3,4.6l-1.1,1.7l0.8,1.1l-0.5,1.5l-0.9,3.2l0.3,2.5l-0.4,1l-2.9,2l-3.6-0.6l-1.2-2.7l-1.4-0.7l-1.7,0.9l-1.9,4.3l-2.3-0.1l-0.9-1l0.9-3.2l-0.5-2.9l0.8-1.7l-0.1-2.3l-4.9-3.3l-2.7-4.1l-0.7-4l0.4-2.6l2.6-2.9l0.8-4.5l-1.6-4.7l-2.5-6l-0.5-3.5l-2.1-3l0.5-2.5l8.5,0.1l0.1,0l9.9,0l0.4,2.5l2.9,1.7l2.3-0.9l3.3,0.2z"/>
  <path id="OH" d="M424.8,138.3l-2.5,2l-2,4.1l-2.4,2.5l-3.5,2.4l-0.7,3.7l-2.4,3.3l0.4,2.3l-3.4,3.5l-1.7,3.5l0.7,2.9l-2.2,0.8l-1.4,3l0.4,1.7l-2.5,1.2l-1.7,3.9l-2.9,1.5l-2.1-3.6l-0.4-3.9l-2.2-3.5l0.4-1l-0.3-2.5l0.9-3.2l0.5-1.5l-0.8-1.1l1.1-1.7l-0.3-4.6l-2.9-1.5l-3.6-3.5l-1-3.5l0.6-1.7l1.5-2.3l3.4-2.9l0.5-3l2.9-2.7l0.4-3l3.7,0.4l10.4,1.1l10.1,0.9l8.9,0.6z"/>
  <path id="KY" d="M400.3,181l-2.1,3.6l2.9-1.5l1.7-3.9l2.5-1.2l-0.4-1.7l1.4-3l2.2-0.8l-0.7-2.9l1.7-3.5l3.4-3.5l-0.4-2.3l2.4-3.3l0.7-3.7l3.5-2.4l2.4-2.5l2-4.1l2.5-2l6.9,0.5l3,3.3l4.8,0.4l1.5-1.7l4.6,0.7l3.9,1.3l0.1,3.3l5.2-0.1l1.5,2.5l5.9,0.1l0.8,4.1l1.9,0.9l-2.9,4.7l-6.3,5.5l-4.1,1.4l-3,2.5l-0.4,2.7l-4.2,1.7l-3.1,1.5l-3.3,3.3l-1.9,3.2l-3.1,0.5l-3.3-1.5l-3.9,2.7l-1.5-0.9l-2.5,3.7l-6.5-0.5l-2.3,1.2l0.5,2.6l-4.1,1.4l-3.7,0l-2-1.1l-2.5,0.9l-3-4.1z"/>
  <path id="TN" d="M418,225.9l-4-0.3l-8.1-0.3l-2.6,0.2l-9.9,0.7l-8.7,0.5l-8.7,0.4l-4.7,0l-0.5-0.9l-0.9-1.7l0.9-3.2l2.9-0.5l1.5-1.9l2.7-0.4l2.7,1.2l2,3.4l3.5,0.8l3.3-1.7l0.8,0.1l2.6,2.4l3.1,1l0.9-1l3,4.1l2.5-0.9l2,1.1l3.7,0l4.1-1.4l-0.5-2.6l2.3-1.2l6.5,0.5l2.5-3.7l1.5,0.9l3.9-2.7l3.3,1.5l3.1-0.5l1.9-3.2l3.3-3.3l3.1-1.5l4.2-1.7l0.4-2.7l3-2.5l4.1-1.4l6.3-5.5l2.9-4.7l2.9,1.7l0.2,2.3l-5.4,3.7l-4.3,2.9l-4.3,3l-4.7,1.1l-1.5,3.5l-4.8,2l-3.4,3.5l-1.2,3l0.9,1.5l-2.5,1.5l-5.7,0.5z"/>
  <path id="NC" d="M518.5,195.3l-0.2,4.5l1.5,3.7l2.2,0.9l0.2,1.5l-2,0.5l0.3,2.2l2.5,1.5l1.2,2l-2.3,4.2l-2.7,0.4l-1.1-0.2l-0.9,1.9l-2.8-0.1l-4.9,2.6l-7,4.9l-3.5,3.7l-1.5,3.4l0.5,1l-0.9,0l-3.4-0.3l-6.9,3.2l-5.4-0.3l-3.5-0.3l-3.7,1l-3,2.6l-1.8-0.5l-1.7,3.7l-5.9-3l-8.6,0.6l-8.3,0.3l-1.9,1.9l-2.5,0.7l-2.7-0.6l-1-2.6l1.9-1.2l-0.5-0.9l-0.9-1.5l1.2-3l3.4-3.5l4.8-2l1.5-3.5l4.7-1.1l4.3-3l4.3-2.9l5.4-3.7l-0.2-2.3l4.7,0l8.7-0.4l8.7-0.5l9.9-0.7l2.6-0.2l8.1,0.3l4,0.3z"/>
  <path id="SC" d="M467.7,258.3l-2.7,2.3l-4.4,5.2l-2.5,4.5l-1.5,4.2l1,0.9l-1,2.5l-3.4,0.4l-0.8,2.3l-1.5-0.2l-1.4,1.3l-3.7-1.6l-3.5-3.5l-3.3-1l-2.6-1.5l-2.1-3.8l-2.5-2.1l-1.9-4.2l-3.6-3.2l2.5-1.5l-0.9-1.5l0.5,0.9l1.9-1.9l8.3-0.3l8.6-0.6l5.9,3l1.7-3.7l1.8,0.5l3-2.6l3.7-1z"/>
  <path id="VA" d="M489.3,170.7l1.4,2l1.5,0.6l0.5,1.9l2.7,0.9l1.7,2.7l1.2,0l1.7,1.5l3.4,0.7l2.5-0.7l2.8,1.2l0.9,1.1l2.4-1.5l0.7,0.6l-1,0.3l0.7,2.3l4.9,2.5l1.7,0.4l2.9,2.2l0.5,2.7l4.3-1l3.9-0.2l0.2-4.5l1.1,0l1,2.7l-2.5,3.3l0.5,0.8l0.9-1.9l1.1,0.2l2.7-0.4l2.3-4.2l-1.2-2l-2.5-1.5l-0.3-2.2l2-0.5l-0.2-1.5l-2.2-0.9l-1.5-3.7l2.2,0.4l2.2,0.9l2.7,2.9l1.6,2.1l0.3,0l1.1-0.7l1.3,1.1l-1,1.6l-0.7,3.4l-1.7,1l0.6,4.9l-2.9,3.4l-1.9,0.1l-0.3-1.2l-1.5,1.7l0.7,0.4l-1.7,2.1l-2.9,0.6l-1.5,2.9l-1.6,0.7l-1.1,2.2l-3.1-1.7l-7,4.9l-4.9,2.6l2.8,0.1l-3,1.1l0.8,2.3l-4.9-2l-3.7,1l3.5,0.3l5.4,0.3l-4,2.3l-2,3.7l0.3,1.9l-5.9-0.3l-3.3-0.2l-5.1-3.1l-1.4-2.9l0.8-3.6l0.3-2.8l-3.7,0.4l-1.9-1l-2.1-1.3l-1.5-4l-4.9-2.9l0.9-3.4l5.7-0.5l2.5-1.5l0.9,1.5l-0.5-0.9l1-2.6l2.7,0.6l2.5-0.7l1.9-1.9l-0.7-2.3l2.7-4.7l0.4-4l-0.7-1.9l1.9-3.9z"/>
  <path id="WV" d="M457.6,157l1.3,1.3l-0.4,2.7l3.3,2.5l2,0.5l1.2-1.7l1.9,1.2l3.1,0.2l2.2,0.2l1.9-2.2l1.7-2.5l2-0.5l1.9,1.6l2.9,2.3l0.4,2.5l-1,3.2l1.7,1.6l-0.4,3.3l-1.6,2.9l-1.9,3.9l0.7,1.9l-0.4,4l-2.7,4.7l0.7,2.3l-5.2,0.1l-0.1-3.3l-3.9-1.3l-4.6-0.7l-1.5,1.7l-4.8-0.4l-3-3.3l-6.9-0.5l-0.9,0.6l2.2-3.5l0.4,3.9l2.1,3.6l-0.4,3.3l-1.2,0.9l-0.7-1l-2.3-0.6l-0.7-1.7l-1.3-1.3l0.4-2l1.7-1.2l1.5-3l-2.2-1.9l1.2-2.3l-1.5-0.9l-0.3-4.4l1.5-4.6l2.5-4.1l2-2.1l-0.5-2.3l-1.2-0.6l0.7-2.3l1.5-2.9z"/>
  <path id="MD" d="M502.9,158.2l0.2,0l-0.1,0l-0.1,0l0.1,0l0.6,0.6l3.3,0.2l3.5,0.7l6.5,1.1l4.7,0.5l3.5,0l1.3,0.6l-0.9,2.5l2.7,0.7l2.7,0l0.7,2.5l-1.2,2.1l-0.4-0.2l-2.7-2.9l-2.2-0.9l-2.2-0.4l-1-2.7l-1.1,0l-0.5-0.8l2.5-3.3l-3.9,0.2l-4.3,1l-0.5-2.7l-2.9-2.2l-1.7-0.4l-4.9-2.5l-0.7-2.3l1-0.3l-0.7-0.6l-2.4,1.5l-0.9-1.1l-2.8-1.2l-2.5,0.7l-3.4-0.7l-1.7-1.5l-1.2,0l-1.7-2.7l-2.7-0.9l-0.5-1.9l-1.5-0.6l-1.4-2l1.5-0.6l1.2-1.4l2.1,1.2l1.9-0.5l3.1,0.5l1.9-2.3l1.7,1.5l0.7-1.1l4.3-0.2l-0.7,2.3l1.2,0.6l0.5,2.3l-2,2.1l-2.5,4.1l-1.5,4.6l0.3,4.4l1.5,0.9l-1.2,2.3l2.2,1.9l-1.5,3l-1.7,1.2l-0.4,2l1.3,1.3l0.7,1.7l2.3,0.6z"/>
  <path id="DE" d="M503.1,158.1l1.6-2.9l0.4-3.3l-1.7-1.6l1-3.2l-0.4-2.5l2.6,0.3l1.9,2.3l-0.9,5.1l1.5,6.3l1.3,4.7l-1.3-0.6l-3.5,0l-2.5-4.5z"/>
  <path id="NJ" d="M508.4,136l0.9,1.3l-1.5,1.5l-0.5,2.1l0.9,2.9l2.9,2.1l2.9,0.3l1.9,2.5l1,4l-0.9,3.3l-0.4,1.3l-0.7-2.5l-2.7,0l-2.7-0.7l0.9-2.5l-3.5-0.7l-3.3-0.2l-0.6-0.6l0.1,0l0.1,0l-0.2,0l0.1,0l-2.6-0.3l0.4-2.5l-2.9-2.3l-1.9-1.6l-2-0.5l0.5-0.7l2.1,0.4l1.2-1l0.5-2.7l2.2-1.2l2.7-0.2l2.5,2l1.5-3.5z"/>
  <path id="NY" d="M488.7,101.8l1.5,0.6l3.1,1l3.1,0.8l6.1,1.2l5.6,0.9l3,0.2l2.5-1.7l2.2-1l3.7-1.3l0.6,0l0.2,1.1l-1.7,1.2l-3.4,1.7l-3.5,1.4l-3.5,2.9l-1.9,2.3l-0.4,1.5l2.2,0.9l0.7-0.6l2.9-2.9l1.1,0.7l-3.6,3.5l-2.4,3.3l-2.7,4.8l-1.4,3.7l-0.5,3l0.2,1.9l1.5,1.8l1.5,0.4l2.7-0.9l1.1,1l0.2,0l0.2-0.9l1-0.3l1.9,0.5l0.4,3.2l-0.9,1.3l2.9,1.2l0.4,0.2l-1.5,3.5l-2.5-2l-2.7,0.2l-2.2,1.2l-0.5,2.7l-1.2,1l-2.1-0.4l-0.5,0.7l-3.1-0.5l-1.9,0.5l-2.1-1.2l-1.2,1.4l-1.5,0.6l-1.3-1.3l0.4-2.7l-0.9-0.6l-10.1-0.9l-10.4-1.1l-3.7-0.4l-3.3-0.2l0.3-0.2l0.1-1.9l-2.5-1.8l-0.8-2.9l-1.8-1.9l-0.9-1.9l1.2-1.1l-0.6-0.9l1.8-2.2l0.9-2.5l2-2.1l1.8-1.4l1.3-1l3.5-0.9l3.3,0.2l1.5-0.9l1.3-2.4l2.2-1.5l3.2-1.6l2.5-2.1l0.9-3.1l0.5-3.9z"/>
  <path id="PA" d="M502.9,158.2l-2.6-0.3l-2.6,0.3l0.4-2.5l-2.9-2.3l-1.9-1.6l-2-0.5l0.5-0.7l-0.4,2.7l-1.3,1.3l-1.3-1.3l-10.1-0.9l-10.4-1.1l-3.7-0.4l-3.3-0.2l0.3-0.2l0.1-1.9l-2.5-1.8l-0.8-2.9l-1.8-1.9l-0.9-1.9l1.2-1.1l-0.6-0.9l1.8-2.2l0.9-2.5l2-2.1l10.1,0.9l10.4,1.1l3.7,0.4l10.1,0.9l10.4,1.1l3.7,0.4l-0.5,3.9l-0.9,3.1l-2.5,2.1l-3.2,1.6l-2.2,1.5l-1.3,2.4l-1.5,0.9l-3.3-0.2l-3.5,0.9l-1.3,1l-1.8,1.4z"/>
  <path id="CT" d="M513.6,120l-0.4-0.2l-2.9-1.2l0.9-1.3l-0.4-3.2l-1.9-0.5l-1,0.3l-0.2,0.9l-0.2,0l-1.1-1l-2.7,0.9l-1.5-0.4l-1.5-1.8l-0.2-1.9l0.5-3l3.3,0.7l6.5,1.3l4.5,0.7l-0.5,2.9l-1.3,2.3l0.5,2l0.2,3.2z"/>
  <path id="RI" d="M520.8,108.5l3.7,1l-0.4,2.3l-1.4,2.7l-1.5-0.4l-0.9-2.3l-0.8-1.9l1.3-1.4z"/>
  <path id="MA" d="M524.5,109.5l-3.7-1l-1.3,1.4l-4.5-0.7l-6.5-1.3l-3.3-0.7l1.4-3.7l2.7-4.8l2.4-3.3l3.6-3.5l-1.1-0.7l-2.9,2.9l-0.7,0.6l-2.2-0.9l0.4-1.5l1.9-2.3l3.5-2.9l3.5-1.4l3.4-1.7l1.7-1.2l-0.2-1.1l2.2,0.5l3.6,2.3l2.4-0.2l0.7,2.9l-2.7,1l-3.1,1.5l-0.3,1.1l1.7,1.3l-0.5,1.5l0.9,3l2.7,0.2l1.7,1.7l1.7-0.6l1.9,0.8l-0.2,2.3l-2.6,1.1l-1,0l-1.5-1.7l-1.9,0.2l-1.3,1.5l0.2,1.5l-0.3,0.9l-3.9,0.9l-2.2-1.4l-0.2,2.9l1.5,1.5z"/>
  <path id="VT" d="M500.5,83.1l-0.2-1.1l-0.6,0l-2.5,1.7l-3-0.2l-5.6-0.9l-6.1-1.2l1.2-5l0.6-3.6l-0.9-2.7l2.5-0.3l0.1-2.7l-1.8-2.4l-0.5-3.8l0.2-2.9l-1.5-3l10.6,2.6l-0.1,2.9l0.9,2.4l-0.5,4.6l0.7,0.7l0.3,3.9l0.4,3.7l1.2,2.9l-0.4,1.2l1.5,2.2z"/>
  <path id="NH" d="M500.5,83.1l-1.5-2.2l0.4-1.2l-1.2-2.9l-0.4-3.7l-0.3-3.9l-0.7-0.7l0.5-4.6l-0.9-2.4l0.1-2.9l2,0l0.5-2.9l-0.9-1.5l0.5-1.2l0.2-3.8l0.5-3.3l0.5,0.2l0.9,1.5l0.2,2.5l1.3,1.2l0.5,1.8l2.3,1.1l0.4,1.3l-0.2,2.8l0.9,0.4l0.2,1.8l-0.4,4.1l0.2,2.2l-0.9,3.9l0.4,1.8l-0.4,2.2l1.9,0.6l0.1,1.4l-2.4,0.2l-3.6-2.3l-2.2-0.5l2.2,1l3.4,1.7l-0.3,0.9z"/>
  <path id="ME" d="M527.7,46.9l1.5,1.4l2.2,3.9l-0.6,3.3l-2.5,3.4l-2.2,0.6l-0.4-1.8l-1.6-0.7l-0.5,1.1l-1.5-3.3l1.8-2.2l0.7-2.4l-0.6-2.9l-2-3.7l-0.7,0.2l-0.6,1.8l-1.7,0.4l-1.9-2.4l0.5-0.7l-1.9-3.5l0.1-0.5l-0.4-1.3l-2.3-1.1l-0.5-1.8l-1.3-1.2l-0.2-2.5l-0.9-1.5l-0.5-0.2l-0.5-3.1l3.5-2.7l2.5-0.9l1.9,1l3.1,0.2l3.4-3.3l1.9-2.9l0.7-0.3l0.4,1.7l-1.6,2.1l0.1,1.1l1.9-0.5l0.6,1.9l-0.5,2l1.5,0.5l-0.9-2.1l0.4-2.5l0.6-1.4l0.9,0.5l1.1,3.9l1.9,5.1l1,1.7l1.7,3l-0.1,2l-0.4,0.7l1.5,2.5l-1.6,1.6l-2.3,0.5l-0.4,2z"/>
  <path id="GA" d="M418,225.9l5.7-0.5l2.5-1.5l1,2.6l2.7,0.6l2.5-0.7l1.9-1.9l-0.3-1.9l2-3.7l4-2.3l-3.5-0.3l4.9,2l-0.8-2.3l3-1.1l-2.8-0.1l0.9-1.9l-3,2.6l-3.7,1l-3.5-0.3l-5.4-0.3l6.9-3.2l3.4,0.3l0.9,0l-0.5-1l1.5-3.4l3.5-3.7l7-4.9l3.1,1.7l1.1-2.2l1.6-0.7l1.5-2.9l2.9-0.6l1.7-2.1l-0.7-0.4l1.5-1.7l0.3,1.2l1.9-0.1l2.9-3.4l-0.6-4.9l1.7-1l0.7-3.4l1-1.6l-1.3-1.1l2.4,0.3l4.3,3.7l2,4l0.5,2.5l2.5,3.4l-0.5,5.8l-1.1,3.3l0.6,1l0.7,5.5l2.8,5l0.3,2.1l-1,3.3l0.7,3.6l1.3,1.7l-1.7,5.9l2.1,2.6l-0.3,1.5l-1.9,2.5l0.3,2.7l-1.2,1.2l-3,4.5l-2.7,2.5l0.3,1.9l-3,0.9l-1.5,1.3l-0.1,2.7l-2.3,2.3l-1.7,1l0.5,0.8l-1.9,3.7l-0.8,0l-8.3-0.9l-6.5-0.6l-0.2,2.9l-3,3.3l-1.2,2.1l0.2,1.5l-2.7,0.9l-2.7-0.5l-2.4-0.9l0.5-2.5l-1.2-2l-0.7-3l0.7-1.5l-0.2-4l-2.9-4.2l-1.5-1.5l-3-1.6l0.5-1.7l-4.2-0.3l0.5-3.1l-0.8-0.6l-0.5-2.2l-2.3-2.3l-2.5-0.2l-0.5-1.5l-2.3-1.9l-0.3-2.3l-2.9-4l0.1-2z"/>
  <path id="AL" d="M418,225.9l0.1,2l2.9,4l0.3,2.3l2.3,1.9l0.5,1.5l2.5,0.2l2.3,2.3l0.5,2.2l0.8,0.6l-0.5,3.1l4.2,0.3l-0.5,1.7l3,1.6l1.5,1.5l2.9,4.2l0.2,4l-0.7,1.5l0.7,3l1.2,2l-0.5,2.5l-0.5,5.2l0.5,4.3l-0.7,1.2l0.2,2.5l-20.1,2.9l-7-0.3l-1,6.8l-0.8,4.7l2.2,4.5l0.7,2.4l3.1,3.2l-0.5,1.9l-5.3-0.2l-5.3-0.4l-5.6-0.4l0.5-3.5l-1.6-2.1l-0.2-2.8l1-4.5l2.3-4.9l0.4-4.9l-0.4-2.7l0.7-4.7l-0.7-2.3l1.2-4.2l-1.5-4.9l-0.2-3.2l1.3-2.3l-0.5-3.3l0.5-1.2l-0.7-3.9l1-5.9l1.7-4.5l-0.7-1.7l0.6-2.2l4.7,0l8.7-0.4l8.7-0.5z"/>
  <path id="FL" d="M418.7,313.4l7,0.3l20.1-2.9l-0.2-2.5l0.7-1.2l-0.5-4.3l0.5-5.2l2.4,0.9l2.7,0.5l2.7-0.9l-0.2-1.5l1.2-2.1l3-3.3l0.2-2.9l6.5,0.6l8.3,0.9l0.8,0l-0.2,2.3l4.2,1.1l4.5,1.7l2.3,1.7l2.5,3l1.4,3.2l3.4,4.6l3.1,5.3l4.5,5l0.4,2.5l-0.4,2.7l1.5,4.2l1.7,3l3.1,3.8l0.4,1.8l-0.5,2.5l1.1,3.5l1.1,1.2l-0.2,4l-1.6,1l0,2.1l1.2,2.3l0.2,3.4l0.2,2.4l-1.2,4.2l-0.5,4l1,1.5l-1.2,1.2l-0.2,3.9l0.7,2.7l-0.5,2l-0.5,2.5l0.7,2.1l-1.8,2.5l-1.8-0.7l-1.2,0.9l-1.7,3.6l-3.5,1.7l-1.9-0.8l-1.7-1.3l-0.2-2.5l-1.3-0.2l-3.2,1.6l-4.5,0.5l-1.4-0.4l-2.6-2.3l-3.6-0.6l-2.9-1.6l-2.3-0.2l-1.5,0.3l-3.2-2.1l-3-0.4l-1.7-1.4l-2.8-3.2l-0.2-1.7l-1.1-0.7l0.2-1.6l-1.7-2.5l-2.3-1.7l-1-3l-1.9-2.7l0.2-1.1l-2.3-2.7l-3.2-1.1l-1.5-2.5l-2.7-1.5l-0.8-1.7l-2.4-1.5l-2.1-0.2l-0.1-1.7l-4.7-3l-3.5-0.6l-1.6-1.3l-2.5-0.5l-0.8-1l-2.8-1.2l-2.8,0.2l-2.9-2.1l-0.1-1.9l-3.3-3.9l-3.8-3.1l-2.4-3.1l-0.6-3.2l-3.1-3.2l-0.7-2.4l-2.2-4.5l0.8-4.7l1-6.8z"/>
  <path id="MS" d="M380.1,301l-0.7,3.9l-0.5,1.2l0.5,3.3l-1.3,2.3l0.2,3.2l1.5,4.9l-1.2,4.2l0.7,2.3l-0.7,4.7l0.4,2.7l-0.4,4.9l-2.3,4.9l-1,4.5l0.2,2.8l1.6,2.1l-0.5,3.5l-10.2,0.5l-8.8,0.3l-2.6,3.5l-0.5,2.6l1.7,1.7l-0.4,2.2l-8.9,0.3l-0.9-2.5l-2.7-3l1.1-2.5l-0.7-2.9l1.1-2.3l-0.9-2.8l1.3-4.2l-0.4-4l1.9-3.7l-0.2-1.3l0.5-3.7l2.4-2.7l0.6-2.7l2.1-3.4l0.3-4.9l1.5-3.7l-1-3.2l1.9-4.9l1.9-2.2l-0.3-2.2l-1.7-0.8l0.4-3l-0.7-2.4l1-3.5l-0.7-4.9l1.6-4.2l-1.4-2.6l0.2-0.2l9.9-0.7l2.6-0.2l8.1,0.3l4,0.3z"/>
  <path id="LA" d="M349.1,359.9l0.9,2.5l8.9-0.3l0.4-2.2l-1.7-1.7l0.5-2.6l2.6-3.5l8.8-0.3l10.2-0.5l5.6,0.4l5.3,0.4l5.3,0.2l0.5-1.9l0,3.7l-2.2,1.5l0.2,1.7l1.2,1l-0.9,2l-0.6,4.1l2.5,2.4l-0.4,1.6l0.6,1.2l-0.5,1.2l-0.4,4.3l-1,2.1l2.3,2.6l0.4,0l-1.4,1.9l0.4,2.3l1.6,2l3.2,0.4l1.2,2l3.1,1.2l1.5-0.9l1.9-0.1l1.4,1.3l2.7-0.3l2.6,1.9l1.2-0.4l0.9-1.6l1.6,0.9l-0.2,1.5l1.6,0.2l1.1-2.3l-0.2-1.5l-1.3-0.4l0.4-1.7l-0.4-2.5l1.7-0.5l3.1,1.7l-0.9,2.3l1.7,1.6l2.5-0.1l1.9,1.3l0.6,2.9l2.6,0.7l0.2-0.8l1.5,0.9l-1.1,1.9l-3.5,0.1l-2.7,1.2l-3.6-0.9l-1.3,0.4l0.1,1.5l-1.9,0.2l-2.4-1.8l-2.7,1.5l-1.6-0.9l-2.7,0.5l-4-1.9l-3.7-0.6l-2.4-1.4l-0.9,0.2l-2,1.7l-2.5-1.1l-2.8,1.1l-2.7-0.9l-1.6,0.3l-2.7,2l-2.5-0.3l-0.4-2.9l-2.5-2l0.8-2.9l-0.4-2.4l-2.4-0.9l-0.8-4.5l-2.5-2l-6.9,2l-1.6,2.5l-2.9,1l-0.2,2.2l-2.7,0.7l-2.8-0.8l1.6-3.9l0.8-3l2.7-3l-1-1.4l0.2-1.2l-1.7-2.7l-2.7-1.9l1.3-4.2l0.9,2.8l-1.1,2.3l0.7,2.9l-1.1,2.5l2.7,3l0.9,2.5z"/>
  <path id="AR" d="M352.6,254.5l-1.4-2.6l0.2-0.2l-0.9-1.7l0.9-3.2l2.9-0.5l1.5-1.9l2.7-0.4l2.7,1.2l2,3.4l3.5,0.8l3.3-1.7l0.8,0.1l2.6,2.4l3.1,1l-0.5,0.9l0.9,1.7l0.5,0.9l-1.9,1.2l1,2.6l-1,5.9l0.7,3.9l-0.5,1.2l0.5,3.3l-1.3,2.3l0.2,3.2l1.5,4.9l-1.2,4.2l0.7,2.3l-0.7,4.7l0.4,2.7l-0.4,4.9l-2.3,4.9l-1,4.5l-1.6,4.2l0.7,4.9l-1,3.5l0.7,2.4l-0.4,3l1.7,0.8l0.3,2.2l-1.9,2.2l-1.9,4.9l1,3.2l-1.5,3.7l-0.3,4.9l-22.9,0.3l-0.9-2.5l-23.9-0.4l-23.6-0.9l0.9-3.2l6.1,2.7l2.5,3.9l-0.2,2.9l2.9,1.4l1.5,4.9l-0.3,1.9l2.9,5.9l0.5,4l1.2,2.6l5.2,12.4l-0.1,1.9l3.1,1.1l1.5,4l3.9,3.3l3.7,1l1-1.5z"/>
</svg>`;

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
