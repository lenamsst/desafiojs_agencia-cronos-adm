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

//Função para cadastrar novo serviço
function btnCadastrarNovo() {
    
    //Captura campos do formulario
    let nome_input = document.querySelector('#nome');
    let imagem_input = document.querySelector('#imagem');
    let descricao_input = document.querySelector('#descricao');

    //Condicional verifica campos vazios e retorna msg de erro
    if ((nome_input.value == '') || (imagem_input.value == '') || (descricao_input.value == '')) {
        alert('Nome, Imagem e Descrição devem ser preenchidos!')
    } else {
        //Adicionando novo serviço
        let salvarNovo = {
            //id: servicos.length + 1,
            nome: nome_input.value,
            imagem: imagem_input.value,
            descricao: descricao_input.value
        }

    
        servicos.push(salvarNovo);
        window.scrollTo(0,document.body.scrollHeight)
        
    }

      listarServicos();
    
}


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

//Função para limpar todos os campos do formulario 
function btnLimpar() {
    
    btnEditar.style.display ='none';

    document.getElementById('nome').value = "";
    document.getElementById('imagem').value = "";
    document.getElementById('previewimg').src = "";
    document.getElementById('descricao').value = "";
}

//Função para abrir a janela modal com dados inseridos nos campos do formúlario
function abrirEdicaoServico(id) {

    btnSalvo.style.display = 'none';
    btnEditar.style.display ='initial';

    for(let i = 0; i < servicos.length; i++) {
        if (servicos[i]['id'] == id){
            document.getElementById('id').value = servicos[i]['id'];
            document.getElementById('nome').value = servicos[i]['nome'];
            document.getElementById('imagem').value = servicos[i]['imagem'];
            document.getElementById('descricao').value = servicos[i]['descricao'];

        }
    }
}

function atualizarServico() { 

    let id = document.getElementById('id').value;

    for(let i = 0; i < servicos.length; i++) {
        if (servicos[i]['id'] == id){

            let salvarNovo = {
                id: document.getElementById('id').value,
                nome: document.getElementById('nome').value,
                imagem: document.getElementById('imagem').value,
                descricao: document.getElementById('descricao').value
            }
            servicos.splice(i, 1, salvarNovo);
        }
    }
    listarServicos();
}


listarServicos();
