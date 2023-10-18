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
console.log(getDadosEstado("sp"))