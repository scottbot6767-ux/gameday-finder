// US Map - Simplified state rectangles positioned geographically
// This creates a stylized map with clickable state boxes

const STATE_POSITIONS = {
  // Row 1 - Pacific Northwest / Northern Border
  'WA': { x: 5, y: 5, name: 'Washington' },
  'MT': { x: 20, y: 5, name: 'Montana' },
  'ND': { x: 35, y: 5, name: 'North Dakota' },
  'MN': { x: 50, y: 5, name: 'Minnesota' },
  'WI': { x: 60, y: 10, name: 'Wisconsin' },
  'MI': { x: 70, y: 5, name: 'Michigan' },
  'ME': { x: 90, y: 0, name: 'Maine' },
  'VT': { x: 85, y: 5, name: 'Vermont' },
  'NH': { x: 88, y: 8, name: 'New Hampshire' },
  
  // Row 2
  'OR': { x: 5, y: 15, name: 'Oregon' },
  'ID': { x: 15, y: 15, name: 'Idaho' },
  'WY': { x: 25, y: 18, name: 'Wyoming' },
  'SD': { x: 38, y: 15, name: 'South Dakota' },
  'IA': { x: 50, y: 18, name: 'Iowa' },
  'IL': { x: 58, y: 22, name: 'Illinois' },
  'IN': { x: 65, y: 22, name: 'Indiana' },
  'OH': { x: 72, y: 20, name: 'Ohio' },
  'PA': { x: 80, y: 18, name: 'Pennsylvania' },
  'NY': { x: 85, y: 12, name: 'New York' },
  'MA': { x: 92, y: 14, name: 'Massachusetts' },
  'RI': { x: 95, y: 17, name: 'Rhode Island' },
  'CT': { x: 92, y: 19, name: 'Connecticut' },
  
  // Row 3
  'NV': { x: 8, y: 28, name: 'Nevada' },
  'UT': { x: 18, y: 28, name: 'Utah' },
  'CO': { x: 28, y: 30, name: 'Colorado' },
  'NE': { x: 40, y: 25, name: 'Nebraska' },
  'KS': { x: 42, y: 35, name: 'Kansas' },
  'MO': { x: 52, y: 32, name: 'Missouri' },
  'KY': { x: 65, y: 35, name: 'Kentucky' },
  'WV': { x: 75, y: 30, name: 'West Virginia' },
  'VA': { x: 80, y: 32, name: 'Virginia' },
  'MD': { x: 85, y: 28, name: 'Maryland' },
  'DE': { x: 88, y: 26, name: 'Delaware' },
  'NJ': { x: 88, y: 22, name: 'New Jersey' },
  
  // Row 4
  'CA': { x: 2, y: 35, name: 'California' },
  'AZ': { x: 15, y: 42, name: 'Arizona' },
  'NM': { x: 25, y: 45, name: 'New Mexico' },
  'OK': { x: 38, y: 45, name: 'Oklahoma' },
  'AR': { x: 50, y: 45, name: 'Arkansas' },
  'TN': { x: 62, y: 42, name: 'Tennessee' },
  'NC': { x: 78, y: 40, name: 'North Carolina' },
  'SC': { x: 78, y: 48, name: 'South Carolina' },
  'DC': { x: 86, y: 32, name: 'D.C.' },
  
  // Row 5 - Southern
  'TX': { x: 32, y: 55, name: 'Texas' },
  'LA': { x: 52, y: 58, name: 'Louisiana' },
  'MS': { x: 58, y: 52, name: 'Mississippi' },
  'AL': { x: 65, y: 52, name: 'Alabama' },
  'GA': { x: 72, y: 52, name: 'Georgia' },
  'FL': { x: 75, y: 62, name: 'Florida' },
  
  // Insets
  'AK': { x: 5, y: 70, name: 'Alaska' },
  'HI': { x: 22, y: 72, name: 'Hawaii' },
};

// Generate SVG from state positions
function generateMapSVG() {
  const boxWidth = 8;
  const boxHeight = 6;
  const scale = 6;
  
  let rects = '';
  let labels = '';
  
  for (const [stateId, pos] of Object.entries(STATE_POSITIONS)) {
    const x = pos.x * scale;
    const y = pos.y * scale;
    const w = boxWidth * scale;
    const h = boxHeight * scale;
    const rx = 4; // rounded corners
    const cx = x + w/2; // center x for label
    const cy = y + h/2; // center y for label
    
    rects += `<rect id="${stateId}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" data-name="${pos.name}"/>`;
    labels += `<text x="${cx}" y="${cy}">${stateId}</text>`;
  }
  
  return `<svg viewBox="0 0 640 500" xmlns="http://www.w3.org/2000/svg">
    <g class="states">${rects}</g>
    <g class="labels">${labels}</g>
  </svg>`;
}

const US_MAP_SVG = generateMapSVG();
