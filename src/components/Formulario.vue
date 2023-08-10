<script setup>
import { reactive, ref } from "vue";
import Alerta from "./Alerta.vue";

const busqueda = reactive({
  ciudad: "",
  pais: "",
});
const error = ref("");

const emit = defineEmits(["obtener-clima"]);

const paises = [
  { codigo: "US", nombre: "United States" },
  { codigo: "CL", nombre: "Chile" },
  { codigo: "MX", nombre: "México" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "Spain" },
  { codigo: "PE", nombre: "Perú" },
];

const consultarClima = () => {
  if (Object.values(busqueda).includes("")) {
    error.value = "All the fields are required";
    setTimeout(() => {
      error.value = "";
    }, 3000);
    return;
  }
  error.value = "";
  emit("obtener-clima", busqueda);
};
</script>

<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <Alerta v-if="error">{{ error }}</Alerta>
    <div class="campo">
      <label for="ciudad">City</label>
      <input
        type="text"
        id="ciudad"
        placeholder="City"
        v-model="busqueda.ciudad"
      />
    </div>

    <div class="campo">
      <label for="pais">Country</label>
      <select id="pais" v-model="busqueda.pais">
        <option value="">-- Select a country --</option>
        <option v-for="pais in paises" :value="pais.codigo">
          {{ pais.nombre }}
        </option>
      </select>
    </div>
    <input type="submit" value="Check the Weather" />
  </form>
</template>

<style lang="scss" scoped></style>
