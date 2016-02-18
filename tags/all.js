riot.tag2('todo', 'Task <input type="text" id="fieldName"> <button onclick="{add}">Add a Task</button> <ul> <li each="{inp in inputs}">{inp} &nbsp;<span onclick="{remove}">-</span></li> </ul>', '', '', function(opts) {
		this.inputs = [];

		this.add = function() {
			this.inputs.push(fieldName.value)
			fieldName.value = ''
		}.bind(this)

		this.remove = function(e) {
			this.inputs.splice(this.inputs.indexOf(e.item.inp), 1)
		}.bind(this)
}, '{ }');