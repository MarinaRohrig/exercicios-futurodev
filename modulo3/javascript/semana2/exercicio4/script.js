const input = document.getElementById("input");
const btn = document.getElementById("button");
const div = document.getElementById("result");

btn.addEventListener("click", function () {
    cep = input.textContent;
    console.log(cep);
    
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then(response => response.json())
    .then(dados => console.log(dados));
  
})



