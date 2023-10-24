const informacaoNutricional = (infoNutricional) => {return `<h3 class="pdp_titulo_nutricional">Informação Nutricional</h3> <div class="pdp_flex"> <p class="pdp_text_nutricional"> ${infoNutricional} <p> </div>`}

const quantidadePorcoes = (qntPorcoes1, qntPorcoes2) => {return `<hr class="pdp_divisoria"> <p class="pdp_text_nutricional pdp_porcao_nutricional">${qntPorcoes1}</p> <div class="pdp_flex"> <p class="pdp_valor_titulo_tabela">Porções</p> <p class="pdp_valor_titulo_tabela pdp_tabela_direita">${qntPorcoes2}</p> </div> <hr class="pdp_divisoria_maior">`}

const caloriasPorcao = (calorias) => {return `<h4 class="pdp_text_nutricional">Quantidade por porção</h4> <div class="pdp_flex"> <h3 class="pdp_titulo_nutricional">Calorias</h3> <h3 class="pdp_titulo_nutricional pdp_tabela_direita">${calorias}</h3> </div><table class="pdp_tabela_titulo"> <tr> <td class="pdp_valor_tabela_titulo"> &nbsp; </td> <td class="pdp_valor_tabela_titulo"> <p class="pdp_valor_titulo_tabela">Quantidade por porção</p> </td> <td class="pdp_valor_tabela_titulo"> <p class="pdp_valor_titulo_tabela">% valor diário</p> </td> </tr> </table> <table class="pdp_tabelanutricional_valor">`}

const nutriente = (nutriente, quantidade, valor) => {return `<tr> <th class="pdp_titulo_tabela">${nutriente}</th> <td class="pdp_valor_gramas">${quantidade}</td> <td class="pdp_valor_tabela">${valor}</td> </tr>`}

const subNutriente = (nutriente, quantidade, valor) => {return ` <tr> <td class="pdp_subtitulo_tabela">${nutriente}</td> <td class="pdp_valor_gramas">${quantidade}</td> <td class="pdp_valor_tabela">${valor}</td> </tr>`}

const ingredientes = (ingrediente) => {return `</table> <hr class="pdp_divisoria_maior"> <div class="pdp_flex"> <p class="pdp_text_nutricional pdp_text_tabela_final">% valores diários a de referência com base em uma dieta de 2.000kcal ou 8.4KJ. Seus valores diários podem ser maiores ou menores dependendo das suas necessidades energéticas.</p> </div> <div class="pdp_flex" style="display: block; margin-top: 16px;"> <h3 class="pdp_titulo_nutricional">Ingredientes:</h3> <p class="pdp_text_nutricional">${ingrediente}</p> </div>`}

const sugestaoUso = (sugestaoUso) => {return `<div class="pdp_flex" style="display: block; margin-top: 32px;"> <h3 class="pdp_titulo_nutricional">Sugestão de Uso:</h3> <p class="pdp_text_nutricional">${sugestaoUso}</p> </div>`}

// ---------------------- //

function inserirDadosCodigoSimples(formHtml, funcao, parametro) {
    formHtml.addEventListener('submit', (e) => {
        e.preventDefault();
        const codigo = document.querySelector(parametro).value;
        resultado.textContent += (funcao(codigo));
    })
}

function inserirDadosCodigoDuplo(formHtml, funcao, parametro1, parametro2) {
    formHtml.addEventListener('submit', (e) => {
        e.preventDefault();
        const codigo1 = document.querySelector(parametro1).value;
        const codigo2 = document.querySelector(parametro2).value;
        resultado.textContent += (funcao(codigo1, codigo2));
    })
}

function inserirDadosCodigoTriplo(formHtml, funcao, parametro1, parametro2, parametro3) {
    formHtml.addEventListener('submit', (e) => {
        e.preventDefault();
        const codigo1 = document.querySelector(parametro1).value;
        const codigo2 = document.querySelector(parametro2).value;
        const codigo3 = document.querySelector(parametro3).value;
        resultado.textContent += (funcao(codigo1, codigo2, codigo3));
    })
}

function trocarOpcoes() {
    const select = document.querySelector('#opcao-inserir');
    const mostrar = document.querySelectorAll('.mostrar');
    select.onchange = function () {
        for (let i = 0; i < mostrar.length; i++) mostrar[i].style.display = 'none';
        let divID = select.options[select.selectedIndex].value;
        let div = document.getElementById(divID);
        div.style.display = 'block';
    };
}

function recarregarPagina(){
    location.reload();
}

// ---------------------- //

const resultado = document.querySelector('#resultado');
const inserirInfoNutricional = document.querySelector('#inserir-informacao-nutricional');
const inserirQntPorcoes = document.querySelector('#inserir-qnt-porcoes');
const inserirCalorias = document.querySelector('#inserir-calorias');
const inserirNutriente = document.querySelector('#inserir-nutriente');
const inserirSubNutriente = document.querySelector('#inserir-sub-nutriente');
const inserirIngredientes = document.querySelector('#inserir-ingredientes');
const inserirSugestaoUso = document.querySelector('#inserir-sugestao-uso');

trocarOpcoes();

inserirDadosCodigoSimples(inserirInfoNutricional, informacaoNutricional, '#informacaoNutricional');
inserirDadosCodigoDuplo(inserirQntPorcoes, quantidadePorcoes, '#qntPorcoes', '#pesoPorcao');
inserirDadosCodigoSimples(inserirCalorias, caloriasPorcao, '#calorias');
inserirDadosCodigoTriplo(inserirNutriente, nutriente, '#nome-nutriente', '#qtd-nutriente', '#vlr-diario');
inserirDadosCodigoTriplo(inserirSubNutriente, subNutriente, '#nome-sub-nutriente', '#qtd-sub-nutriente', '#vlr-diario-sub');
inserirDadosCodigoSimples(inserirIngredientes, ingredientes, '#ingredientes');
inserirDadosCodigoSimples(inserirSugestaoUso, sugestaoUso, '#sugestao-uso');
