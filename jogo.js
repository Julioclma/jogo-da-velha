documentBody = document.querySelector("body")
vezJogador = document.querySelectorAll(".vez-jogador .jogador")[0];

final = document.querySelectorAll(".vez-jogador H2")[0];
vezJogador.innerHTML = "X";

posicoes = document.querySelectorAll(".positions");



(function () {

        documentBody.addEventListener("click", function (e) {

                (function () {




                        if (posicoes[0].textContent === "X" && posicoes[1].textContent === "X" && posicoes[2].textContent === "X") {

                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);;text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[1].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'

                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";


                        } else if (posicoes[0].textContent === "O" && posicoes[1].textContent === "O" && posicoes[2].textContent === "O") {
                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[1].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'

                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[3].textContent === "O" && posicoes[4].textContent === "O" && posicoes[5].textContent === "O") {

                                posicoes[3].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[5].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[3].textContent === "X" && posicoes[4].textContent === "X" && posicoes[5].textContent === "X") {
                                posicoes[3].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[5].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'

                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[6].textContent === "X" && posicoes[7].textContent === "X" && posicoes[8].textContent === "X") {

                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[7].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[6].textContent === "O" && posicoes[7].textContent === "O" && posicoes[8].textContent === "O") {

                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[7].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[0].textContent === "O" && posicoes[4].textContent === "O" && posicoes[8].textContent === "O") {
                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'

                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[0].textContent === "X" && posicoes[4].textContent === "X" && posicoes[8].textContent === "X") {

                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[2].textContent === "X" && posicoes[4].textContent === "X" && posicoes[6].textContent === "X") {
                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'

                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[2].textContent === "O" && posicoes[4].textContent === "O" && posicoes[6].textContent === "O") {

                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[0].textContent === "O" && posicoes[3].textContent === "O" && posicoes[6].textContent === "O") {

                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[3].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[0].textContent === "X" && posicoes[3].textContent === "X" && posicoes[6].textContent === "X") {

                                posicoes[0].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[3].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[6].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[1].textContent === "X" && posicoes[4].textContent === "X" && posicoes[7].textContent === "X") {

                                posicoes[1].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[7].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[1].textContent === "O" && posicoes[4].textContent === "O" && posicoes[7].textContent === "O") {

                                posicoes[1].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[4].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[7].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[2].textContent === "O" && posicoes[5].textContent === "O" && posicoes[8].textContent === "O") {

                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[5].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">O</h2>'
                                final.innerHTML = "O VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (posicoes[2].textContent === "X" && posicoes[5].textContent === "X" && posicoes[8].textContent === "X") {

                                posicoes[2].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[5].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                posicoes[8].innerHTML = '<h2 style="color:rgb(168, 79, 11);text-decoration: line-through;line-height:70px;">X</h2>'
                                final.innerHTML = "X VENCEU O JOGO!";
                                vezJogador.innerHTML = "";
                        } else if (((posicoes[0].textContent === "X" || posicoes[0].textContent === "O") && (posicoes[1].textContent === "X" || posicoes[1].textContent === "O") && (posicoes[2].textContent === "X" || posicoes[2].textContent === "O") && (posicoes[3].textContent === "X" || posicoes[3].textContent === "O") && (posicoes[4].textContent === "X" || posicoes[4].textContent === "O") && (posicoes[5].textContent === "X" || posicoes[5].textContent === "O")
                                && (posicoes[6].textContent === "X" || posicoes[6].textContent === "O") && (posicoes[7].textContent === "X" || posicoes[7].textContent === "O") && (posicoes[8].textContent === "X" || posicoes[8].textContent === "O"))) {
                                final.innerHTML = "DEU VELHA";
                                vezJogador.innerHTML = "";
                        }


                })();
                if (final.innerHTML === "X VENCEU O JOGO!") {

                        vezJogador.innerHTML = "";
                } else if (final.innerHTML === "O VENCEU O JOGO!") {

                        vezJogador.innerHTML = "";
                } else if (((posicoes[0].textContent === "X" || posicoes[0].textContent === "O") && (posicoes[1].textContent === "X" || posicoes[1].textContent === "O") && (posicoes[2].textContent === "X" || posicoes[2].textContent === "O") && (posicoes[3].textContent === "X" || posicoes[3].textContent === "O") && (posicoes[4].textContent === "X" || posicoes[4].textContent === "O") && (posicoes[5].textContent === "X" || posicoes[5].textContent === "O")
                        && (posicoes[6].textContent === "X" || posicoes[6].textContent === "O") && (posicoes[7].textContent === "X" || posicoes[7].textContent === "O") && (posicoes[8].textContent === "X" || posicoes[8].textContent === "O"))) {
                        final.innerHTML = "DEU VELHA";
                        vezJogador.innerHTML = "";
                }

                else
                        if (vezJogador.innerHTML === "X") {

                                vezJogador.innerHTML = "O";
                        } else {

                                vezJogador.innerHTML = "X";
                        }
        })




})();

(function () {





        for (i = 0; i < posicoes.length; i++) {




                posicoes[i].addEventListener("click", function (e) {



                        if (final.innerHTML === "X VENCEU O JOGO!") {

                                this.innerHTML = "";
                        } else if (final.innerHTML === "O VENCEU O JOGO!") {

                                vezJogador.innerHTML = "";
                        } else if (((posicoes[0].textContent === "X" || posicoes[0].textContent === "O") && (posicoes[1].textContent === "X" || posicoes[1].textContent === "O") && (posicoes[2].textContent === "X" || posicoes[2].textContent === "O") && (posicoes[3].textContent === "X" || posicoes[3].textContent === "O") && (posicoes[4].textContent === "X" || posicoes[4].textContent === "O") && (posicoes[5].textContent === "X" || posicoes[5].textContent === "O")
                                && (posicoes[6].textContent === "X" || posicoes[6].textContent === "O") && (posicoes[7].textContent === "X" || posicoes[7].textContent === "O") && (posicoes[8].textContent === "X" || posicoes[8].textContent === "O"))) {
                                final.innerHTML = "DEU VELHA";
                                vezJogador.innerHTML = "";
                        }
                        else if (vezJogador.textContent === "X") {

                                this.innerHTML = "X";
                        } else if (vezJogador.textContent === "O") {

                                this.innerHTML = "O";
                        }


                })



        }
})();


function restartGame() {


        for (i = 0; i < posicoes.length; i++) {

                posicoes[i].innerHTML = "";
                final.innerHTML = "Vez do Jogador"
        }

}
