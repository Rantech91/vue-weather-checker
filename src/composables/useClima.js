import { ref, computed } from "vue";
import axios from "axios";

const clima = ref({});
const isLoading = ref(false);
const error = ref("");

export default function useClima() {
  const obtenerClima = async ({ ciudad, pais }) => {
    isLoading.value = true;
    clima.value = {};
    error.value = "";
    // Importar el Api Key
    const key = import.meta.env.VITE_API_KEY;
    try {
      //Obtener latitud y longitud
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      // Obtener el clima
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: resultado } = await axios(urlClima);
      clima.value = resultado;
    } catch {
      error.value = "City not found";
    } finally {
      isLoading.value = false;
    }
  };

  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  const formatearTemperatura = (temperatura) => parseInt(temperatura - 273.15);

  return {
    obtenerClima,
    clima,
    mostrarClima,
    formatearTemperatura,
    isLoading,
    error,
  };
}
