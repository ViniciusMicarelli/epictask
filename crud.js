document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
    const titulo = document.querySelector("#titulo").value
    const descricao = document.querySelector("#descricao").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = {
        titulo,
        descricao,
        categoria,
    }

    if (!validar(tarefa.titulo, document.querySelector("#titulo"))) return
    if (!validar(tarefa.titulo, document.querySelector("#descricao"))) return

    document.querySelector("#tarefas").innerHTML += createCard(tarefa)

    modal.hide()
}

    function validar(valor, campo){
        if(valor == ""){
            campo.classList.add("is-invalid")
            campo.classList.remove("is-valid")
            return false
    }

    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}
   
function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function createCard(tarefa){
    return `
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-header">
                            ${tarefa.titulo}
                            </div>
                            <div class="card-body">
                            <p class="card-text">${tarefa.descricao}</p>
                            <p>
                                <span class="badge text-bg-warning">${tarefa.categoria}</span>
                            </p>
                            <a href="#" class="btn btn-success" title="Marcar como Concluída">
                                <i class="bi bi-check-lg"></i>
                                Finalizar
                            </a>
                            <a onClick="apagar(this)"href="#" class="btn btn-danger" title="Apagar Tarefa">
                                <i class="bi bi-trash"></i>
                                Apagar
                            </a>
                            </div>
                        </div> <!-- Card -->
                    </div> <!-- Col -->
            </div> <!-- Container -->
    ` //template literals
}