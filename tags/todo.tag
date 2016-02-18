<todo>
	<h3>Handy Dandy To Do List</h3>
	<input type="text" name="newTask">
	<span onclick={printTask}>+</span>
	<ul name="taskList"></ul>

	<script>
		printTask() {
			this.taskList.push(newTask.value);
		}
	</script>
</todo>