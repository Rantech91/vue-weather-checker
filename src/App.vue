<script setup>
import Formulario from "./components/Formulario.vue";
import useClima from "./composables/useClima";
import Spinner from "./components/Spinner.vue";
import Clima from "./components/Clima.vue";

const { obtenerClima, clima, mostrarClima, isLoading, error } = useClima();
</script>

<template>
  <h1 class="titulo">Weather checker</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Spinner v-if="isLoading" />
    <Clima v-if="mostrarClima" :clima="clima" />
    <Alert v-if="error">{{ error }}</Alert>
  </div>
</template>
