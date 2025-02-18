const btn = document.querySelector('#btnForm');
const cidade = document.querySelector('select');
const formulario = document.querySelector('form');
const politic = document.querySelector('#politicaPrivac a'); // Corrigido
const frame = document.querySelector('.framePolitica');
const fechar = document.querySelector(".feixar");


    var form = document.querySelector('form[data-netlify="true"]');

    // Lida com o evento de submit
    form.addEventListener('submit', function (event) {
        const cidadeValor = document.getElementById('cidade')?.value || ''; // Captura o valor da cidade

        localStorage.setItem('cidade', cidadeValor);
    });

        var timing;
        const elementos = [];
        const opacidade = [];

        elementos[0] = document.querySelector("#PostoDaMata");
        elementos[1] = document.querySelector("#Itabata");
        elementos[2] = document.querySelector("#Mucuri");
        elementos[3] = document.querySelector("#Prado");
        elementos[4] = document.querySelector("#Itamaraju");

        opacidade[0] = document.querySelector("#opacPdm");
        opacidade[1] = document.querySelector("#opacMuc");
        opacidade[2] = document.querySelector("#opacItab");
        opacidade[3] = document.querySelector("#opacPrad");
        opacidade[4] = document.querySelector("#opacIta");

        function sslider() {
            var largura = window.innerWidth;
            var altura = window.innerHeight;
            const contentSlide = document.querySelector(".slidecontent");

            if (contentSlide) {
                contentSlide.style.top = "1vw";
                contentSlide.style.left = "15vw";
            }

            clearInterval(timing);

            if (largura < altura) {
                for (let s = 0; s <= 4; s++) {
                    if (elementos[s] && opacidade[s]) {
                        elementos[s].style.width = "14vw";
                        elementos[s].style.height = "23vw";
                        elementos[s].style.marginTop = "-1.5vw";
                        opacidade[s].style.width = "14vw";
                        opacidade[s].style.height = "23vw";
                        opacidade[s].style.marginTop = "0vw";
                    }
                }

                if (contentSlide) {
                    contentSlide.style.top = "-20vw";
                    contentSlide.style.left = "0";
                }

                let i = 0;
                timing = setInterval(() => {
                    if (elementos[i] && opacidade[i]) {
                        elementos[i].style.width = "17vw";
                        elementos[i].style.height = "23vw";
                        elementos[i].style.marginTop = "-1vw";
                        opacidade[i].style.width = "14vw";
                        opacidade[i].style.height = "23vw";
                        opacidade[i].style.marginTop = "0vw";
                    }

                    i = (i + 1) % 5; // Reinicia o loop automaticamente

                    if (elementos[i] && opacidade[i]) {
                        elementos[i].style.width = "26vw";
                        elementos[i].style.height = "31vw";
                        elementos[i].style.marginTop = "-5vw";
                        opacidade[i].style.width = "26vw";
                        opacidade[i].style.height = "31vw";
                        opacidade[i].style.marginTop = "-5vw";
                    }
                }, 3000);
            } else {
                for (let s = 0; s <= 4; s++) {
                    if (elementos[s] && opacidade[s]) {
                        elementos[s].style.width = "14vw";
                        elementos[s].style.height = "16vw";
                        elementos[s].style.marginTop = "-2vw";
                        opacidade[s].style.width = "14vw";
                        opacidade[s].style.height = "16vw";
                    }
                }
            }
        }



        alert("Formulário enviado com sucesso!");
   

    // Manipulação do clique na política de privacidade
    if (politic) {
        politic.addEventListener('click', () => {
            if (frame && window.getComputedStyle(frame).display === "none") {
                frame.style.display = "block";
            }

            if (fechar) {
                fechar.removeEventListener('click', fecharFrame);
                fechar.addEventListener('click', fecharFrame);
            }
        });
    }

    function fecharFrame() {
        if (frame) {
            frame.style.display = "none";
        }
    }

    // Evento de clique no botão

    // Iniciar slider ao carregar a página
    if (document.querySelector(".slidecontent")) {
        sslider();
        window.addEventListener("resize", sslider);
    } else {
        console.warn("Elementos do slider não encontrados!");
    }

