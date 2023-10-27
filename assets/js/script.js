const informacaoNutricional = (infoNutricional) => {return `<h3 class="pdp_titulo_nutricional">Informação Nutricional</h3> <div class="pdp_flex"> <p class="pdp_text_nutricional"> ${infoNutricional} <p> </div>`}

const quantidadePorcoes = (qntPorcoes1, qntPorcoes2) => {return `<hr class="pdp_divisoria"> <p class="pdp_text_nutricional pdp_porcao_nutricional">${qntPorcoes1}</p> <div class="pdp_flex"> <p class="pdp_valor_titulo_tabela">Porções</p> <p class="pdp_valor_titulo_tabela pdp_tabela_direita">${qntPorcoes2}</p> </div> <hr class="pdp_divisoria_maior">`}

const caloriasPorcao = (calorias) => {return `<h4 class="pdp_text_nutricional">Quantidade por porção</h4> <div class="pdp_flex"> <h3 class="pdp_titulo_nutricional">Calorias</h3> <h3 class="pdp_titulo_nutricional pdp_tabela_direita">${calorias}</h3> </div><table class="pdp_tabela_titulo"> <tr> <td class="pdp_valor_tabela_titulo"> &nbsp; </td> <td class="pdp_valor_tabela_titulo"> <p class="pdp_valor_titulo_tabela">Quantidade por porção</p> </td> <td class="pdp_valor_tabela_titulo"> <p class="pdp_valor_titulo_tabela">% valor diário</p> </td> </tr> </table> <table class="pdp_tabelanutricional_valor">`}

const nutriente = (nutriente, quantidade, valor) => {return `<tr> <th class="pdp_titulo_tabela">${nutriente}</th> <td class="pdp_valor_gramas">${quantidade}</td> <td class="pdp_valor_tabela">${valor}</td> </tr>`}

const subNutriente = (nutriente, quantidade, valor) => {return ` <tr> <td class="pdp_subtitulo_tabela">${nutriente}</td> <td class="pdp_valor_gramas">${quantidade}</td> <td class="pdp_valor_tabela">${valor}</td> </tr>`}

const ingredientes = (ingrediente) => {return `</table> <hr class="pdp_divisoria_maior"> <div class="pdp_flex"> <p class="pdp_text_nutricional pdp_text_tabela_final">% valores diários a de referência com base em uma dieta de 2.000kcal ou 8.4KJ. Seus valores diários podem ser maiores ou menores dependendo das suas necessidades energéticas.</p> </div> <div class="pdp_flex" style="display: block; margin-top: 16px;"> <h3 class="pdp_titulo_nutricional">Ingredientes:</h3> <p class="pdp_text_nutricional">${ingrediente}</p> </div>`}

const sugestaoUso = (sugestaoUso) => {return `<div class="pdp_flex" style="display: block; margin-top: 32px;"> <h3 class="pdp_titulo_nutricional">Sugestão de Uso:</h3> <p class="pdp_text_nutricional">${sugestaoUso}</p> </div>`}

// ---------------------- //

function inserirDadosCodigo (formHtml, funcao, ...parametro) {
    formHtml.addEventListener('submit', (e) => {
        e.preventDefault();
        if (parametro.length === 1) {
            const codigo = document.querySelector(parametro).value;
            resultado.textContent += (funcao(codigo));
            ultimoInserido = funcao(codigo);

        }
        else if (parametro.length === 2) {
            const codigo1 = document.querySelector(parametro[0]).value;
            const codigo2 = document.querySelector(parametro[1]).value;
            resultado.textContent += (funcao(codigo1, codigo2));
            ultimoInserido = funcao(codigo1, codigo2);

        }
        else if (parametro.length === 3) {
            const codigo1 = document.querySelector(parametro[0]).value;
            const codigo2 = document.querySelector(parametro[1]).value;
            const codigo3 = document.querySelector(parametro[2]).value;
            resultado.textContent += (funcao(codigo1, codigo2, codigo3));
            ultimoInserido = funcao(codigo1, codigo2, codigo3);
        }
        else{
            alert("Função inserirDadosCodigo está sem a opção");
        }
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

function apagarUltimo() {
    let apagar = new RegExp(ultimoInserido);
    let novoTexto = (resultado.textContent).replace(apagar, "");
    resultado.textContent = novoTexto;
}

function notificacao (mensagem){
    const criarDiv = document.createElement('div');
    criarDiv.textContent = mensagem;
    criarDiv.className = 'pushNotification';
    document.body.appendChild(criarDiv);

    setTimeout(() => {criarDiv.style.display = 'none'}, 2000);
}

// ---------------------- //

const resultado = document.querySelector('#resultado');
const botaoApagar = document.querySelector('#apagar-ultimo');
const inserirInfoNutricional = document.querySelector('#inserir-informacao-nutricional');
const inserirQntPorcoes = document.querySelector('#inserir-qnt-porcoes');
const inserirCalorias = document.querySelector('#inserir-calorias');
const inserirNutriente = document.querySelector('#inserir-nutriente');
const inserirSubNutriente = document.querySelector('#inserir-sub-nutriente');
const inserirIngredientes = document.querySelector('#inserir-ingredientes');
const inserirSugestaoUso = document.querySelector('#inserir-sugestao-uso');

let ultimoInserido;

trocarOpcoes();

botaoApagar.addEventListener('click', () => {
    notificacao("Último elemento foi apagado");
})

inserirDadosCodigo(inserirInfoNutricional, informacaoNutricional, '#informacaoNutricional');
inserirDadosCodigo(inserirCalorias, caloriasPorcao, '#calorias');
inserirDadosCodigo(inserirQntPorcoes, quantidadePorcoes, '#qntPorcoes', '#pesoPorcao');
inserirDadosCodigo(inserirNutriente, nutriente, '#nome-nutriente', '#qtd-nutriente', '#vlr-diario');
inserirDadosCodigo(inserirSubNutriente, subNutriente, '#nome-sub-nutriente', '#qtd-sub-nutriente', '#vlr-diario-sub');
inserirDadosCodigo(inserirIngredientes, ingredientes, '#ingredientes');
inserirDadosCodigo(inserirSugestaoUso, sugestaoUso, '#sugestao-uso');
