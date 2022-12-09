const xhr = new XMLHttpRequest();
let cep = 89010025;
const input = document.getElementById("input");



xhr.open("GET", `https://brasilapi.com.br/api/cep/v1/${cep}`);
xhr.responseType = "json";
xhr.onload = () => {
    console.log(xhr.response);
}
xhr.send();
