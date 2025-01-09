import { defineStore } from 'pinia'

export const useGameStore = defineStore("game", {
    state: () => ({
      hourseList: [],
      rounds: [],
      colors: [
        "red",
        "blue",
        "green",
        "black",
        "purple",
        "orange",
        "pink",
        "brown",
        "cyan",
        "magenta",
        "lime",
        "teal",
        "olive",
        "navy",
        "maroon",
        "gold",
        "silver",
        "coral",
        "orchid",
        "violet",
      ],
      roundLengths: [1200, 1400, 1600, 1800, 2000, 2200]
    }),
    getters: {
      //we may create a special getter to check if smallest hourse has finised in the selected Round
    },
});