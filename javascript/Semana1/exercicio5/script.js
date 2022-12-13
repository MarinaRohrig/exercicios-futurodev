const input = document.getElementById("input");
const btn = document.getElementById("button");
const div = document.getElementById("result");


btn.addEventListener("click", buscaPokemon());

function buscaPokemon() {
    let pokemon = input.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
            div.innerHTML = "<ul> HP:" + dados.hp + "<ul> </br>" +
                "<ul> Attack:" + dados.stats.attack + "<ul> </br>" +
                "<ul> Defense:" + dados.defense + "<ul> </br>" +
                "<ul> Special Attack:" + dados.special - attack + "<ul> </br>" +
                "<ul> Special Defense:" + dados.special - defense + "<ul> </br>" +
                "<ul> Speed:" + dados.speed + "<ul> </br>";;
        }
        )
        .catch((erro) =>
            console.log("Erro na busca!" + erro));
}