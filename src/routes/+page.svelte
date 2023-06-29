<form action="">
	<div class="grid">
		<label for="operation_name">
			Operation Name
			<input type="text" id="operation_name" name="operation_name" placeholder="MyOperation" />
		</label>
		<label for="message_id">
			Message ID
			<input type="text" id="message_id" name="message_id" placeholder="1" />
		</label>
	</div>
	<div class="grid">
		<label for="operation">
			Operation <span class="required-input">*</span>
			<textarea id="operation" name="operation" rows="10" />
		</label>
		<label for="variables">
			Variables
			<textarea id="variables" name="variables" rows="10" />
		</label>
	</div>
	<button type="submit">Generate</button>
</form>

<style>
	.required-input {
		color: red;
	}
</style>
