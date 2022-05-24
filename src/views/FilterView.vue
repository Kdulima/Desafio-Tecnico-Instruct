<template>
  <div class="app__filter">
    <h1>Filtros</h1>
    <p>De que forma você prefere visualizar a sua busca?</p>
  </div>
  <p v-if="continentError">Algo deu errado...</p>
  <div class="app__filter-container">
    <div class="app__container">
      <h2>Continentes</h2>
      <div class="app__select-box">
        <select @change="getDataCountries" v-if="continentResult" name="continents">
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
    <div class="app__container">
      <h2>Idiomas</h2>
      <div class="app__select-box">
         <select name="languages">
          <option value="">Selecione o Idioma</option>
        </select>
      </div>
    </div>
  </div>
  <div class="app__container">
    <label for="radio1">
      <input class="radio" name="theradio" id="radio1" type='radio' />
      Países com + de 1 Idioma
    </label>
  </div>
</template>

<script>

// import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import CONTINENTS_QUERY from '../services/queries/Continents';
import COUNTRIES_QUERY from '../services/queries/Countries';

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
  methods: {
    async getDataCountries() {
      console.log('teste');
      const countries = await this.$apollo.query({ query: COUNTRIES_QUERY });
      // return {
      //   continentResult: result,
      //   continentLoading: loading,
      //   continentError: error,
      // };
      console.log(countries);
    },
  },
};
</script>

<style>

.app__filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 16px;
}

.app__container {
  padding: 32px;
}

.app__select-box {
  display: flex;
  width: 400px;
  flex-direction: column;
}

.app__select-box select {
  background: #2c3e50;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.app__container label {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__container label input {
  margin: 0 5px 0 0;
}

.radio, .checkbox {
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid #2c3e50;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
}

.checkbox {
  border-radius: 0;
}

.radio:before, .checkbox:before {
  content: '';
  width: 15px;
  height: 15px;
  background: #42b983;
  border-radius: 50%;
  opacity: 0;
  transition: all 600ms ease-in-out;
  position: absolute;
}

.checkbox:before {
  border-radius: 0;
  background: transparent;
  border: 4px solid #2c3e50;
  border-left: 0;
  border-top: 0;
  width: 7px;
  height: 12px;
  transform: rotate(45deg);
  top: 2px;
}

.radio:checked:before, .checkbox:checked:before {
  opacity: 1;
}

.radio:focus, .checkbox:focus {
  box-shadow: 0 0 5px #2c3e50;
}

  @media screen and (max-width: 768px) {
    #app {
      flex-direction: column;
    }

    .app__filter-container {
      flex-direction: column;
      padding: 10px;
      box-sizing: border-box;
    }

    .app__container {
      padding: 0;
    }
  }

</style>
