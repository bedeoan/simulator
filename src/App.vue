<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-red-4">
        <q-toolbar-title> Hourse racing - in development</q-toolbar-title>
        <q-btn @click="generateRoundsPrograms" class="bg-grey-2 text-black q-mr-sm"> generate program </q-btn>
        <q-btn @click="startSelectedRound" class="bg-grey-2 text-black q-mr-sm"> start/pause </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="flex flex-row q-mt-lg">
      <player-list-options class="col-3" :options="store.hourseList" />
      <race-preview  v-if="store.tracks" class="col" :tracks="store.tracks" />
      <rounds-preview v-if="store.rounds" class="col" :rounds="store.rounds" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import RoundsPreview from "./components/RoundsPreview.vue";
import RacePreview from "./components/RacePreview.vue";
import PlayerListOptions from "./components/PlayerListOptions.vue";
import { useGameStore } from '@/stores/games'
const store = useGameStore();

const initaliseHourseListStore = () => {
  const colors = [
    "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown",
    "cyan", "magenta", "lime", "teal", "olive", "navy", "maroon", "gold",
    "silver", "coral", "orchid", "violet"
  ];

  const getRandomName = () => `hourse${Math.floor(Math.random() * 1000)}`;
  const generateUniqueRandomConditions = (count, min, max) => 
    Array.from({ length: max - min + 1 }, (_, i) => i + min)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  store.$patch({hourseList: Array.from({ length: 20 }, (_, i) => ({
    name: getRandomName(),
    condition:  generateUniqueRandomConditions(20, 1, 100)[i],
    color: colors[i],
  }))});
}

initaliseHourseListStore();

const getRandomDistance = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;

const generateRoundsPrograms = () => {
  // generate 6 rounds 
  const rounds = [];

  for (let i = 1; i <= 10; i++) {
    const players = generateUniqueRandomNumbers(1, 20, 10);
    rounds.push({
      id: i,
      players: players.map((x, index) => ({ ...store.hourseList[x], 'position': index} )),
      length: Math.floor(Math.random() * 3000) + 600, 
      finished: false
    });
  }
  store.$patch({
    rounds: rounds,
  });
}

const generateUniqueRandomNumbers = (min, max, count) => {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

const startSelectedRound = () => {
  store.$patch({tracks: {
    name: "Lap-1000m",
    tracks: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      distance: getRandomDistance(),
    })),
  }})
}
</script>
