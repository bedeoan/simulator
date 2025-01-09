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
      ]
    }),
    getters: {
      // special getter to know if smallest hourse has finised
    },
    actions: {}
});