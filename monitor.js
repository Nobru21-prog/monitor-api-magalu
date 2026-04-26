const axios = require('axios');
const cheerio = require('cheerio');

console.log("O Projeto TrackGo ! foi iniciado com sucesso !");

async function verificarPreco(produtoUrl) {
  try {
    // Fazendo a requisição com um User-Agent real para evitar bloqueios
    const { data } = await axios.get(produtoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    // Carregando o HTML para o Cheerio
    const $ = cheerio.load(data);

    // Buscando o valor pelo atributo data-testid
    const precoTexto = $('[data-testid="price-value"]').text();

    if (precoTexto) {
      console.log("Preço encontrado: " + precoTexto.trim());
    } else {
      console.log("Preço não encontrado. O site pode ter mudado o layout.");
    }

  } catch (error) {
    console.error("Erro na busca: " + error.message);
  }
}

// URL de teste (certifique-se de que o link está ativo)
const urlTeste = "https://www.magazineluiza.com.br/smartphone-samsung-galaxy-a05-128gb-preto-4gb-ram-67-cam-dupla-selfie-8mp/p/237684100/te/ga05/";

verificarPreco(urlTeste);