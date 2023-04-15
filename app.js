const taskForm = document.getElementById("task-form");
const newTask = document.getElementById("new-task");
const incompleteTasks = document.getElementById("incomplete-tasks");
const completedTasks = document.getElementById("completed-tasks");

taskForm.addEventListener("submit", (event) => {
	event.preventDefault();

	if (newTask.value.trim() === "") {
		alert("Please enter a task.");
		return;
	}

	const taskItem = document.createElement("li");
	const taskText = document.createTextNode(newTask.value);
	taskItem.appendChild(taskText);

	const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
	completeButton.addEventListener("click", () => {
        taskItem.classList.add("completed");
        completeButton.innerText = "Completed";
        incompleteTasks.removeChild(taskItem);
        completedTasks.appendChild(taskItem);
    });
	taskItem.appendChild(completeButton);
	incompleteTasks.appendChild(taskItem);

	newTask.value = "";
});
