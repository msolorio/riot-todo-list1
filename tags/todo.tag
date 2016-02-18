<todo>
	Task <input type="text" id="fieldName">
	<button onclick={add}>Add a Task</button>
	<ul>
		<li each={inp in inputs}>{inp}</li>
	</ul>

	<script>
		this.inputs = [];

		add() {
			this.inputs.push(fieldName.value)
		}
	</script>
</todo>