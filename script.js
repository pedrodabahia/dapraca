document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var msg = document.querySelector("#msg");
    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado mais de uma vez
        
        var cidadeValor = document.getElementById("cidade")?.value || "";
        localStorage.setItem("cidade", cidadeValor);

        var nome = document.getElementById("nome")?.value || "Sem Nome";
        var idade = document.getElementById("idade")?.value || "Sem Idade";
        var telefone = document.getElementById("telefone")?.value || "Sem Telefone";

        if(cidadeValor != "nulo" && nome != "Sem Nome"  && idade != "Sem Idade" && telefone != "Sem Telefone"){

        var data = {
            data: {
                nome: nome,
                idade: idade,
                cidade: cidadeValor,
                telefone: telefone
            }
        };
        
        msg.style.backgroundColor = "green";
        msg.innerText = "Usuario cadastrado com sucesso! estamos te direcionando para o grupo de ofertas ...";
        msg.style.top = "0vw";
        
        try {
            let response = await fetch("https://script.google.com/macros/s/AKfycbygeHW-hoqD53VLMDPklGF5IwCYVm9Ee0Mm6VPGpCBh1X6XUfGfCY58ksTDyGqhIMWO/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        msg.style.top = "-7vw";



                            switch(data.data.cidade) {
          case "Posto da Mata":
            window.location.href = "https://chat.whatsapp.com/CWsObLw5pEgA25KGnJOkg7";
            localStorage.clear();
            break;
          case "Itabatã":
            window.location.href = "https://chat.whatsapp.com/ISYuaj7DK9X3cPb5LrX7wl";
            localStorage.clear();
            break;
          case "Mucuri":
            window.location.href = "https://chat.whatsapp.com/DCMyS5jV5n82aszyaCGw3C";
            localStorage.clear();
            break;
          case "Prado":
            window.location.href = "https://chat.whatsapp.com/HoQNQks02SYDsFSiWjr6qR";
            localStorage.clear();
            break;
          case "Itamaraju":
            window.location.href = "https://chat.whatsapp.com/IfZwT8awuhy18SrZE8dB2s";
            localStorage.clear();
            break;
        }

            if (response.ok) {
                console.log("Formulário enviado com sucesso!");
                form.reset();
            } else {
                console.log("Erro ao enviar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro de conexão. Tente novamente.");
        }
    }else{
        msg.style.backgroundColor = "red";
        msg.innerText = "Atenção, Preencha todos os campos!";
        msg.style.top = "0vw";
        setTimeout(() => {
        msg.style.top = "-7vw";

        },3000);
        console.log(`${nome} , ${idade}, ${cidadeValor}`)
    }
    });
});
