document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado mais de uma vez

        var cidadeValor = document.getElementById("cidade")?.value || "";

        if (cidadeValor === "Itabatã") {
            cidadeValor = "Itabata";
        }

        localStorage.setItem("cidade", cidadeValor);

        var nome = document.getElementById("nome")?.value || "Sem Nome";
        var idade = document.getElementById("idade")?.value || "Sem Idade";

        var data = {
            data: {
                nome: nome,
                idade: idade,
                cidade: cidadeValor
            }
        };

        try {
            let response = await fetch("https://script.google.com/macros/s/AKfycbwKJqK9W1OTL-7yA0QCnjHK0EI4-AO745BNTfR1o_y_PHnERB5VBnALtL24DgFOl9cF/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            let result = await response.text();
            console.log("Resposta do servidor:", result);

            if (response.ok) {
                alert("Formulário enviado com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro de conexão. Tente novamente.");
        }
    });
});
