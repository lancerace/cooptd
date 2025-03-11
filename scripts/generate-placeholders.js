const fs = require('fs');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of demon gods from your data
const demonGods = [
  'oni', 'goblin-biker', 'phantom-slime', 'ice-knight', 
  'ancient-blue-dragon', 'big-hand', 'space-soldier', 'coin-man',
  'master-cat', 'witch-doctor', 'surprise-mouse', 'latest-helicopter-machine',
  'mimic-chest', 'seagulick', 'dark-elf', 'plague-doctor'
];

// Create an HTML file for each placeholder
demonGods.forEach(god => {
  const html = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#8B0000"/>
      <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle">${god.replace(/-/g, ' ')}</text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(imagesDir, `${god}.svg`), html);
  console.log(`Created placeholder for ${god}`);
}); 