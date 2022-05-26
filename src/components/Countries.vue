<template>
  <div class="countries__wrapper">
    <table class="countries__table">
      <thead>
        <tr>
          <th style="width: 5%">Flag</th>
          <th style="width: 15%">Continent</th>
          <th style="width: 20%">Country</th>
          <th style="width: 20%">Native name</th>
          <th style="width: 20%">Capital</th>
          <th style="width: 20%">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="country in countries"
          :key="country.code"
        >
          <td>{{ country.emoji }}</td>
          <td>{{ country?.continent?.name }}</td>
          <td>{{ country.name }}</td>
          <td>{{ country.native }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import COUNTRIES_QUERY from '../services/queries/Countries';

export default defineComponent ({
  name: 'Countries',
  props: {
    continent: {
      type: String,
      required: false
    },
    language: {
      type: String,
      required: false
    }
  },
  setup() {
    const { result, loading, error } = useQuery(COUNTRIES_QUERY);
    const countries = computed(() => result.value?.countries ?? [])

    return {
      countries,
      loading,
      error
    };
  },
  methods: {

  },
  watch: {}
});

</script>

<style scoped>

.countries__wrapper {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
}

.countries__table {
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.countries__table thead tr {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.countries__table td {
  cursor: pointer;
}

.countries__table th,
.countries__table td {
  padding: 12px 15px;
  text-align: center;
}

.countries__table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.countries__table tbody tr:last-of-type {
  border-bottom: 2px solid #2c3e50;
}

.countries__table tbody tr:hover {
  font-weight: bold;
  background: #04d8ae;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .countries__table {
    align-self: flex-start;
  }
}

</style>
