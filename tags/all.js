riot.tag2('todo', 'Task <input type="text" id="fieldName"> <button onclick="{add}">Add a Task</button> <ul> <li each="{inp in inputs}">{inp}</li> </ul>', '', '', function(opts) {
		this.inputs = [];

		this.add = function() {
			this.inputs.push(fieldName.value)
		}.bind(this)
}, '{ }');