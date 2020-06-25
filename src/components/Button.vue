<template>
	<td>
		<div class="button" v-on:click="updateSum">
			{{ btn_txt }}
		</div>
	</td>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "Button",
		props: ['btn_txt'],
		methods: {
			updateSum() {
				if( this.btn_txt === '=' ) {
					const params = new URLSearchParams();

					params.append('sum_str', this.$store.state.sum)
					axios.post('http://localhost/calc/new', params, {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}}).then((response) => {
						this.$store.commit('updatePrevSum', {
							text: this.$store.state.sum
						});
						this.$store.commit('updateSum', {
							text: response.data.sum,
							rslt: true
						}, );
					})
					return;
				}

				this.$store.commit('updateSum', {
					text: this.btn_txt
				})
			}
		}
	}
</script>

<style scoped>

</style>