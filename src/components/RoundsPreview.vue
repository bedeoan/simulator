<template>
  <div class="bg-blue-1 tableHeight">
    <div class="flex row">
      <div class="col text-center text-bold">Program</div>
      <div class="col text-center text-bold">Results</div>
    </div>
    <div class="innerSection">
      <div v-for="(round, index) in rounds" :key="index">
        <round-preview :round="round"></round-preview>
      </div>
    </div>
  </div>
</template>

<script>
import RoundPreview from "./RoundPreview.vue";
export default {
  props: ["rounds"],
  components: {RoundPreview},
  setup() {
    return {};
  },
};
</script>
<style scoped>
.tableHeight {
  height:80vh;
  overflow: scroll;
}
.innerSection {
  height:80vh;
}
</style>
