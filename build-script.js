const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');
const { minify } = require('terser');

const distPath = path.join(__dirname, 'public');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

const version = packageJson.version;
const source = fs.readFileSync('./src/whatsfloat.js', 'utf-8');
const output = source.replace('%VERSION%', version);

fs.writeFileSync('./public/whatsfloat.js', output);

// Gerar versão minificada
(async () => {
  const minified = await minify(output, { format: { comments: false } });
  fs.writeFileSync('./public/whatsfloat.min.js', minified.code);
})();
