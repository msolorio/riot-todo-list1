<todo>
	<h3>Riot JS Todo</h3>
	Task: <input type="text" id="fieldName">
	<button onclick={add}>Add a Task</button>
	<ul>
		<li each={inp in inputs}>{inp} &nbsp;<span onclick={remove}>-</span></li>
	</ul>

	<script>
		this.inputs = [];

		add() {
			this.inputs.push(fieldName.value)
			fieldName.value = ''
		}

		remove(e) {
			this.inputs.splice(this.inputs.indexOf(e.item.inp), 1)
		}
	</script>
</todo>