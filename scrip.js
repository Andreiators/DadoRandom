function numeroAleatorio () {
    let min = Math.ceil(document.querySelector("#minimo").value);
    let max = Math.floor(document.querySelector("#maximo").value);

    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(resultado);

}
