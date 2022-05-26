<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
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

    const continents = computed(() => result.value?.continents ?? [])
    const languages = computed(() => LanguageResult.value?.languages ?? [])

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
      continent: '',
      language: '',
      moreLanguages: false,
    }
  },
  methods: {
    handleLanguageValue(e: Event) {
      const target = (<HTMLInputElement>e.target)
      this.language = target.value
    },
    handleContinentValue(e: Event) {
      const target = (<HTMLInputElement>e.target)
      this.continent = target.value
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
      <input
        class="filters__checkbox__input"
        id="checkbox1"
        type="checkbox"
        :value="true"
        v-model="moreLanguages"
      />
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
    <Countries
      :continent="continent"
      :language="language"
      :moreLanguages="moreLanguages"
    />
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
.filters__checkbox {
  display: flex;
}
.filters__checkbox label {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
}
.filters__checkbox__input {
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid #2C3E50;
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
  background: #2C3E50;
  border-radius: 50%;
  opacity: 0;
  transition: all 600ms ease-in-out;
  position: absolute;
}
.filters__checkbox__input:before {
  border-radius: 0;
  background: transparent;
  border: 4px solid rgb(23, 232, 176);
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
  box-shadow: 0 0 5px #2C3E50;
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
  .filters__checkbox {
    margin-bottom: 20px;
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