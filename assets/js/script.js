//Variaveis
const inpTarefa = document.getElementById('tarefa')
const btnTarefa = document.getElementById('btnAdiciona')
const conteinerTarefas = document.getElementById('conteiner-tarefas')
let num = 0 //Número de tarefas adicionadas

//Eventos
btnTarefa.addEventListener('click', function(){adicionaTarefa()})

//Funções
function adicionaTarefa(){
    num += 1
    let html = `<input type="checkbox" name="tarefa${num}" id="check">`
    html += `<label for="tarefa${num}">${inpTarefa.value}</label>`
    html += `<br>`

    conteinerTarefas.innerHTML += html
}