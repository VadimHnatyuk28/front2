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
                
                <div id='${todo.id}' class='task'>
                <input type='checkbox' data-id='${todo.id}' value='Done'/>
                <span class='txt'>${todo.text}</span>
                </div>
            `
        }
    })
    

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () =>{
    if(inputNode.value === ''){
        alert('Input mustn`t be empty');
        inputNode.focus();
    }else{
        const capitalized = inputNode.value.charAt(0).toUpperCase()+ inputNode.value.slice(1)
        addTodo(capitalized)
        render()
        inputNode.value='';
        inputNode.focus();
    }

    
    
    
})

todosNode.addEventListener('click', (event) =>{
    if(event.target.tagName !== 'INPUT'){
        return;
    }

    const id = event.target.dataset.id;

    

    
    // Async maybe?

    setTimeout(deleteTodo, 200,id);
    setTimeout(render, 1000);

})



document.addEventListener('DOMContentLoaded', function() {

    let showHours = document.querySelector('.timer__hours');
    let showMinutes = document.querySelector('.timer__minutes');
    let showSeconds = document.querySelector('.timer__seconds');

    function setTime(){
        const time = new Date();

        const seconds = time.getSeconds();
        let minutes = time.getMinutes();
        let hours = time.getHours();

        if(seconds<9 || minutes<9 || hours<9){
            showSeconds.textContent = '0'+seconds;
            showMinutes.textContent = '0'+minutes;
            showHours.textContent = '0'+hours;
        }else{
            showSeconds.textContent = seconds;
            showMinutes.textContent = minutes;
            showHours.textContent = hours;
        }

        
        showMinutes.textContent = minutes;
        showHours.textContent = hours;

    }
    
    setInterval(setTime,1000)

  });