<template>
  <div class="app__main">
    <h1>Filtros</h1>
    <br>
    <p>De que forma você prefere visualizar a sua busca?</p>
  </div>

  <div class="wrapper">
    <div class="form-group">
      <label for="radio1">
        <input class="radio" name="theradio" id="radio1" type='radio' checked />
        Filtrar países por continentes
      </label>
    </div>
    <div class="form-group">
      <label for="radio2">
        <input class="radio" name="theradio" id="radio2" type='radio' checked  />
        Filtrar países por idioma
      </label>
    </div>
    <div class="form-group">
      <label for="radio2">
        <input class="radio" name="theradio" id="radio2" type='radio' checked  />
        Filtrar países com mais de 1 idioma
      </label>
    </div>
  </div>
</template>

<style>

.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
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
  background: #2c3e50;
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

</style>

<script>

</script>
