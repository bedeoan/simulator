<template>
  <div>
    <q-markup-table title="test" flat bordered>
      <thead class="">
        <tr>
          <th class="text-center">Position</th>
          <th class="text-center">Name</th>
        </tr>
        <tr class="bg-red-3 text-black">
          <th colspan="5">{{ label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in players" :key="index">
          <td class="text-center">{{ player.position }}</td>
          <td class="text-center">{{ player.name }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  props: ["players", "label"],
  setup() {
    return {};
  },
};
</script>
