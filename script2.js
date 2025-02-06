const sheetId = '1lZkn7a8BJ7O28_cNAbzl8BPlu23E-NrxTbTkkCeqljg'; // Substitua com a ID da sua planilha
const apiKey = 'AIzaSyCGRsF9JdYLy0q33yI1CSHamlhhqtYhi54'; // Substitua com sua chave da API do Google Cloud
const sheetRange = 'A1'; // O local onde você quer começar a escrever na planilha (ex: A1, A2, etc.)

// Função para enviar dados para o Google Sheets
async function enviarDados(name, idade, cidade) {
  const values = [
    ['Nome', 'Idade', 'Cidade'], // Cabeçalho (adicione ou remova conforme necessário)
    [name, idade, cidade], // Dados do formulário
  ];

  const resource = {
    values,
  };

  try {
    // Aqui, utilizamos a API do Google Sheets diretamente
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}:append`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.g_access_token}` // Usando o token obtido após a autenticação
      },
      body: JSON.stringify({
        valueInputOption: 'RAW',  // RAW ou USER_ENTERED
        resource: resource
      })
    });
    const data = await response.json();
    console.log('Dados enviados com sucesso!', data);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
}

// Função para autenticar o usuário
function handleCredentialResponse(response) {
  // Aqui, o token é armazenado globalmente
  window.g_access_token = response.credential;

  // Agora, podemos chamar a função para enviar os dados para a planilha
  console.log('Usuário autenticado, token:', response.credential);
}

// Inicializa a autenticação com o Google Identity Services
function initializeGoogleAuth() {
  google.accounts.id.initialize({
    client_id: '408186181691-87cm1t7rget3t48pm2gk4am24p5t6vql.apps.googleusercontent.com', // Seu Client ID
    callback: handleCredentialResponse // Função chamada após o login
  });

  // Exibe o prompt de login
  google.accounts.id.prompt();
}

// Lida com o envio do formulário
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;


  // Verifica se o usuário está autenticado
  if (!window.g_access_token) {
    alert('Você precisa estar autenticado para enviar os dados.');
    return;
  }

  // Chama a função para enviar os dados para o Google Sheets
  enviarDados(name, idade, cidade);
});

// Carrega a autenticação quando a página é carregada
window.onload = initializeGoogleAuth;
