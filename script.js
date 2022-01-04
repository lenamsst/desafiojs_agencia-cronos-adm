const servicos = [{
    id: 1,
    nome: 'Desenvolvimento Web',
    imagem: 'imagens/ilustra-web.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
    acoes: []

}, {
    id: 2,
    nome: 'Marketing Digital',
    imagem: 'imagens/ilustra-marketing.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
    acoes: []
}, {
    id: 3,
    nome: 'Consultoria UX',
    imagem: 'imagens/ilustra-ux.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
    acoes: []
}];

//Função para listar os serviços de forma dinamica
function listarServicos() {

    let htmlServicos = "";

    //Criando lista de serviço em html
    for (let i = 0; i < servicos.length; i++) {
        htmlServicos += `
            <form>
            <tr>
            <td>${servicos[i].nome}</td>            
            <td><img src="${servicos[i].imagem}"/></td>
            <td>${servicos[i].descricao}</td>
            <td>
              <button class="btn btn-secondary m-1" data-toggle="modal" data-target="#exampleModalCenter" onclick="abrirEdicaoServico(${servicos[i].id})">editar</button>
              <button class="btn btn-danger m-1" onclick="deletarServico(${servicos[i].id})">excluir</button>
            </td>
            </tr>    
            </form>   
        `;
    }

    //Selecionando elemento que vai englobar a lista
    let painelServicos = document.querySelector('.painel-servicos');

    //Inserindo lista de serviços no html
    painelServicos.innerHTML = htmlServicos;
    
}

listarServicos();