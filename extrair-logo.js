// Extrai a logo (PNG em base64) de um arquivo HTML e salva em img/reynventando-tv.png
// Uso (dentro da pasta do site):  node extrair-logo.js caminho/do/arquivo.html
const fs = require("fs");
const arquivo = process.argv[2];
if (!arquivo) { console.log("Uso: node extrair-logo.js caminho/do/arquivo.html"); process.exit(1); }
const m = fs.readFileSync(arquivo, "utf8").match(/data:image\/png;base64,([A-Za-z0-9+\/=]+)/);
if (!m) { console.log("Nenhuma imagem PNG encontrada nesse arquivo."); process.exit(1); }
fs.mkdirSync("img", { recursive: true });
fs.writeFileSync("img/reynventando-tv.png", Buffer.from(m[1], "base64"));
console.log("Logo salva em img/reynventando-tv.png");
