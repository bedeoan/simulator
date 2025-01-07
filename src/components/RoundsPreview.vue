<template>
  <div class="bg-blue-1">
    <div class="flex row">
      <div class="col text-center text-bold">Program</div>
      <div class="col text-center text-bold">Results</div>
    </div>
    <div v-for="(round, index) in rounds" :key="index">
      <round-preview :round="round"></round-preview>
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
