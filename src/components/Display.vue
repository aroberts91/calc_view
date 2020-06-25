<template>
	<div id="display_container">
		<history-icon class="history" v-on:click="toggleHistory"/>
		<span class="prev_display">{{ prev_sum }}</span>
		<span class="display">{{ sum }}</span>
	</div>
</template>

<script>
	import HistoryIcon from 'vue-material-design-icons/History.vue'
	export default {
		name: "Display",
		props: [ 'sum', 'prev_sum' ],
		components: {
			HistoryIcon
		},
		methods: {
			toggleHistory() {
				this.$store.commit('toggleHistory');
			}
		}
	}
</script>

<style scoped>
	.display {
		text-align: right;
		display: block;
		font-size: 30px;
		color: #222;
	}
	.prev_display {
		color: #70757a;
	}

	.history {
		float: left;
		cursor: pointer;
	}

	#display_container {
		padding: 10px;
		margin: 10px;
		border: 1px solid #dfe1e5;
		border-radius: 8px;
		font-size: 13px;
		position: relative;
		text-align: right;
	}
</style>