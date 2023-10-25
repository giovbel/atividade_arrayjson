/***************************************************************
 * Objetivo: Manipulando Array e JSON
 * Data: 18/10/2023
 * Autor: Giovanna
 * Versão: 1.0
 **************************************************************/

//exportar
var estadosCidades = require('./estados_cidades');

//criar a variável estadosEcidades
const estadosEcidades = estadosCidades.estadosCidades
//função para aparecer as siglas dos estados e a quantidade
const getListaDeEstados = function (){

    //criar variáveis para aparecer os estados
    let estados_cidades = estadosEcidades;
    let estados = estados_cidades.estados;


    //criando variaveis array e json que possue as siglas dentro deles
    let siglas = []
    let jsonSiglas = {}

    //aparecer o uf
    jsonSiglas.uf = siglas;

//mostrar as siglas
estados.forEach(function(estado) {
    siglas.push(estado.sigla)
});

//mostrar quantidade
jsonSiglas.quantidade = siglas.length;

//retornar o json com as siglas
    return jsonSiglas;
}


//--------------------------------------------------------------------------

//função para aparecer os dados do estado através da sigla com filtro
const getDadosEstado = function (siglaFiltro){
    let estados = estadosEcidades.estados;
    let siglaDoEstado = siglaFiltro;
    let jsonEstado = {}

    estados.forEach(function (estado){

        if(siglaDoEstado.toUpperCase() == estado.sigla.toUpperCase()){
            jsonEstado.uf = estado.sigla;
            jsonEstado.descricao = estado.nome;
            jsonEstado.capital = estado.capital;
            jsonEstado.regiao = estado.regiao;
        }
    })

    
    return jsonEstado;
}

console.log(getListaDeEstados())
console.log(getDadosEstado("SP"))

//--------------------------------------------------------------------------

const getCapitalEstado = function (siglaFiltro){

    let estados = estadosEcidades.estados;
    let siglaDoEstado = siglaFiltro;
    let jsonEstado = {}

    estados.forEach(function (estado){

        if(siglaDoEstado.toUpperCase() == estado.sigla.toUpperCase()){
            jsonEstado.uf = estado.sigla;
            jsonEstado.descricao = estado.nome;
            jsonEstado.capital = estado.capital;
        }
    })

    return jsonEstado;
}

console.log(getCapitalEstado("AC"))

//--------------------------------------------------------------------------

const getEstadosRegiao = function(regiao){

    let regiaoEstado = regiao;
    let estados = estadosEcidades.estados;
    let jsonRegiao = {}

    jsonRegiao.regiao = regiaoEstado;

    let arrayEstado = []
    jsonRegiao.estados = arrayEstado; 

    estados.forEach(function (estado){

        // criar uma variável JSON para os estados
        let jsonEstado = {}

        if(regiaoEstado.toUpperCase() == estado.regiao.toUpperCase()){

            // colocar os ‘atributos’ dentro do JSON e definir um valor para eles
            jsonEstado.uf = estado.sigla;
            jsonEstado.descricao = estado.nome;

            arrayEstado.push(jsonEstado)
        }
    })
    
    return jsonRegiao;
}

console.log(getEstadosRegiao("SUL"))

//--------------------------------------------------------------------------

const getCapitalPais = function(){

    let estados = estadosEcidades.estados
    let jsonCapitais = {}
    let arrayCapitais = []

    jsonCapitais.capitais = arrayCapitais;

    estados.forEach(function (estado){

        let jsonEstado = {}

        if(estado.capital_pais){

            jsonEstado.capital_atual = estado.capital_pais.capital
            jsonEstado.uf = estado.sigla;
            jsonEstado.descricao = estado.nome;
            jsonEstado.capital = estado.capital
            jsonEstado.regiao = estado.regiao;
            jsonEstado.capital_pais_ano_inicio = estado.capital_pais.ano_inicio;
            jsonEstado.capital_pais_ano_termino = estado.capital_pais.ano_fim;

            arrayCapitais.push(jsonEstado)
        }
    })

    return jsonCapitais;
}

console.log(getCapitalPais())

//--------------------------------------------------------------------------

const getCidades = function(siglaFiltro){

    let estados = estadosEcidades.estados;
    let siglaDoEstado = siglaFiltro;
    let jsonEstado = {}
    let arrayCidades = []


    jsonEstado.uf = siglaDoEstado
    
    estados.forEach(function (estado){

    if(siglaDoEstado.toUpperCase() == estado.sigla.toUpperCase()){

        jsonEstado.descricao = estado.nome
       
        


        estado.cidades.forEach(function(cidade){
            arrayCidades.push(cidade.nome)
        })


        jsonEstado.quantidade_cidades = arrayCidades.length
        jsonEstado.cidades = arrayCidades;
    }

    

    })
    
    return jsonEstado
}

console.log(getCidades("AC"))