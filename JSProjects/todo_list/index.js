let todos =[];
const todosNode = document.querySelector('.js-todos')
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')



function addTodo(text){
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    }

    todos.push(todo);
}

function deleteTodo(id){
    todos.forEach(todo => {
        if (todo.id === id){
            todo.done = true;
            document.getElementById(id).className = "animate__animated animate__backOutDown";
        }
    })
}

function render(){
    let html = ''; 
    todos.forEach(todo => {
        if (todo.done) {
            return;
        }else{
            html+= `
                <div id='${todo.id}'>
                <input type='checkbox' data-id='${todo.id}' value='Done'/>
                ${todo.text}
                </div>
            `
        }
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () =>{
    const text = inputNode.value;
    addTodo(text)
    render()
    inputNode.value='';
    inputNode.focus();
})

todosNode.addEventListener('click', (event) =>{
    if(event.target.tagName !== 'INPUT'){
        return;
    }

    const id = event.target.dataset.id;

    

    deleteTodo(id)

    setTimeout(render, 1000);

})



