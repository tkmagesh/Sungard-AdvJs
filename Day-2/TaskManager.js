var app = app || {};
(function(){
	var storage = new app.TaskStorage();

	window.addEventListener("DOMContentLoaded",initialize);
	window.addEventListener("storage",loadAllTasks);
	function initialize(){
		document.getElementById("btnAddTask").addEventListener("click",btnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",btnRemoveCompletedClick);
		loadAllTasks();
	}

	function loadAllTasks(){
		document.getElementById("ulTaskList").innerHTML = '';
		var allTasks = storage.getAllTasks();
		for(var index in allTasks){
			var task = allTasks[index];
			addTaskToList(task);
		}
	}

	function btnAddTaskClick(){
		var taskName = document.getElementById("txtTask").value;
		var task = storage.addTask(taskName);
		addTaskToList(task);
		
	}
	function addTaskToList(task){
		var newTaskItem = document.createElement("li"),
			ulTaskList = document.getElementById("ulTaskList");

		newTaskItem.innerHTML = task.taskName;
		newTaskItem.setAttribute("taskId",task.taskId);
		newTaskItem.addEventListener("click", onTaskItemClick);
		if (task.isCompleted){
			newTaskItem.classList.add("completed");
		}
		ulTaskList.appendChild(newTaskItem);
	}


	function btnRemoveCompletedClick(){
		var taskItems = document.getElementById("ulTaskList").children;
		for(var i=taskItems.length-1;i>=0;i--){
			var taskItem = taskItems[i];
			if (taskItem.classList.contains("completed")){
				var taskId = taskItem.getAttribute("taskId");
				storage.removeTask(taskId);
				taskItem.remove();
			}
		}
	}

	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
		storage.toggleCompletion(this.getAttribute("taskId"));
	}
})();