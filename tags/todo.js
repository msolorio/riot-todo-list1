riot.tag2('todo', '<h3>Handy Dandy To Do List</h3> <input type="text" name="newTask"> <span onclick="{printTask}">+</span> <ul name="taskList"></ul>', '', '', function(opts) {
		this.printTask = function() {
			var newLi = '<li>'+newTask.value+'<span onclick={removeTask}>-</span></li>';

			this.taskList.push(newLi);
		}.bind(this)
}, '{ }');