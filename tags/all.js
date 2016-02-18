riot.tag2('todo', '<h3>Riot JS Todo</h3> Task: <input type="text" id="fieldName"> <button onclick="{add}">Add a Task</button> <ul> <li each="{inp in inputs}">{inp} &nbsp;<span onclick="{remove}">-</span></li> </ul>', '', '', function(opts) {
		this.inputs = [];

		this.add = function() {
			this.inputs.push(fieldName.value)
			fieldName.value = ''
		}.bind(this)

		this.remove = function(e) {
			this.inputs.splice(this.inputs.indexOf(e.item.inp), 1)
		}.bind(this)
}, '{ }');