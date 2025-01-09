<template>
  <div>
    <div class="flex row">
      <players-list
        class="col"
        :label="'Round ' + round.id"
        :players="round.players"
      />
      <template v-if="round && round.finished">
        <players-list
          class="col"
          :label="'Round ' + round.id"
          :players="sortPlayersByCondition"
        />
      </template>
      <div v-else class="col flex flex-center">
        Round {{ round.name }} not finished.
      </div>
    </div>
  </div>
</template>

<script>
import PlayersList from "./PlayersList.vue";
import { computed } from "vue";
export default {
  components: { PlayersList },
  props: ["round"],
  setup(props) {
    const sortByCondition = (a, b) => {
      if (a.condition < b.condition) {
        return -1;
      }
      if (a.condition < b.condition) {
        return 1;
      }
      return 0;
    };
    const sortPlayersByCondition = computed(() => {
      return Object.values(props.round.players).sort(sortByCondition);
    });
    return {
      sortPlayersByCondition: sortPlayersByCondition,
    };
  },
};
</script>
