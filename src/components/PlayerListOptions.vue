<template>
  <q-page class="bg-yellow-1">
    <div class="text-h5">Hourse List(1-20)</div>
    <q-markup-table flat bordered>
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Condition</th>
          <th class="text-center">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in options" :key="index">
          <td class="text-center">{{ player.name }}</td>
          <td class="text-center">{{ player.condition }}</td>
          <td class="text-center">{{ player.color }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  props: ["options"],
  setup() {},
};
</script>
