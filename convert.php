<?php



// Receber o valor enviado pelo formulário
//$namePedro = $_POST['nameInput'];
//$cidade = $_POST['select'];
//$idade = $_POST['idadeInput'];

// Ler o conteúdo atual do arquivo JSON

$recebe = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$data = $recebe;


$dados = file_get_contents("./bdd.json");

// Verifique se o arquivo foi lido corretamente
if ($dados === false) {
    die("Erro ao ler o arquivo JSON.");
}

// Decodificar o JSON para um objeto PHP
$dados2 = json_decode($dados);

// Verifique se ocorreu erro ao decodificar o JSON
if ($dados2 === null) {
    die("Erro ao decodificar JSON: " . json_last_error_msg());
}

$contagem = count($dados2->clientes);
echo  $contagem;

// Criar o novo cliente
$arquivoAntes = array(
    "id" => $contagem++,
    "nome" => $data['nameInput'],
    "cidade" => $data['select'],
    "idade" => $data['idadeInput']

);

// Verifique se a chave "clientes" existe antes de manipular
if (!isset($dados2->clientes)) {
    $dados2->clientes = []; // Se não existir, cria um array vazio
}

// Adicionar o novo valor à lista de clientes
$dados2->clientes[] = $arquivoAntes; // Adiciona o array diretamente (sem json_encode)

// Codificar novamente os dados para JSON
$dadosAtualizados = json_encode($dados2, JSON_PRETTY_PRINT);

// Gravar o JSON de volta no arquivo
file_put_contents("./bdd.json", $dadosAtualizados);

// Exibir o JSON transformado
//echo json_encode($dados2, JSON_PRETTY_PRINT);


?>
