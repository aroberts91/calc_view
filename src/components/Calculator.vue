<template>
  <div>
    <div class="calc_container">
      <Display :sum="this.$store.state.sum" :prev_sum="this.$store.state.prev_sum"/>
      <ButtonContainer />
    </div>
    <div class="history_container">
      <History />
    </div>
  </div>
</template>

<script>
  import Display from "./Display";
  import ButtonContainer from "./ButtonContainer";
  import History from "./History";

  export default {
    name: 'Calculator',
    components: {
      Display,
      ButtonContainer,
      History
    },
    mounted: function() {
      this.$store.commit('loadHistory');
    }
  }
</script>

<style scoped>

  .calc_container {
    max-width: 600px;
    border: 1px solid #dfe1e5;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
  }

</style>