<template>
	<div id="button_container">
		<table class="button_table">
			<tbody>
			<tr>
				<Button btn_txt="("/>
				<Button btn_txt=")" />
				<Button btn_txt="%" />
				<Button btn_txt="AC" />
			</tr>
			<tr>
				<Button btn_txt="7" />
				<Button btn_txt="8" />
				<Button btn_txt="9" />
				<Button btn_txt="/" class="bold" />
			</tr>
			<tr>
				<Button btn_txt="4" />
				<Button btn_txt="5" />
				<Button btn_txt="6" />
				<Button btn_txt="x"  class="bold" />
			</tr>
			<tr>
				<Button btn_txt="1" />
				<Button btn_txt="2" />
				<Button btn_txt="3" />
				<Button btn_txt="-" class="bold" />
			</tr>
			<tr>
				<Button btn_txt="0" />
				<Button btn_txt="." class="bold" />
				<Button btn_txt="=" id="equals" class="bold"/>
				<Button btn_txt="+" class="bold"/>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import Button from "./Button";
	export default {
		name: "ButtonContainer",
		components: {
			Button
		}
	}
</script>

<style scoped>
	.button_table {
		line-height: 14px;
		width: 100%;
		box-sizing: content-box;
	}

	tr {
		display: flex;
		justify-content: space-evenly;
	}

	td {
		cursor: pointer;
		text-align: center;
		border-radius: 4px;
		touch-action: manipulation;
		padding: 10px 5px;
		background-color: #f1f3f4;
		margin: 3px;
		width: 100%;
	}

	td:hover {
		background-color: #e8eaeb;
	}

	.bold {
		font-weight: 600;
		font-size: 20px;
	}

	#equals {
		background-color: #4285f4;
		color: #FFF;
	}

	#equals:hover {
		background-color: #4d8bf1;;
	}
</style>