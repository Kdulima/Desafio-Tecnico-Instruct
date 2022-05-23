<template>
<div>
  <table class="app__content-table">
  <thead>
    <tr>
      <th>Continente</th>
      <th>País</th>
      <th>Capital</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Europa</td>
      <td>França</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>Europa</td>
      <td>Itália</td>
      <td>Roma</td>
    </tr>
    <tr>
      <td>Europa</td>
      <td>Espanha</td>
      <td>Madri</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

</script>

<style>

* {
  font-family: sans-serif;
}

.app__content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.app__content-table thead tr {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.app__content-table td {
  cursor: pointer;
}

.app__content-table th,
.app__content-table td {
  padding: 12px 15px;
  text-align: center;
}

.app__content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.app__content-table tbody tr:last-of-type {
  border-bottom: 2px solid #2c3e50;
}

.app__content-table tbody tr:hover {
  font-weight: bold;
  background: #04d8ae;
  color: #fff;
}

</style>
