// https://www.npmjs.com/package/file-system
const fs = require('fs');

var runningDir = process.cwd();
var ourDataFile = runningDir + "/ssRaf.json";
const data = fs.readFileSync(ourDataFile1, 'utf8');
var varProfile = JSON.parse(data);

varProfile.profiles[i].variableName;

// TBA: Update to current "file-system" npm!