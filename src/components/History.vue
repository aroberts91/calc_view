<template>
	<div id="history_container" v-if="this.$store.state.display_history">
		<table id="history_table">
			<thead class="head_row">
			<tr>
				<td>Sum</td>
				<td>Result</td>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in items" :key="item.id" class="history_row" v-on:click="selectHistoric(item.sum, item.rslt)">
				<td>{{ item.sum }}</td>
				<td>{{ item.rslt }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>1

<script>
	export default {
		name: "History",
		data: function() {
			return {
				items: this.$store.state.prev_sum_list
			}
		},
		methods: {
			selectHistoric(sum, rslt) {
				this.$store.commit('updateSum', { text: rslt, rslt: true });
				this.$store.commit('updatePrevSum', { text: sum })
			}
		}

	}
</script>

<style scoped>
	#history_container {
		max-width: 600px;
		border-radius: 8px;
		box-shadow: 0 1px 4px rgba(0,0,0,.28);
		background-color: #fff;
		text-align: center;
		margin: 20px auto;
	}

	.head_row {
		border-collapse: separate;
		border-bottom: 1px solid black;
		font-weight: 600;
	}

	#history_table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 10px;
	}

	.history_row:hover {
		background-color: #e8eaeb;
		cursor: pointer;
	}
</style>