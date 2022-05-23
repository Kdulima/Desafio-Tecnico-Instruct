<template>
  <div class="app__filter">
    <h1>Filtros</h1>
    <p>De que forma você prefere visualizar a sua busca?</p>
  </div>
  <p v-if="continentError">Algo deu errado...</p>
  <div class="app__filter-container">
    <div class="container">
      <h2>Continentes</h2>
      <div class="app__select-box">
        <select v-if="continentResult" name="continents">
          <option v-if="!continentLoading" value="">Selecione o Continente</option>
          <option v-if="continentLoading" value="">carregando...</option>
          <option
            v-for="continent in continentResult.continents"
            :key="continent.code"
            :value="continent.code"
          >
            {{ continent.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="container">
      <h2>Idiomas</h2>
      <div class="app__select-box">
         <select name="languages">
          <option value="">Selecione o Idioma</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>

// import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import CONTINENTS_QUERY from '../services/queries/Continents';

export default {
  name: 'FilterView',
  setup() {
    const { result, loading, error } = useQuery(CONTINENTS_QUERY);
    return {
      continentResult: result,
      continentLoading: loading,
      continentError: error,
    };
  },
};
</script>

<style>

</style>
