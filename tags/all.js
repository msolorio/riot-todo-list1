riot.tag2('todo', '<h3>Handy Dandy To Do List</h3> <input type="text" name="newTask"> <span onclick="{printTask}">+</span> <ul name="taskList"></ul>', '', '', function(opts) {
		this.printTask = function() {
			var newVal = this.newTask.value;
			var node = document.createElement("LI");
			var textnode = document.createTextNode(newVal);
			node.appendChild(textnode);
			this.taskList.appendChild(node);
		}.bind(this)
}, '{ }');