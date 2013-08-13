var app = app || {};
(function(){
	var taskStoragePrototype = {
		getAllTasks : function (){
				var result = [];
				for(var i=0;i<this.storage.length;i++){
					var taskId = this.storage.key(i),
						task = window.JSON.parse(this.storage.getItem(taskId));
					result.push(task);
				}
				return result;
			},
		addTask : function (taskName){
				var taskId = new Date().getTime().toString();
				var task = {
					taskId : taskId,
					taskName : taskName,
					isCompleted : false
				};
				this.storage.setItem(taskId,window.JSON.stringify(task));
				return task;
			},
		removeTask : 	function (taskId){
				this.storage.removeItem(taskId);
			},
		toggleCompletion : 	function (taskId){
				var task = window.JSON.parse(this.storage.getItem(taskId));
				task.isCompleted = !task.isCompleted;
				this.storage.setItem(taskId,window.JSON.stringify(task));
			}
	};
	function TaskStorage(){
		this.storage = window.localStorage;
	}
	TaskStorage.prototype = taskStoragePrototype;
	
	app.TaskStorage = TaskStorage;

})();