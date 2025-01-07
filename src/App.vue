<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-red-4">
        <q-toolbar-title> Hourse racing </q-toolbar-title>
        <q-btn class="bg-grey-2 text-black q-mr-sm"> generate program </q-btn>
        <q-btn class="bg-grey-2 text-black q-mr-sm"> start/pause </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="flex flex-row q-mt-lg">
      <player-list-options class="col-3" :options="posiblePlayers" />
      <race-preview class="col" :tracks="tracks" />
      <rounds-preview class="col" :rounds="rounds" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import RoundsPreview from "./components/RoundsPreview.vue";
import RacePreview from "./components/RacePreview.vue";
import PlayerListOptions from "./components/PlayerListOptions.vue";
const posiblePlayers = ref([
  {
    name: "hourse1",
    condition: 10,
    color: "red",
  },
  {
    name: "hourse2",
    condition: 40,
    color: "red",
  },
  {
    name: "hourse3",
    condition: 50,
    color: "red",
  },
  {
    name: "hourse4",
    condition: 30,
    color: "red",
  },
]);

const getRandomDistance = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;
const rounds = ref([
  {
    label: "lap1",
    players: [
      { position: 1, name: "Tester1", result: 10 },
      { position: 2, name: "Tester2", result: 8 },
      { position: 3, name: "Tester3", result: 4 },
      { position: 4, name: "Tester4", result: 2 },
    ],
    finished: true,
    length: 1200
  },
  {
    label: "lap2",
    players: [
      { position: 1, name: "Tester1", result: 10 },
      { position: 2, name: "Tester2", result: 8 },
      { position: 3, name: "Tester3", result: 4 },
      { position: 4, name: "Tester4", result: 2 },
    ],
    finished: false,
    length: 1200
  },
]);
const tracks = ref({
  name: "Lap-1000m",
  tracks: Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    distance: getRandomDistance(),
  })),
});
</script>
