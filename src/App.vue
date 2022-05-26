<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import Logo from './components/Logo.vue'
import Countries from './components/Countries.vue'
import Select from './components/Select.vue'
import CONTINENTS_QUERY from './services/queries/Continents';
import LANGUAGES_QUERY from './services/queries/Languages';

export default defineComponent ({
  name: 'App',
  components: {
    Logo,
    Select,
    Countries
  },
  setup() {
    const { result, loading: continentLoading, error: continentError } = useQuery(CONTINENTS_QUERY);
    const { result: LanguageResult, loading: languageLoading, error: languageError } = useQuery(LANGUAGES_QUERY);
    const continents = useResult(result)
    const languages = useResult(LanguageResult)

    return {
      continents,
      continentLoading,
      continentError,
      languages,
      languageLoading,
      languageError
    };
  },
  data() {
    return {
      continent: null,
      language: null
    }
  },
  methods: {
    handleLanguageValue(e: any) {
      this.language = e.target.value
    },
    handleContinentValue(e: any) {
      this.continent = e.target.value
    }
  }
});

</script>

<template>
  <Logo/>

  <div class="filters">
    <div class="filters__continent">
      <Select
        name="continent"
        v-model="continent"
        textDefaultOption="Selecione o Continente"
        :data="continents"
        :loading="continentLoading"
        :error="continentError"
        @input="handleContinentValue"
      />
    </div>

    <div class="filters__checkbox">
      <input class="filters__checkbox__input" id="checkbox1" type='checkbox' />
      <label for="checkbox1">Países +1 idioma</label>
    </div>

    <div class="filters__language">
      <Select
        name="language"
        v-model="language"
        textDefaultOption="Selecione o Idioma"
        :data="languages"
        :loading="languageLoading"
        :error="languageError"
        @input="handleLanguageValue"
      />
    </div>
  </div>

  <div class="countries">
    <h1 class="countries__title">Countries</h1>
    <Countries :continent="continent" :language="language" />
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.filters {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  border-top: 1px solid rgba(236, 240, 241, 0.8);
  border-bottom: 1px solid rgba(236, 240, 241, 0.8);
}

.filters__continent, .filters__language {
  max-width: 500px;
  width: 50%;
}

.filters__checkbox label {
  padding-left: 10px;
  cursor: pointer;
}

.filters__checkbox__input {
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid turquoise;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
}

.filters__checkbox__input {
  border-radius: 0;
}

.filters__checkbox__input:before {
  content: '';
  width: 15px;
  height: 15px;
  background: turquoise;
  border-radius: 50%;
  opacity: 0;
  transition: all 600ms ease-in-out;
  position: absolute;
}

.filters__checkbox__input:before {
  border-radius: 0;
  background: transparent;
  border: 4px solid turquoise;
  border-left: 0;
  border-top: 0;
  width: 7px;
  height: 12px;
  transform: rotate(45deg);
  top: 2px;
}

.filters__checkbox__input:checked:before {
  opacity: 1;
}

.filters__checkbox__input:focus {
  box-shadow: 0 0 5px turquoise;
}

.countries {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.countries__title {
  margin: 1.4rem 0;
  padding: 1.4rem 0;
}

@media screen and (max-width: 768px) {

  .filters__continent, .filters__language {
    width: 100%;
  }

  .filters__continent {
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .countries__title {
    margin: 0;
    padding: 0;
  }
}
</style>
