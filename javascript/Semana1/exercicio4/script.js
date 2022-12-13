const input = document.getElementById("input");
const btn = document.getElementById("button");
const div = document.getElementById("result");

btn.addEventListener("click", function () {
    cep=88058185;
    console.log(cep);
    
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then(response => response.json())
    .then(dados => {
        div.innerHTML = JSON.stringify(dados);
       
    }
    );
    
})



