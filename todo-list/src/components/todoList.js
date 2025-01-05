

class TodoList {
    constructor() {
        this.initializeElements();
        this.bindEvenetListeners();
        this.todoText = "";
    }

    initializeElements() {
        this.container = document.querySelector("#wrapper");
        this.todoInput = this.container.querySelector("#todo-input");
        this.addButton = this.container.querySelector("#add-button");
        this.todoList = this.container.querySelector("#todo-list");
    }

    bindEvenetListeners() {
        this.todoInput.addEventListener("input", this.handleInputChange.bind(this));
        this.addButton.addEventListener("click", this.handleTodoClick.bind(this));
        this.todoList.addEventListener('click', this.handleDelete.bind(this));
    }

    handleInputChange(e) {
        this.todoText = e.target.value;
        if (this.todoText.length > 0) {
            this.addButton.disabled = false;
        } else {
            this.addButton.disabled = true;
        }
    }

    handleTodoClick(e) {
        const todo = this.createTodo();
        this.todoList.append(todo);
        this.resetInput();        
    }

    resetInput() {
        this.todoInput.value = "";
        this.addButton.disabled = true;
    }

    createTodo() {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const button = document.createElement('button');
        button.classList.add('delete-button');
        button.textContent = 'X';
        h2.textContent = this.todoText;
        li.append(h2, button);
        return li;
    }

    handleDelete(e) {
        if (e.target.classList.contains('delete-button')) {
            e.target.parentNode.remove();
        }
    }
}

export default TodoList;