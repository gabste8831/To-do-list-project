const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

//permite a inserção de itens à lista
formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim() //esse metodo remove espaços em branco no inicio e final da frase
  if (inputValue.length){
  todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    event.target.reset()
  }
})

//adiciona um event no container inteiro, filtrando por, se clicar no elemento com a classe delete ('lixeira')
//ele remove o pai desse elemento, que no caso é a LI responsável por guardar o item da lista
todosContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('delete')) {
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.add('d-flex')
      todo.classList.remove('hidden')
    })
})
