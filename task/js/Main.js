import Task from "./Task.js";

class Main {
    constructor() {
        this.tasks = [];
        this.container = document.querySelector("#tasks");
        this.loadTasks();
    }

    async loadTasks() {
        try {
            const response = await fetch("./data/tasks.json");
            const data = await response.json();

            this.tasks = data.map(task =>
                new Task(task.text, task.category, task.completed)
            );

            this.render();
        } catch (error) {
            this.container.textContent = "Could not load the tasks.";
            console.error(error);
        }
    }

    render() {
        this.container.innerHTML = "";
        this.tasks.forEach(task => {
            this.container.appendChild(task.render());
        });
    }
}

new Main();
