<template>
  <q-page class="bg-gray-1 full-width q-px-md">
    <div style="border-top: 1px dashed green; border-right: 1px solid red">
      <div
        v-for="(track, index) in tracks.tracks"
        :key="index"
        class="flex row full-width"
        style="border-bottom: 1px dashed green; height: 50px"
      >
        <div class="bg-green-8 q-px-sm full-height text-white">{{ index + 1 }}</div>
        <div :style="getMargin(track)">
          <img
            style="width: 20px; margin: 0px; padding: 0px"
            src="../assets/hourse.svg"
          />
        </div>
      </div>
    </div>
    <div class="text-center text-red text-bold">
      {{ tracks.name }}
    </div>
  </q-page>
</template>

<script>
export default {
  props: ["tracks"],
  setup() {
    return {
      getMargin: (track) => {
        return "margin-left:" + track.distance + "%";
      },
    };
  },
};
</script>
