<template>
  <div class="app__filter">
    <h1>Filtros</h1>
    <br>
    <p>De que forma você prefere visualizar a sua busca?</p>
  </div>

  <div class="app__filter-radio">
    <div class="app__filter-option">
      <label for="continent">
        <input class="radio" name="theradio" id="continent" type='radio' checked />
        Filtrar países por continentes
      </label>
    </div>
    <div class="app__filter-option">
      <label for="language">
        <input class="radio" name="theradio" id="language" type='radio' checked  />
        Filtrar países por idioma
      </label>
    </div>
    <div class="app__filter-option">
      <label for="language1">
        <input class="radio" name="theradio" id="language1" type='radio' checked  />
        Filtrar países com mais de 1 idioma
      </label>
    </div>
  </div>

  <div class="app__filter-container">
    <div class="container">
      <h2>Continentes</h2>
      <div class="app__select-box">
        <div class="app__options-container">
          <div class="option">
            <label for="america do sul">
              <input type="radio" class="radio" id="america do sul" name="category" />
              América do Sul</label>
          </div>
          <div class="option">
            <label for="america central">
              <input type="radio" class="radio" id="america central" name="category" />
              Ámerica Central
            </label>
          </div>
          <div class="option">
            <label for="América do Norte">
              <input type="radio" class="radio" id="América do Norte" name="category" />
              América do Norte
            </label>
          </div>
          <div class="option">
            <label for="africa">
              <input type="radio" class="radio" id="africa" name="category" />
              África
            </label>
          </div>
          <div class="option">
            <label for="europa">
              <input type="radio" class="radio" id="europa" name="category" />
              Europa
            </label>
          </div>
          <div class="option">
            <label for="Ásia">
              <input type="radio" class="radio" id="Ásia" name="category" />
              Ásia
            </label>
          </div>
          <div class="option">
            <label for="oceania">
              <input type="radio" class="radio" id="oceania" name="category" />
              Oceânia
            </label>
          </div>
          <div class="option">
            <label for="news">
              <input type="antartida" class="antartida" id="news" name="category" />
              Antártida
            </label>
          </div>
        </div>
        <div class="selected">
          Selecione o Continente
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Idiomas</h2>
      <div class="app__select-box">
        <div class="app__options-container">
          <div class="option">
            <label for="portuguese">
              <input type="radio" class="radio" id="portuguese" name="category" />
              Português</label>
          </div>
          <div class="option">
            <label for="english">
              <input type="radio" class="radio" id="english" name="category" />
              Inglês
            </label>
          </div>
          <div class="option">
            <label for="spanish">
              <input type="radio" class="radio" id="spanish" name="category" />
              Espanhol
            </label>
          </div>
          <div class="option">
            <label for="french">
              <input type="radio" class="radio" id="french" name="category" />
              Francês
            </label>
          </div>
          <div class="option">
            <label for="italian">
              <input type="radio" class="radio" id="italian" name="category" />
              Italiano
            </label>
          </div>
          <div class="option">
            <label for="german">
              <input type="radio" class="radio" id="german" name="category" />
              German
            </label>
          </div>
          <div class="option">
            <label for="arabic">
              <input type="radio" class="radio" id="arabic" name="category" />
              Árabe
            </label>
          </div>
          <div class="option">
            <label for="chinese">
              <input type="antartida" class="antartida" id="chinese" name="category" />
              Chinês
            </label>
          </div>
        </div>
        <div class="selected">
          Selecione o Idioma
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.app__filter-radio {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

.app__filter-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app__filter-option label {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
}

.app__filter-option .radio, .app__filter-option .checkbox {
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

.app__filter-option .checkbox {
  border-radius: 0;
}

.app__filter-option .radio:before, .app__filter-option .checkbox:before {
  content: '';
  width: 15px;
  height: 15px;
  background: #42b983;
  border-radius: 50%;
  opacity: 0;
  transition: all 600ms ease-in-out;
  position: absolute;
}

.app__filter-option .checkbox:before {
  border-radius: 0;
  background: transparent;
  border: 4px solid #42b983;
  border-left: 0;
  border-top: 0;
  width: 7px;
  height: 12px;
  transform: rotate(45deg);
  top: 2px;
}

.app__filter-option .radio:checked:before, .app__filter-option .checkbox:checked:before {
  opacity: 1;
}

.app__filter-option .radio:focus, .app__filter-option .checkbox:focus {
  box-shadow: 0 0 5px #2c3e50;
}

.app__filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
  h2 {
  margin: 16px;
}
.container {
  padding: 32px;
}
.app__select-box {
  display: flex;
  width: 400px;
  flex-direction: column;
}
.app__select-box .app__options-container {
  background: #2F3640;
  color: #F5F6FA;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
}
.selected {
  background: #2F3640;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #F5F6FA;
  position: relative;
  order: 0;
}
.selected::after {
  content: "";
  background: url(../assets/arrow-down.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 5px;
  transition: all 0.4s;
}
.app__select-box .app__options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}
.app__select-box .app__options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}
.app__select-box .app__options-container::-webkit-scrollbar {
  width: 8px;
  background: #0D141F;
  border-radius: 0 8px 8px 0;
}
.app__select-box .app__options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 0 8px 8px 0;
}
.app__select-box .option,
.selected {
  padding: 12px 24px;
  cursor: pointer;
}
.app__select-box .option:hover {
  background: #414B57;
}
.app__select-box label {
  cursor: pointer;
}
.app__select-box .option .radio {
  display: none;
}

</style>

<script>

</script>
