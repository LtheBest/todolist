//selecteurs

const Input = document.querySelector(".todo-input");
const Button = document.querySelector(".todo-button");
const List = document.querySelector(".todo-list");
const FilterOption = document.querySelector(".filter");

// ecouteurs d'evenement
document.addEventListener('DOMContentLoaded', getTodos);
Button.addEventListener("click", addTodo);
List.addEventListener("click",deleteCheck);
FilterOption.addEventListener("input", filter);

//  fonctions

function addTodo(evenement){
    evenement.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creer le li 
    const newTodo = document.createElement('li');
    newTodo.innerText = Input.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ajouter la todo au localstorage
    save(Input.value);
    // boutton choix
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    // button de suppression
    const Delete = document.createElement('button');
    Delete.innerHTML='<i class="fas fa-trash"></i>';
    Delete.classList.add('Delete-btn');
    todoDiv.appendChild(Delete);
    //ajouter notre todo a notre todolist
    List.appendChild(todoDiv);
    Input.value="";
}
function deleteCheck(evenement){
    const TrashItem = evenement.target;

    // suppression todo

    if (TrashItem.classList[0] ==="Delete-btn"){
        const trash = TrashItem.parentElement;
        // ajout de la classe tomber du css
        trash.classList.add("tomber");
        removeTodo(trash);
        //l'effet appliquer dans la classe tomber si on laisse 'trash.remove();'
        // l'element ne sera pas supprimer on aura l'impression qu'il est masquer
        //donc pour  y remedier nous allons creer une fonction avec un ecouteur d'evenement dedier pour les transitions
        //pour faire cour cette fonction va permetre attendre l'exercution de la transition de la classe tomber dans le css avant de supprimer l'element.
        trash.addEventListener('transitionend', function(){
            trash.remove();
        })
        // vous pouvez utiliser ceci 'TrashItem.parentElement.remove();' pour raccourcir le code 
    }
    if (TrashItem.classList[0] === "complete-btn"){
        const trash = TrashItem.parentElement;
        trash.classList.toggle("complete");
        // vous pouvez utiliser ceci 'TrashItem.parentElement.remove();' pour raccourcir le code 
    }

}
function filter(e){
    const todos = List.childNodes;
    todos.forEach(function(trash){
        switch(e.target.value){
            case"all":
                trash.style.display = "flex";
                break;
            case"completed":
                if(trash.classList.contains("complete")){
                    trash.style.display="flex";
                }else{
                    trash.style.display="none";
                }
                break;
            case"uncompleted":
                if(!trash.classList.contains("complete")){
                    trash.style.display="flex";
                }else{
                    trash.style.display="none";
                }
                break;
        }
    })
}
function save(trash){
    //verifier s'il y'a des todo existants
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(trash);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
   
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(trash){
        //creer la div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //creer le li 
        const newTodo = document.createElement('li');
        newTodo.innerText = trash;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
      
        // boutton choix
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);
        // button de suppression
        const Delete = document.createElement('button');
        Delete.innerHTML='<i class="fas fa-trash"></i>';
        Delete.classList.add('Delete-btn');
        todoDiv.appendChild(Delete);
        //ajouter notre todo a notre todolist
        List.appendChild(todoDiv);
    })
}
function removeTodo(trash){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const trashIndex = trash.children[0].innerText;
    todos.splice(todos.indexOf(trashIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos));
}