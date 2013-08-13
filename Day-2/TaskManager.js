var app = app || {};

(function(){
	var storage = new app.TaskStorage();

	//window.addEventListener("DOMContentLoaded",initialize);
	//$(document).ready(initialize);
	$(initialize);
	$(window).bind("storage",loadAllTasks);

	function initialize(){
		$("#btnAddTask").click(btnAddTaskClick);
		$("#btnRemoveCompleted").click(btnRemoveCompletedClick);
		loadAllTasks();
	}

	function loadAllTasks(){
		document.getElementById("ulTaskList").innerHTML = '';
		$.each(storage.getAllTasks(),function(index,task){
			addTaskToList(task);
		});
	}

	function btnAddTaskClick(){
		var taskName = $("#txtTask").val();
		var task = storage.addTask(taskName);
		addTaskToList(task);
		
	}
	function addTaskToList(task){
		$("<li>")
			.html(task.taskName)
			.attr("taskId",task.taskId)
			.click(onTaskItemClick)
			.addClass(task.isCompleted ? "completed" : "")
			.appendTo("#ulTaskList");
	}


	function btnRemoveCompletedClick(){
		$("#ulTaskList > li.completed").each(function(index,elem){
			storage.removeTask($(elem).attr("taskId"))
		}).fadeOut('slow',function(){
			$(this).remove();	
		});
	}

	function onTaskItemClick(){
		var $this = $(this);
		$this.toggleClass("completed");
		storage.toggleCompletion($this.attr("taskId"));
	}
})(window,$);