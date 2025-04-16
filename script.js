let tarefas = []
const aviso = document.getElementById("mensagem")

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    let mensagem = "Tarefa adicionada com sucesso!"

    // condicional que trata o input
    if (tarefa == "") {
        mensagem = "Digite uma tarefa para adicioná-la à sua lista!"
    }else{
        mensagem = "Tarefa adicionada com sucesso!"

        tarefas.push(tarefa)
        renderTarefa()
    }

    aviso.textContent = mensagem;
    inputTarefa.value = ""
}

function renderTarefa(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i=0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)
        
        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
    if (tarefas.length !== 0){
        criarBotaoLimpar()
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    aviso.textContent = "Tarefa removida com sucesso!";
    renderTarefa()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() == ""){
        removerTarefa(i)
    }else{
        tarefas[i] = tarefaEditada.trim()

        aviso.textContent = "Tarefa editada com sucesso!"
        renderTarefa()
    }
}

function limparLista(botaoLimpar){
    // limpa a array de tarefas
    tarefas.length = 0
    aviso.textContent = "Lista limpa!"
    renderTarefa()

    // remove o botão de limpar
    botoes.removeChild(botaoLimpar)
    exBtnLimpar = false
}

function criarBotaoLimpar(){
    let botaoLimpar = document.createElement("button")
    botaoLimpar.className = "botao_lista"
    botaoLimpar.textContent = "Limpar Tudo"
    botaoLimpar.onclick = () => limparLista(botaoLimpar)
    listaTarefas.appendChild(botaoLimpar)
}