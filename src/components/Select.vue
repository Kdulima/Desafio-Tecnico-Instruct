<template>
  <div class="filters__filter">
    <select
      v-if="data"
      :name="name"
    >
      <option v-if="loading" value="">carregando...</option>
      <option v-if="!loading" value="">{{textDefaultOption}}</option>
      <option
        v-for="item in data"
        :key="item.code"
        :value="item.code"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Select',
  
  props: {
    name: {
      type: String,
      required: true
    },
    textDefaultOption: {
      type: String,
      required: true
    },  
    loading: {
      type: Boolean,
      required: true
    },
    error: {
      required: false
    },
    data: {
      type: [Object],
      required: true
    },
  },
});

</script>

<style scoped>

.filters__filter {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.filters__filter select {
  background: #2c3e50;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

</style>
