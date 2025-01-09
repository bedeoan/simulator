<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-red-4">
        <q-toolbar-title> Hourse racing </q-toolbar-title>
        <q-btn
          @click="generateRoundsPrograms"
          class="bg-grey-2 text-black q-mr-sm"
        >
          generate program
        </q-btn>
        <q-btn @click="startRace" class="bg-grey-2 text-black q-mr-sm">
          start/pause
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="flex flex-row q-mt-lg">
      <player-list-options class="col-3" :options="store.hourseList" />
      <race-preview
        v-if="store.rounds && store.rounds.length"
        class="col"
        :round="store.rounds[selectedRound]"
      />
      <rounds-preview v-if="store.rounds" class="col" :rounds="store.rounds" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import RoundsPreview from "./components/RoundsPreview.vue";
import RacePreview from "./components/RacePreview.vue";
import PlayerListOptions from "./components/PlayerListOptions.vue";
import { useGameStore } from "@/stores/games";
import { ref } from "vue";

const store = useGameStore();
const selectedRound = ref(0);
const stopedRace = ref(true);

const initaliseHourseListStore = () => {
  const getRandomName = () => `hourse${Math.floor(Math.random() * 999)}`;
  store.$patch({
    hourseList: Array.from({ length: 20 }, (_, i) => ({
      name: getRandomName(),
      condition: Math.floor(Math.random() * 100) + 1,
      color: store.colors[i],
    })),
  });
};

initaliseHourseListStore();

const generateRoundsPrograms = () => {
  selectedRound.value = 0;
  const rounds = [];

  for (let i = 1; i <= 6; i++) {
    const players = generateUniqueRandomNumbers(0, 19, 10);
    rounds.push({
      id: i,
      name: i,
      players: players.map((x, index) => ({
        ...store.hourseList[x],
        currentPosition: 1,
        index: index + 1,
      })),
      length: store.roundLengths[i-1],
      finished: false,
    });
  }
  store.$patch({
    rounds: rounds,
  });
};

const generateUniqueRandomNumbers = (min, max, count) => {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};
const sortByCondition = (a, b) => {
  if (a.condition < b.condition) {
    return -1;
  }
  if (a.condition < b.condition) {
    return 1;
  }
  return 0;
};

const smallestConditionHoursFromRound = (round) => {
  return Object.values(round.players).sort(sortByCondition)[0];
};
const startRace = () => {
  stopedRace.value = !stopedRace.value;
  startSelectedRound();
};
const startSelectedRound = () => {
  const intervalId = setInterval(() => {
    store.rounds[selectedRound.value].players.forEach((player) => {
      const payload = (2 * player.condition) / 100;
      player.currentPosition += 2 + payload;
    });

    if (stopedRace.value) {
      clearInterval(intervalId);
      return;
    }
    if (
      smallestConditionHoursFromRound(store.rounds[selectedRound.value])
        .currentPosition >= 100
    ) {
      clearInterval(intervalId);
      store.rounds[selectedRound.value].finished = true;
      if (selectedRound.value < 5) {
        selectedRound.value++;
        startSelectedRound();
      }
    }
  }, 50);
};
</script>
