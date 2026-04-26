const axios = require ('axios');
const cheerio = require ('cheerio');
console.log ("O Projeto TrackGo ! foi iniciado com sucesso !");
async function verificarPreco (produtoUrl, PrecoAlvo)
{const {data} =await axios.get(produtoUrl, {headers: {'user-Agent': 'Mozilla/5.0}});
const $ = cheerio .load(data)
askssjoijaisjasio