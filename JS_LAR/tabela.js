const menu = document.querySelector('.menuSuspenso')
const menuS = document.querySelector('.menuSuspenso2')
const menu1 = document.querySelector('#menu1')
const menu2 = document.querySelector('#menu2')
const x = document.querySelector('#x')
const x2 = document.querySelector('#x2')

// VOLTA PARA O INICO DA PAGINA
function sair() {
    window.location.href = '/index.html'
}



// IR PARA OUTRAS PAGINAS DE BUSCA
const vapor = document.querySelector('#vapor')
const torridas = document.querySelector('#torridas')
const cavaco = document.querySelector('#cavaco')
const contador = document.querySelector('#contador1')
const cargas = document.querySelector('#cargas')

vapor.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=vapor'
})

torridas.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=torridas'
})

cavaco.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cavaco'
})

contador.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=contador'
})

cargas.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cargas'
})




const vapor2 = document.querySelector('#vapor2')
const cavaco2 = document.querySelector('#cavaco2')
const tunel = document.querySelector('#tunel')

vapor2.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=vapor2'
})

cavaco2.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=cavaco2'
})

tunel.addEventListener('click',() =>{
    window.location.href='/PAGINAS_SECUNDARIAS/tabela.html?opcao=tunel'
})





//ABRE A BARRA DE ESCOLHA
menu1.addEventListener('mouseover',() =>{
    menu.style.display='block';
    menuS.style.display='none';
    pesquisar.style.display='none';
    tabela.style.display='none';
    grafico.style.display='none'
})
menu2.addEventListener('mouseover',() =>{
    menu.style.display='none';
    menuS.style.display='block'
    pesquisar.style.display='none';
    tabela.style.display='none';
    grafico.style.display='none'
})

x.addEventListener('click',() => {
    menu.style.display = 'none';
    pesquisar.style.display='block';
    tabela.style.display='table';
    grafico.style.display='block'
})
x2.addEventListener('click',() => {
    menuS.style.display = 'none';
    pesquisar.style.display='block';
    tabela.style.display='table';
    grafico.style.display='block'
})


// Mostra a aba de datas atual e esconde as outras
// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "flex";
//     evt.currentTarget.className += " active";
// }

// // Função que é chamada quando o botão Enviar é clicado
// function enviar() {
//     var date1 = document.getElementById("date1").value;
//     var date2 = document.getElementById("date2").value;
//     console.log("Data 1:", date1);
//     console.log("Data 2:", date2);

// }

// Mostra a primeira aba de datas por padrão
// document.getElementById("tab1").style.display = "flex";


const tira = document.querySelector('#confirmacao')
const data = document.querySelector('#data')
const tabela = document.querySelector('#tabela')


const pesquisar = document.querySelector('#pesquisar')



const busca = document.querySelector('#busca')
const excluir = document.querySelector('#limpar')

const grafico = document.querySelector('#grafico')

const DataI = document.querySelector('#dateI')
const DataF = document.querySelector('#dateF')

var selecaoForm = document.querySelector('#selecaoForm')
var selecaoGraf = document.querySelector('#selecaoGraf')


const Dselecionar = document.querySelector('#selecionar')
const Dselecionar2 = document.querySelector('#selecionar2')



// tira.addEventListener('click', () => {


//     if (date1.value == "" || date2.value == "") {
//         alert('PREENCHA TODAS AS DATAS QUE QUEIRA VER CORRETAMENTE!')
//     }
//     else {
//         data.style.display = "none";
//     }
// })

// Recupera o valor do parâmetro opcao da URL
const urlParams = new URLSearchParams(window.location.search);
const opcao = urlParams.get('opcao');

// Exibe a tabela correspondente com base na opção selecionada
if (opcao === 'vapor') {
    Dselecionar.style.display = 'none';


    busca.addEventListener('click', () => {

        var valor = selecaoGraf.value

        if (selecaoGraf.value == "" || DataI.value == "" || DataF.value == "") {
            alert('PREENCHA TODOS OS CAMPOS')
        }
        else if (valor === "ton") {
            tabela.style.display = 'table';
            console.log(valor)


            tabela.innerHTML =
                `
        <table id="tabela" class="tabela">
            <thead>
                <tr>
                    <th>Data/Hora</th>
                    <th>Vapor FFO Ton/Hr</th>
                    <th>Vapor UIA Ton/Hr</th>
                    <th>Vapor Combinado Ton/Hr</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
        `;
        }
        else if (valor === "dia") {
            console.log(selecaoGraf.value)
            tabela.style.display = 'table';

            tabela.innerHTML =
                `
        <table id="tabela" class="tabela">
            <thead>
                <tr>
                    <th>Dia</th>
                    <th>Vapor FFO Ton/Dia</th>
                    <th>Vapor UIA Ton/Dia</th>
                    <th>Vapor Combinado Ton/Dia</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
        `;
        }
        else if (valor === "mes") {
            console.log(selecaoGraf.value)
            tabela.style.display = 'table';

            tabela.innerHTML =

                `<table id="tabela" class="tabela">
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Vapor FFO Ton/Mês</th>
                    <th>Vapor UIA Ton/Mês</th>
                    <th>Vapor Combinado Ton/Mês</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>`
                ;
        }
    })

    excluir.addEventListener('click', () => {
        tabela.style.display = 'none';
    })
}


else if (opcao === 'torridas') {
    Dselecionar.style.display = 'none';

    pesquisar.innerHTML =
        `<nav id="pesquisar">
        <h1>Tabela de dados Torridas:</h1>
        <div id="selecione">

            <div id="selecionar">
                <label for="">Selecione Dados:</label>
                <select name="" id="selecaoGraf">
                    <option value=""></option>
                    <option value="EfcMaq">Eficiencia da Maquina</option>
                    <option value="EfcGer">Eficiencia Geral</option>
                </select>
            </div>

            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>

            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
            <button class="btn btn-outline-danger" id="imprimir">Imprimir</button>
        </div>
    </nav>`;
    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')

    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')

    var selecaoForm = document.querySelector('#selecaoForm')
    var selecaoGraf = document.querySelector('#selecaoGraf')

    busca.addEventListener('click', () => {
        var valor = selecaoGraf.value

        if (selecaoGraf.value == "" || DataI.value == "" || DataF.value == "") {
            alert('PREENCHA TODOS OS CAMPOS')
        }
        else if (valor === "EfcMaq") {
            tabela.style.display = 'table';
            console.log(valor)


            tabela.innerHTML =

                `<table id="tabela" class="tabela">
            <thead>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Turno</th>
                        <th>Ganchos</th>
                        <th>Gancho Vazio</th>
                        <th>Coxa Pendurada</th>
                        <th>Coxa Perdida</th>
                        <th>Coxa Processada</th>
                        <th>CX/hora</th>
                        <th>Eficiência Maquina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>`;
        }
        else if (valor === "EfcGer") {
            tabela.style.display = 'table';
            console.log(valor)


            tabela.innerHTML =

                `<table id="tabela" class="tabela">
            <thead>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Turno</th>
                        <th>Ganchos</th>
                        <th>Gancho Vazio</th>
                        <th>Coxa Pendurada</th>
                        <th>Coxa Perdida</th>
                        <th>Coxa Processada</th>
                        <th>CX/hora</th>
                        <th>Eficiência Geral</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>`;
        }
        excluir.addEventListener('click', () => {
            tabela.style.display = 'none';
        })
    })
}


else if (opcao === 'cavaco') {
    Dselecionar.style.display = 'none';

    pesquisar.innerHTML =
        `<nav id="pesquisar">
        <h1>Tabela de Dados Cavaco:</h1>
        <div id="selecione">

            <div id="selecionar">
                <label for="">Selecione Dados:</label>
                <select name="" id="selecaoGraf">
                    <option value=""></option>
                    <option value="THora">Tonelada Hora</option>
                    <option value="dia">Dia</option>
                    <option value="mes">Mensal</option>
                </select>
            </div>

            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>

            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
            <button class="btn btn-outline-danger" id="imprimir">Imprimir</button>
        </div>
    </nav>`;
    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')

    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')

    var selecaoForm = document.querySelector('#selecaoForm')
    var selecaoGraf = document.querySelector('#selecaoGraf')

    busca.addEventListener('click', () => {

        var valor = selecaoGraf.value

        if (selecaoGraf.value == "" || DataI.value == "" || DataF.value == "") {
            alert('PREENCHA TODOS OS CAMPOS')
        }
        else if (valor === "THora") {
            tabela.style.display = 'table';
            console.log(valor)


            tabela.innerHTML =
                `
            <table id="tabela" class="tabela">
                <thead>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Cavaco Ton/Hr</th>
                        <th>Cavaco Ton/Hr</th>
                        <th>Pellet Ton/Hr</th>
                        <th>FK/Hr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
            `;
        }
        else if (valor === "dia") {
            console.log(selecaoGraf.value)
            tabela.style.display = 'table';

            tabela.innerHTML =
            `
            <table id="tabela" class="tabela">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cavaco Ton/Dia</th>
                        <th>Cavaco Ton/Dia</th>
                        <th>Pellet Ton/Dia</th>
                        <th>FK/Dia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
            `;
        }
        else if (valor === "mes") {
            console.log(selecaoGraf.value)
            tabela.style.display = 'table';

            tabela.innerHTML =
            `
            <table id="tabela" class="tabela">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cavaco Ton/Mes</th>
                        <th>Cavaco Ton/Mes</th>
                        <th>Pellet Ton/Mes</th>
                        <th>FK/Mes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
            `;
        }
    });
    excluir.addEventListener('click', () => {
        tabela.style.display = 'none';
    })
}


else if (opcao === 'contador') {
    Dselecionar.style.display = 'none';
    Dselecionar2.style.display = 'none';


    pesquisar.innerHTML =
        `<nav id="pesquisar">
        <h1>Tabela de Dados Contador:</h1>
        <div id="selecione">

            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>

            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
            <button class="btn btn-outline-danger" id="imprimir">Imprimir</button>
        </div>
    </nav>`;

    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')
    const tabela = document.querySelector('#tabela')
    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')
    
    busca.addEventListener('click', () => {
        if (DataI.value == "" || DataF.value == "") {
            alert('PREENCHA TODOS OS CAMPOS')
        }
        else{
            tabela.style.display ='table'
        tabela.innerHTML =
            `
        <table id="tabela" class="tabela">
            <thead>
                <tr>
                    <th>Data/Hora</th>
                    <th>Turno</th>
                    <th>Contagem de Frango</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
        `;}
    });
    excluir.addEventListener('click', () => {
        tabela.style.display = 'none';
    })
} 


else if (opcao === 'cargas') {
    Dselecionar.style.display = 'none';
    Dselecionar2.style.display = 'none';


    pesquisar.innerHTML =
        `<nav id="pesquisar">
        <h1>Tabela de Cargas:</h1>
        <div id="selecione">

            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>

            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
            <button class="btn btn-outline-danger" id="imprimir">Imprimir</button>
        </div>
    </nav>`;

    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')
    const tabela = document.querySelector('#tabela')
    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')
    

    busca.addEventListener('click', () => {
        if (DataI.value == "" || DataF.value == "") {
            alert('PREENCHA TODOS OS CAMPOS')
        }
        else{
            tabela.style.display ='table'
            tabela.innerHTML =
            `
        <table id="tabela" class="tabela">
            <thead>
                <tr>
                    <th>Data/Hora</th>
                    <th>Empresa</th>
                    <th> Peso</th>
                    <th>Humidade</th>
                    <th>Volume</th>
                    <th>Data Recebida</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
        `;}
    });
    excluir.addEventListener('click', () => {
        tabela.style.display = 'none';
    })
}


else if (opcao === 'vapor2') {
    pesquisar.innerHTML = 
    `<nav id="pesquisar">
        <h1>Relatorio Produção de Vapor:</h1>
        <div id="selecione">


            <div id="selecionar">
                <label for="">Selecione Formato Desejado:</label>
                <select name="" id="selecaoForm">
                    <option value=""></option>
                    <option value="col">Colunas</option>
                    <option value="seg">segmento</option>
                </select>
            </div>


            <div id="selecionar2">
                <label for="">Selecione Dados:</label>
                <select name="" id="selecaoGraf">
                    <option value=""></option>
                    <option value="ton">Tonelada/Hora</option>
                    <option value="dia">Diario</option>
                    <option value="mes">Mensal</option>
                </select>
            </div>


            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>


            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
        </div>
    </nav>`
    ;

    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')
    const tabela = document.querySelector('#tabela')
    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')
    const selecaoForm = document.querySelector('#selecaoForm')
    const selecaoGraf = document.querySelector('#selecaoGraf')
    
    busca.addEventListener('click', () => {
        if(selecaoGraf.value === "" || selecaoForm.value ==="" || DataI.value === "" || DataF.value === ""){
            alert('PREENCHA TODOS OS CAMPOS')
        }
        
        else if (selecaoForm.value ==='seg' && selecaoGraf.value ==='ton'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO VAPOR TONELADA`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `Ton/Hor`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Vapor',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }
        
        else if(selecaoForm.value ==='seg' && selecaoGraf.value ==='dia'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO VAPOR DIA`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `DIA`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Vapor',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }
        
        else if(selecaoForm.value ==='seg' && selecaoGraf.value ==='mes'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO VAPOR MES`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `MENSAL`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Vapor',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }

        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='ton'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO VAPOR'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA VAPOR HORA'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/HR</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['00:00HR', 37.33],
                        ['01:00HR', 31.18],
                        ['02:00HR', 27.79],
                        ['03:00HR', 22.23],
                        ['04:00HR', 21.91],
                        ['05:00HR', 21.74],
                        ['06:00HR', 21.32],
                        ['07:00HR', 20.89],
                        ['08:00HR', 20.67],
                        ['09:00HR', 19.11],
                        ['10:00HR', 16.45],
                        ['11:00HR', 16.38],
                        ['12:00HR', 15.41],
                        ['13:00HR', 15.25],
                        ['14:00HR', 14.974],
                        ['15:00HR', 14.970],
                        ['16:00HR', 14.86],
                        ['17:00HR', 14.16],
                        ['18:00HR', 13.79],
                        ['19:00HR', 13.64],
                        ['20:00HR', 10.64],
                        ['21:00HR', 25.64],
                        ['22:00HR', 15.64],
                        ['23:00HR', 19.64]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }

        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='dia'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO VAPOR DIA'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA VAPOR DIA'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/DIA</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['DIA 01', 37.33],
                        ['DIA 02', 31.18],
                        ['DIA 03 ', 27.79],
                        ['DIA 04', 22.23],
                        ['DIA 05', 21.91],
                        ['DIA 06', 21.74],
                        ['DIA 07', 21.32],
                        ['DIA 08', 20.89],
                        ['DIA 09', 20.67],
                        ['DIA 10', 19.11],
                        ['DIA 11', 16.45],
                        ['DIA 12', 16.38],
                        ['DIA 13', 15.41],
                        ['DIA 14', 15.25],
                        ['DIA 15', 14.974],
                        ['DIA 16', 14.970],
                        ['DIA 17', 14.86],
                        ['DIA 18', 14.16],
                        ['DIA 19', 13.79],
                        ['DIA 20', 13.64],
                        ['DIA 21', 10.64],
                        ['DIA 22', 25.64],
                        ['DIA 23', 15.64],
                        ['DIA 24', 19.64],
                        ['DIA 25', 19.64],
                        ['DIA 26', 19.64],
                        ['DIA 27', 19.64],
                        ['DIA 28', 19.64],
                        ['DIA 29', 19.64],
                        ['DIA 30', 19.64],
                        ['DIA 31', 19.64]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }


        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='mes'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO VAPOR MES'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA VAPOR MES'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/MES</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['MES 01', 37.33],
                        ['MES 02', 31.18],
                        ['MES 03 ', 27.79],
                        ['MES 04', 22.23],
                        ['MES 05', 21.91],
                        ['MES 06', 21.74],
                        ['MES 07', 21.32],
                        ['MES 08', 20.89],
                        ['MES 09', 20.67],
                        ['MES 10', 19.11],
                        ['MES 11', 16.45],
                        ['MES 12', 16.38]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }
    })




    excluir.addEventListener('click', () => {
            grafico.style.display ='none';
            tabela.style.display ='none'
    })

}


else if (opcao === 'cavaco2') {
    pesquisar.innerHTML = `
    <nav id="pesquisar">
        <h1>Relatorio Consumo de Cavaco:</h1>
        <div id="selecione">
            <div id="selecionar">
                <label for="">Selecione Formato Desejado:</label>
                <select name="" id="selecaoForm">
                    <option value=""></option>
                    <option value="col">Colunas</option>
                    <option value="seg">segmento</option>
                </select>
            </div>
            <div id="selecionar">
                <label for="">Selecione Dados:</label>
                <select name="" id="selecaoGraf">
                    <option value=""></option>
                    <option value="ton">Tonelada/Hora</option>
                    <option value="dia">Diario</option>
                    <option value="mes">Mensal</option>
                </select>
            </div>
            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>
            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
        </div>
    </nav>`;
    
    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')
    const tabela = document.querySelector('#tabela')
    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')
    const selecaoForm = document.querySelector('#selecaoForm')
    const selecaoGraf = document.querySelector('#selecaoGraf')
    
    busca.addEventListener('click', () => {
        if(selecaoGraf.value === "" || selecaoForm.value ==="" || DataI.value === "" || DataF.value === ""){
            alert('PREENCHA TODOS OS CAMPOS')
        }
        
        else if (selecaoForm.value ==='seg' && selecaoGraf.value ==='ton'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO CAVACO TONELADA`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `Ton/Hor`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Cavaco',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }
        
        else if(selecaoForm.value ==='seg' && selecaoGraf.value ==='dia'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO CAVACO DIA`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `DIA`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Cavaco',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }
        
        else if(selecaoForm.value ==='seg' && selecaoGraf.value ==='mes'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `RELATORIO CONSUMO CAVACO MES`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `MENSAL`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: 'Tonelada Cavaco',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }

        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='ton'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO CAVACO'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA CAVACO HORA'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/HR</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['00:00HR', 37.33],
                        ['01:00HR', 31.18],
                        ['02:00HR', 27.79],
                        ['03:00HR', 22.23],
                        ['04:00HR', 21.91],
                        ['05:00HR', 21.74],
                        ['06:00HR', 21.32],
                        ['07:00HR', 20.89],
                        ['08:00HR', 20.67],
                        ['09:00HR', 19.11],
                        ['10:00HR', 16.45],
                        ['11:00HR', 16.38],
                        ['12:00HR', 15.41],
                        ['13:00HR', 15.25],
                        ['14:00HR', 14.974],
                        ['15:00HR', 14.970],
                        ['16:00HR', 14.86],
                        ['17:00HR', 14.16],
                        ['18:00HR', 13.79],
                        ['19:00HR', 13.64],
                        ['20:00HR', 10.64],
                        ['21:00HR', 25.64],
                        ['22:00HR', 15.64],
                        ['23:00HR', 19.64]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }

        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='dia'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO CAVACO DIA'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA CAVACO DIA'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/DIA</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['DIA 01', 37.33],
                        ['DIA 02', 31.18],
                        ['DIA 03 ', 27.79],
                        ['DIA 04', 22.23],
                        ['DIA 05', 21.91],
                        ['DIA 06', 21.74],
                        ['DIA 07', 21.32],
                        ['DIA 08', 20.89],
                        ['DIA 09', 20.67],
                        ['DIA 10', 19.11],
                        ['DIA 11', 16.45],
                        ['DIA 12', 16.38],
                        ['DIA 13', 15.41],
                        ['DIA 14', 15.25],
                        ['DIA 15', 14.974],
                        ['DIA 16', 14.970],
                        ['DIA 17', 14.86],
                        ['DIA 18', 14.16],
                        ['DIA 19', 13.79],
                        ['DIA 20', 13.64],
                        ['DIA 21', 10.64],
                        ['DIA 22', 25.64],
                        ['DIA 23', 15.64],
                        ['DIA 24', 19.64],
                        ['DIA 25', 19.64],
                        ['DIA 26', 19.64],
                        ['DIA 27', 19.64],
                        ['DIA 28', 19.64],
                        ['DIA 29', 19.64],
                        ['DIA 30', 19.64],
                        ['DIA 31', 19.64]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }


        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='mes'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO PRODUÇÃO CAVACO MES'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'TONELADA CAVACO MES'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} TON/MES</b>'
                },
                series: [{
                    name: 'TONELADA',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['MES 01', 37.33],
                        ['MES 02', 31.18],
                        ['MES 03 ', 27.79],
                        ['MES 04', 22.23],
                        ['MES 05', 21.91],
                        ['MES 06', 21.74],
                        ['MES 07', 21.32],
                        ['MES 08', 20.89],
                        ['MES 09', 20.67],
                        ['MES 10', 19.11],
                        ['MES 11', 16.45],
                        ['MES 12', 16.38]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }
    })




    excluir.addEventListener('click', () => {
            grafico.style.display ='none';
            tabela.style.display ='none'
    })
}

else if (opcao === 'tunel') {
    pesquisar.innerHTML = `
    <nav id="pesquisar">
        <h1>Relatorio Ventilação do Tunel:</h1>
        <div id="selecione">
            <div id="selecionar">
                <label for="">Selecione Formato Desejado:</label>
                <select name="" id="selecaoForm">
                    <option value=""></option>
                    <option value="col">Colunas</option>
                    <option value="seg">segmento</option>
                </select>
            </div>
            <div id="selecionar">
                <label for="">Selecione Dados:</label>
                <select name="" id="selecaoGraf">
                    <option value=""></option>
                    <option value="vent">Ventilação % Tunel</option>
                </select>
            </div>
            <div id="inicio">
                <label for="">Início:</label>
                <input type="datetime-local" id="dateI" style="background-color: white;">
            </div>
            <div id="fim">
                <label for="">Fim:</label>
                <input type="datetime-local" id="dateF" style="background-color: white;">
            </div>

            <button class="btn btn-outline-danger" id="busca">Pesquisa</button>
            <button class="btn btn-outline-danger" id="limpar">Limpar</button>
        </div>
    </nav>`;
    
    const busca = document.querySelector('#busca')
    const excluir = document.querySelector('#limpar')
    const tabela = document.querySelector('#tabela')
    const DataI = document.querySelector('#dateI')
    const DataF = document.querySelector('#dateF')
    const selecaoForm = document.querySelector('#selecaoForm')
    const selecaoGraf = document.querySelector('#selecaoGraf')
    
    busca.addEventListener('click', () => {
        if(selecaoGraf.value === "" || selecaoForm.value ==="" || DataI.value === "" || DataF.value === ""){
            alert('PREENCHA TODOS OS CAMPOS')
        }
        
        else if (selecaoForm.value ==='seg' && selecaoGraf.value ==='vent'){
            grafico.style.display='block';
            Highcharts.chart('container', {

                title: {
                    text: `VENTILAÇÃO DO TUNEL`,
                    align: 'left'
                },
    
                yAxis: {
                    title: {
                        text: `%`
                    }
                },
    
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 0 to 5'
                    }
                },
    
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
    
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    }
                },
    
                series: [{
                    name: '%',
                    data: [4, 6, 5, 7, 3, 3,
                        3, 4, 7, 4, 1]
                }, {
                    name: 'Tonelada Pellet',
                    data: [6, 1, 2, 1, 9, 8,
                        1, 5, 6, 3, 5]
                }],
    
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
    
            })
        }

        else if(selecaoForm.value ==='col' && selecaoGraf.value ==='vent'){
            grafico.style.display='block';

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'RELATORIO VENTILAÇÃO DO TUNEL'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '%'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} %</b>'
                },
                series: [{
                    name: '%',
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                        ['00:00HR', 37.33],
                        ['01:00HR', 31.18],
                        ['02:00HR', 27.79],
                        ['03:00HR', 22.23],
                        ['04:00HR', 21.91],
                        ['05:00HR', 21.74],
                        ['06:00HR', 21.32],
                        ['07:00HR', 20.89],
                        ['08:00HR', 20.67],
                        ['09:00HR', 19.11],
                        ['10:00HR', 16.45],
                        ['11:00HR', 16.38],
                        ['12:00HR', 15.41],
                        ['13:00HR', 15.25],
                        ['14:00HR', 14.974],
                        ['15:00HR', 14.970],
                        ['16:00HR', 14.86],
                        ['17:00HR', 14.16],
                        ['18:00HR', 13.79],
                        ['19:00HR', 13.64],
                        ['20:00HR', 10.64],
                        ['21:00HR', 25.64],
                        ['22:00HR', 15.64],
                        ['23:00HR', 19.64]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            })
        }
    })




    excluir.addEventListener('click', () => {
            grafico.style.display ='none';
            tabela.style.display ='none'
    })
}

else {
    // exibe mensagem de erro caso a opção seja inválida
    alert('PAGINA INVALIDA.ENTRE EM CONTATO COM O SUPORTE(AUTOMAÇÃO 530)')
}