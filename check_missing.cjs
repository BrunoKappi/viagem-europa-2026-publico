const fs = require('fs');

try {
  const p = fs.readFileSync('src/data/places.ts', 'utf8');
  const pInfo = fs.readFileSync('src/data/placesInfo.ts', 'utf8');

  // Extract all places from places.ts
  const places = [...p.matchAll(/id:\s*["']([^\"']+)["'].+?name:\s*["']([^\"']+)["'],\s*description:\s*["']([^\"']+)["']/g)]
    .map(m => ({ id: m[1], name: m[2], desc: m[3] }));

  // Extract all placeIds from placesInfo.ts
  const infos = [...pInfo.matchAll(/placeId:\s*["']([^\"']+)["']/g)].map(m => m[1]);

  const missing = places.filter(item => !infos.includes(item.id));
  
  fs.writeFileSync('missing.json', JSON.stringify(missing, null, 2));
  console.log("Success: missing.json written.");
} catch(e) {
  console.error("Error:", e);
}
