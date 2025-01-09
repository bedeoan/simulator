<template>
  <q-page class="bg-gray-1 full-width q-px-md">
    <div class="racePreviewBody">
      <div
        v-for="(player, index) in round.players"
        :key="index"
        class="flex row full-width trackLength"
      >
        <div class="bg-green-8 q-px-sm full-height text-white indexLength">
          {{ index + 1 }}
        </div>
        <div :style="getMargin(player)">
          <img
            style="width: 20px; margin: 0px; padding: 0px"
            src="../assets/hourse.svg"
          />
          <q-badge :color="player.color" class="text-white">
            {{ player.condition }}
          </q-badge>
        </div>
      </div>
    </div>
    <div class="text-center text-red text-bold">Lap {{ round.name }} {{ round.length }}m</div>
  </q-page>
</template>

<script>
export default {
  props: ["round"],
  setup() {
    return {
      getMargin: (player) => {
        if (player.currentPosition < 80) {
          return "margin-left:" + player.currentPosition + "%";
        } else {
          return "margin-left:80%";
        }
      },
    };
  },
};
</script>
<style>
.racePreviewBody {
  border-top: 1px dashed green;
  border-right: 1px solid red;
}
.indexLength {
  width: 30px;
}
.trackLength {
  border-bottom: 1px dashed green; height: 50px; width: 100%
}
</style>
