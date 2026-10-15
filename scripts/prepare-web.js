// Copies the offline Excel reader into www/ so the app works without internet.
const fs = require('fs');
fs.copyFileSync('node_modules/xlsx/dist/xlsx.full.min.js', 'www/xlsx.full.min.js');
console.log('xlsx copied to www/');
