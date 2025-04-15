let tarefas = []

function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!"

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()


    // condicional que trata o input
    if (tarefa == "") {
        mensagem = "Digite uma tarefa para adicioná-la!"
    }else{
        mensagem = "Tarefa adicionada com sucesso!"

        tarefas.push(tarefa)
        renderTarefa()
    }


    document.getElementById("mensagem").textContent = mensagem;
    inputTarefa.value = ""
}

function renderTarefa(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (i=0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }

}