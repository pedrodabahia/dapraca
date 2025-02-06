const script_do_google = 'https://script.google.com/macros/s/AKfycbwQ-MB6g9LDvmYi33-1SyAAkWGY3atPsUUPpgud-6DoYbO2b013Q73phFJTW7QkOUb9/exec';
const dados_do_formulario = document.querySelector('form')
const name = document.querySelector("#name");

dados_do_formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(script_do_google, {
        method: 'POST',
        body: JSON.stringify({ 'nome' : "marcio"})
    }).then(response => {
        alert("deu certo")
    }).catch(error => console.log('deu mangue: ',error));
})
