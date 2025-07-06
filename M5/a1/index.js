var meuCaro = {
    portas: 4,
    status: "disponivel",
    veiculo: {
        marca: "Schevrolet",
        modelo: "cazuza",
        ano: 2019,
        exibirInformacoes: function () {
            console.log("Ve\u00EDculo: ".concat(this.modelo, " Modelo: ").concat(this.modelo, ". Ano: ").concat(this.ano, " . "));
        }
    }
};
