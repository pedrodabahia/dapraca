const sheetId = '1lZkn7a8BJ7O28_cNAbzl8BPlu23E-NrxTbTkkCeqljg'; // Substitua com a ID da sua planilha
const apiKey = 'AIzaSyCGRsF9JdYLy0q33yI1CSHamlhhqtYhi54'; // Substitua com sua chave da API do Google Cloud
const sheetRange = 'A1'; // O local onde você quer começar a escrever na planilha (ex: A1, A2, etc.)

// Função de inicialização da API do Google
function initApi() {
  gapi.client.init({
    apiKey: apiKey,
    clientId: '408186181691-87cm1t7rget3t48pm2gk4am24p5t6vql.apps.googleusercontent.com', // Substitua com o seu ID de cliente OAuth 2.0
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function () {
    console.log('API inicializada!');
  }).catch(function (error) {
    console.log('Erro ao inicializar a API:', error);
  });
}

// Carregar a biblioteca da API do Google
function loadClient() {
  gapi.load('client:auth2', initApi);
}

// Autentica o usuário
function authenticate() {
  return new Promise((resolve, reject) => {
    gapi.auth2.getAuthInstance().signIn().then(function () {
      console.log('Usuário autenticado!');
      resolve(); // Resolve a promise quando o usuário estiver autenticado
    }).catch(function (error) {
      console.log('Erro ao autenticar o usuário:', error);
      reject(error); // Rejeita a promise em caso de erro
    });
  });
}

// Função para enviar dados para o Google Sheets
async function enviarDados(name, idade, cidade) {
  try {
    // Aguarda a autenticação ser concluída
    await authenticate();

    const values = [
      ['Nome', 'Idade', 'Cidade'], // Cabeçalho (adicione ou remova conforme necessário)
      [name, idade, cidade], // Dados do formulário
    ];

    const resource = {
      values,
    };

    // Chama a API para enviar os dados para a planilha
    const response = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: sheetRange,  // Especifique o intervalo da sua planilha, ex: 'Sheet1!A1'
      valueInputOption: 'RAW',  // RAW ou USER_ENTERED
      resource,
    });

    console.log('Dados enviados com sucesso!', response);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
}

// Lida com o envio do formulário
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const idade = document.getElementById('data').value; // Corrigido para capturar o valor do campo de data
  const cidade = document.getElementById('cidade').value;

  // Chama a função para enviar os dados após a autenticação
  enviarDados(name, idade, cidade);  
});

// Carrega a API do Google quando a página for carregada
window.onload = loadClient;
