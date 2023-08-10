<script setup>
import useClima from "../composables/useClima";

const { formatearTemperatura } = useClima();
defineProps(["clima"]);
</script>

<template>
  <div class="resultado">
    <h2>Weather from: {{ clima.name }}</h2>
    <p class="actual">{{ formatearTemperatura(clima.main.temp) }} &deg;C</p>
    <div class="temperaturas">
      <p>
        Min: {{ formatearTemperatura(clima.main.temp_min) }}<span>&deg;C</span>
      </p>
      <p>
        Max: {{ formatearTemperatura(clima.main.temp_max) }}<span>&deg;C</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
