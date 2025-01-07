<template>
  <div>
    <div class="flex row">
      <players-list class="col" :label="round.label" :players="round.players" />
      <template v-if="round.finished">
        <players-list class="col" :label="round.label" :players="round.players" />
      </template>
      <div v-else class="col flex flex-center">
        {{round.label}} not finished.
      </div>
    </div>
  </div>
</template>

<script>
import PlayersList from './PlayersList.vue';
export default {
  components: { PlayersList },
  props: ["round"],
  setup() {
    return {};
  },
};
</script>
