import './style.css' ;

interface Todo{
  title : string ;
  isCompleted : boolean ;
  readonly id : string ;
}

const todos : Todo[] = [] ;

const todoContainer = document.querySelector(".todosContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement ;

const myForm = document.querySelector("form") as HTMLFormElement; 

myForm.onsubmit = (e) =>{
  e.preventDefault();

  const todo : Todo = {
    title : todoInput.value ,
    isCompleted : false ,
    id : String(Math.random()*1000),
  }

  todos.push(todo);
  console.log(todos);

  generateTodoElement(todo.title , todo.isCompleted, todo.id);

  todoInput.value = ''; 

}

const generateTodoElement = (title: string , isCompleted : boolean ,id: string ) =>{

  const todo : HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  const checkBox : HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  checkBox.className = "isCompleted" ;
  checkBox.checked = isCompleted ;

  const paragraph : HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title ;
  
  const btn : HTMLButtonElement = document.createElement("button");
  btn.innerText = "X" ;
  btn.className = "deleteBtn" ;
  
  todo.append(checkBox, paragraph, btn);

  todoContainer.append(todo);


}








