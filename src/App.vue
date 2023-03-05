<template>
  <div ref="app">
    <pokemon-component />
  </div>
</template>

<script>
import PokemonComponent from "./components/Pokemon/PokemonComponent.vue";
export default {
  name: "App",
  components: {
    PokemonComponent,
  },
};
</script>

<style lang="scss" scoped></style>
